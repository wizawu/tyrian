declare namespace java {
  namespace awt {
    namespace geom {
      interface PathIterator {
        readonly WIND_EVEN_ODD: int
        readonly WIND_NON_ZERO: int
        readonly SEG_MOVETO: int
        readonly SEG_LINETO: int
        readonly SEG_QUADTO: int
        readonly SEG_CUBICTO: int
        readonly SEG_CLOSE: int
        getWindingRule(): number
        isDone(): boolean
        next(): void
        currentSegment(arg0: number[] | java.lang.Float[]): number
        currentSegment(arg0: number[] | java.lang.Double[]): number
      }
    }
  }
}
