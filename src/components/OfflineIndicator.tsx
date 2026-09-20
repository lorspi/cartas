import React, { useId, useState } from 'react';
import { WifiOff } from 'lucide-react';
import { useConnectivity } from '../hooks/useConnectivity';

interface OfflineIndicatorProps {
  className?: string;
  iconClassName?: string;
  /** Which side of the tooltip lines up with the icon. */
  align?: 'left' | 'right';
  /** Whether the tooltip opens below or above the icon. */
  side?: 'top' | 'bottom';
}

/**
 * A small icon, meant to sit beside the light/dark theme toggle, that only
 * renders once real network reachability has been ruled out (see
 * useConnectivity). Hovering reveals a tooltip on desktop; tapping does the
 * same on touch devices, since there's no hover there.
 */
export const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({
  className = '',
  iconClassName = 'w-3.5 h-3.5',
  align = 'right',
  side = 'bottom',
}) => {
  const { isOnline } = useConnectivity();
  const [open, setOpen] = useState(false);
  const reactId = useId();
  const tooltipId = `offline-indicator-tooltip-${reactId}`;

  if (isOnline !== false) return null;

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        aria-label="Sin conexión: viendo una versión guardada"
        aria-describedby={tooltipId}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onClick={() => setOpen(true)}
        className={`inline-flex items-center justify-center text-[#8c8479] dark:text-[#7d756a] hover:text-[#211e1c] dark:hover:text-[#ede7e0] transition-colors ${className}`}
      >
        <WifiOff className={iconClassName} strokeWidth={1.75} />
      </button>

      <div
        id={tooltipId}
        role="tooltip"
        className={`absolute z-50 whitespace-nowrap rounded-sm border border-[#dad4cb] dark:border-[#383633] bg-[#ece9e4] dark:bg-[#1c1b1b] px-2.5 py-1.5 text-xs font-sans text-[#6b645c] dark:text-[#9c958c] shadow-lg transition-opacity ${
          side === 'bottom' ? 'top-full mt-2' : 'bottom-full mb-2'
        } ${align === 'right' ? 'right-0' : 'left-0'} ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        Sin conexión: estás viendo una versión guardada
      </div>
    </div>
  );
};
