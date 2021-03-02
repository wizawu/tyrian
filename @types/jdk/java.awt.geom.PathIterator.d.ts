declare namespace java {
  namespace awt {
    namespace geom {

      interface PathIterator {
        public static readonly WIND_EVEN_ODD: int
        public static readonly WIND_NON_ZERO: int
        public static readonly SEG_MOVETO: int
        public static readonly SEG_LINETO: int
        public static readonly SEG_QUADTO: int
        public static readonly SEG_CUBICTO: int
        public static readonly SEG_CLOSE: int
        getWindingRule(): int
        isDone(): boolean
        next(): void
        currentSegment(arg0: float[]): int
        currentSegment(arg0: double[]): int
      }

    }
  }
}
