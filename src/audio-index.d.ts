declare module 'virtual:audio-index' {
  /** Narration length in seconds, keyed by letter slug (see vite.config.ts). */
  const index: Record<string, number>;
  export default index;
}
