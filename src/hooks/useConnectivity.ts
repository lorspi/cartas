import { useCallback, useEffect, useRef, useState } from 'react';

// How long we wait for the probe before assuming there's no connection.
const PROBE_TIMEOUT_MS = 5000;
// While offline, how often we quietly try again so the banner can clear
// itself the moment a connection comes back.
const RECHECK_INTERVAL_MS = 20000;

/**
 * `public/ping.txt` is deliberately excluded from the service worker's
 * precache and runtime caching (see vite.config.ts), so this fetch always
 * has to reach the network to succeed — unlike `navigator.onLine`, which
 * only reflects whether a network interface is up, not whether it actually
 * reaches the internet.
 */
async function probeConnectivity(): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    return false;
  }
  try {
    const base = import.meta.env.BASE_URL || '/';
    const response = await fetch(`${base}ping.txt?t=${Date.now()}`, {
      method: 'GET',
      cache: 'no-store',
      signal: AbortSignal.timeout(PROBE_TIMEOUT_MS),
    });
    return response.ok;
  } catch {
    return false;
  }
}

/** Asks any active service worker to check for a newer deployed version. */
async function checkForServiceWorkerUpdate(): Promise<void> {
  try {
    const registration = await navigator.serviceWorker?.getRegistration();
    await registration?.update();
  } catch {
    // Best-effort — a plain reload below still picks up the network's
    // current response even if this check fails.
  }
}

export interface ConnectivityState {
  /** null until the first probe resolves. */
  isOnline: boolean | null;
}

/**
 * Tracks real internet reachability (not just `navigator.onLine`) so the
 * offline banner only appears when the reader genuinely can't reach the
 * network, and disappears as soon as a connection is confirmed — quietly
 * re-probing every RECHECK_INTERVAL_MS while offline so it clears on its
 * own, with no action needed from the reader.
 */
export function useConnectivity(): ConnectivityState {
  const [isOnline, setIsOnline] = useState<boolean | null>(null);
  const mountedRef = useRef(true);
  const wasOffline = useRef(false);

  const check = useCallback(async () => {
    const online = await probeConnectivity();
    if (mountedRef.current) setIsOnline(online);
    // Coming back from offline is exactly when there's fresh content to
    // prioritize, so nudge the service worker to check for a newer version.
    if (online && wasOffline.current) {
      checkForServiceWorkerUpdate();
    }
    wasOffline.current = !online;
    return online;
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    check();

    const handleOnline = () => check();
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      mountedRef.current = false;
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [check]);

  useEffect(() => {
    if (isOnline !== false) return;
    const id = window.setInterval(check, RECHECK_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [isOnline, check]);

  return { isOnline };
}
