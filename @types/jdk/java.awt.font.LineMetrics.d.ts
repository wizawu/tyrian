declare namespace java {
  namespace awt {
    namespace font {

      abstract class LineMetrics {
        public constructor()
        public abstract getNumChars(): int
        public abstract getAscent(): float
        public abstract getDescent(): float
        public abstract getLeading(): float
        public abstract getHeight(): float
        public abstract getBaselineIndex(): int
        public abstract getBaselineOffsets(): float[]
        public abstract getStrikethroughOffset(): float
        public abstract getStrikethroughThickness(): float
        public abstract getUnderlineOffset(): float
        public abstract getUnderlineThickness(): float
      }

    }
  }
}
