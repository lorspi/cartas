#!/usr/bin/env node
/**
 * Build the site and publish the contents of dist/ to the `main` branch,
 * which GitHub Pages serves for this project (https://lorspi.github.io/cartas/).
 *
 * Strategy: build with Vite, then use a detached git worktree checked out on
 * `main` to stage the freshly built files as a NEW commit on top of the branch
 * history. This never rewrites published history (no force push, no amend),
 * which keeps Lovable's synced branch intact.
 *
 * Files preserved on `main` across deploys: LICENSE (and CNAME if present).
 *
 * Usage:
 *   npm run deploy                 # build + publish to main
 *   npm run deploy -- --dry-run    # build + stage, but do not push
 */

import { execFileSync } from 'node:child_process';
import { existsSync, rmSync, cpSync, mkdtempSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const DEPLOY_BRANCH = 'main';
const DIST_DIR = 'dist';
// Files that live on `main` but are not produced by the build; keep them.
const PRESERVE = ['LICENSE', 'CNAME'];

const dryRun = process.argv.includes('--dry-run');

/** Run a git command, echoing it, and return trimmed stdout. */
function git(args, opts = {}) {
  console.log(`  git ${args.join(' ')}`);
  return execFileSync('git', args, {
    stdio: opts.capture ? ['ignore', 'pipe', 'inherit'] : 'inherit',
    encoding: 'utf8',
    ...opts,
  });
}

function run(cmd, args, opts = {}) {
  console.log(`  ${cmd} ${args.join(' ')}`);
  return execFileSync(cmd, args, { stdio: 'inherit', shell: true, ...opts });
}

// 0. Sanity checks -----------------------------------------------------------
const status = execFileSync('git', ['status', '--porcelain'], {
  encoding: 'utf8',
});
if (status.trim()) {
  console.error(
    '\n✗ Working tree is not clean. Commit or stash your changes on the\n' +
      '  source branch before deploying.\n',
  );
  process.exit(1);
}

const currentBranch = execFileSync(
  'git',
  ['rev-parse', '--abbrev-ref', 'HEAD'],
  { encoding: 'utf8' },
).trim();

const sourceSha = execFileSync('git', ['rev-parse', '--short', 'HEAD'], {
  encoding: 'utf8',
}).trim();

console.log(`\n▸ Deploying from '${currentBranch}' (${sourceSha}) to '${DEPLOY_BRANCH}'\n`);

// 1. Build -------------------------------------------------------------------
console.log('▸ Building production bundle...');
run('npm', ['run', 'build']);

if (!existsSync(DIST_DIR)) {
  console.error(`\n✗ Build did not produce a '${DIST_DIR}/' directory.\n`);
  process.exit(1);
}

// 2. Prepare a worktree on the deploy branch --------------------------------
console.log('\n▸ Preparing deploy worktree...');

// Make sure we have the latest remote state for the deploy branch.
try {
  git(['fetch', 'origin', DEPLOY_BRANCH]);
} catch {
  console.warn('  (could not fetch origin; continuing with local refs)');
}

const worktreeDir = mkdtempSync(join(tmpdir(), 'cartas-pages-'));

// Ensure a local branch tracking origin/<DEPLOY_BRANCH> exists / is current.
const hasLocalBranch =
  execFileSync('git', ['branch', '--list', DEPLOY_BRANCH], {
    encoding: 'utf8',
  }).trim() !== '';

try {
  if (hasLocalBranch) {
    git(['worktree', 'add', worktreeDir, DEPLOY_BRANCH]);
  } else {
    git(['worktree', 'add', worktreeDir, '-b', DEPLOY_BRANCH, `origin/${DEPLOY_BRANCH}`]);
  }

  // 3. Sync files: clear everything except .git and preserved files ----------
  console.log('\n▸ Syncing built files into worktree...');
  for (const entry of readdirSync(worktreeDir)) {
    if (entry === '.git' || PRESERVE.includes(entry)) continue;
    rmSync(join(worktreeDir, entry), { recursive: true, force: true });
  }

  // Copy dist/* into the worktree root.
  for (const entry of readdirSync(DIST_DIR)) {
    cpSync(join(DIST_DIR, entry), join(worktreeDir, entry), {
      recursive: true,
    });
  }

  // 4. Commit & push ---------------------------------------------------------
  const commitMsg = `deploy: publish site from ${currentBranch}@${sourceSha}`;
  git(['-C', worktreeDir, 'add', '--all']);

  const wtStatus = execFileSync('git', ['-C', worktreeDir, 'status', '--porcelain'], {
    encoding: 'utf8',
  });
  if (!wtStatus.trim()) {
    console.log('\n✓ No changes to publish — the deploy branch is already up to date.\n');
  } else {
    git(['-C', worktreeDir, 'commit', '-m', commitMsg]);
    if (dryRun) {
      console.log('\n▸ --dry-run: committed locally but NOT pushing.\n');
    } else {
      git(['-C', worktreeDir, 'push', 'origin', DEPLOY_BRANCH]);
      console.log(`\n✓ Published to '${DEPLOY_BRANCH}'. GitHub Pages will update shortly.\n`);
    }
  }
} finally {
  // 5. Always clean up the worktree ------------------------------------------
  try {
    git(['worktree', 'remove', worktreeDir, '--force']);
  } catch {
    // Best-effort; remove the temp dir directly if git couldn't.
    rmSync(worktreeDir, { recursive: true, force: true });
  }
}
