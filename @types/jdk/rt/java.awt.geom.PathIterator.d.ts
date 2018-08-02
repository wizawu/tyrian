declare namespace java {
    namespace awt {
        namespace geom {
interface PathIterator {
    WIND_EVEN_ODD: int
    WIND_NON_ZERO: int
    SEG_MOVETO: int
    SEG_LINETO: int
    SEG_QUADTO: int
    SEG_CUBICTO: int
    SEG_CLOSE: int
    getWindingRule(): int
    isDone(): boolean
    next(): void
    currentSegment(arg0: float[]): int
    currentSegment(arg0: double[]): int
}

        }
    }
}