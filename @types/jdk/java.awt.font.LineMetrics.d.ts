declare namespace java {
  namespace awt {
    namespace font {

      abstract class LineMetrics {
        public constructor()
        public abstract getNumChars(): number
        public abstract getAscent(): number
        public abstract getDescent(): number
        public abstract getLeading(): number
        public abstract getHeight(): number
        public abstract getBaselineIndex(): number
        public abstract getBaselineOffsets(): number[]
        public abstract getStrikethroughOffset(): number
        public abstract getStrikethroughThickness(): number
        public abstract getUnderlineOffset(): number
        public abstract getUnderlineThickness(): number
      }

    }
  }
}
