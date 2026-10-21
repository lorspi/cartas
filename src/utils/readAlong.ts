// ---------------------------------------------------------------------------
// Read-along: locates each narrated fragment inside the rendered letter so the
// audio player can highlight it. The narration text was cleaned from the same
// markdown, so it matches the DOM once both sides are reduced to bare letters
// and digits (no punctuation, accents, case, quotes or markdown).
// ---------------------------------------------------------------------------

export interface AudioFragment {
  start: number;
  end: number;
  text: string;
}

export interface LetterAudio {
  duration: number;
  fragments: AudioFragment[];
}

/** Maps every kept character of the normalized page text back to the text
 *  node and offset it came from, so a match can be turned into a DOM Range. */
interface TextIndex {
  chars: string;
  nodes: Text[];
  offsets: number[];
}

/** Lowercase, accent-free letters/digits of a single character ('' if none). */
function normalizeChar(char: string): string {
  const base = char.normalize('NFD')[0]?.toLowerCase() ?? '';
  return /[\p{L}\p{N}]/u.test(base) ? base : '';
}

export function normalizeText(text: string): string {
  let out = '';
  for (const char of text) out += normalizeChar(char);
  return out;
}

function buildIndex(roots: Element[]): TextIndex {
  const index: TextIndex = { chars: '', nodes: [], offsets: [] };
  const parts: string[] = [];
  for (const root of roots) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    for (let node = walker.nextNode() as Text | null; node; node = walker.nextNode() as Text | null) {
      const data = node.data;
      for (let i = 0; i < data.length; i++) {
        const kept = normalizeChar(data[i]);
        if (!kept) continue;
        parts.push(kept);
        index.nodes.push(node);
        index.offsets.push(i);
      }
    }
  }
  index.chars = parts.join('');
  return index;
}

/** Finds the DOM range of every fragment, in narration order. Fragments that
 *  can't be found (e.g. the letter was edited after the audio was generated)
 *  get `null` and simply aren't highlighted. */
export function locateFragments(roots: Element[], fragments: AudioFragment[]): (Range | null)[] {
  const index = buildIndex(roots);
  let from = 0;
  return fragments.map((fragment) => {
    const needle = normalizeText(fragment.text);
    if (!needle) return null;
    let at = index.chars.indexOf(needle, from);
    if (at === -1) at = index.chars.indexOf(needle);
    if (at === -1) return null;
    from = at + needle.length;

    // Widen the match over adjacent punctuation (¿…?, «…») in the same nodes.
    const last = at + needle.length - 1;
    const startNode = index.nodes[at];
    const endNode = index.nodes[last];
    let startOffset = index.offsets[at];
    let endOffset = index.offsets[last] + 1;
    while (startOffset > 0 && /[¿¡«"“'‘(—-]/.test(startNode.data[startOffset - 1])) startOffset--;
    while (endOffset < endNode.data.length && /[.,;:?!…»"”'’)]/.test(endNode.data[endOffset])) endOffset++;

    const range = document.createRange();
    range.setStart(startNode, startOffset);
    range.setEnd(endNode, endOffset);
    return range;
  });
}

/** Index of the fragment playing at `time` (pauses count as the previous one). */
export function fragmentAt(fragments: AudioFragment[], time: number): number {
  let lo = 0;
  let hi = fragments.length - 1;
  let found = -1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (fragments[mid].start <= time) {
      found = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return found;
}
