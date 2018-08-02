declare namespace java {
    namespace awt {
        namespace geom {
class FlatteningPathIterator implements java.awt.geom.PathIterator {
    public constructor(arg0: java.awt.geom.PathIterator, arg1: double)
    public constructor(arg0: java.awt.geom.PathIterator, arg1: double, arg2: int)
    public getFlatness(): double
    public getRecursionLimit(): int
    public getWindingRule(): int
    public isDone(): boolean
    public next(): void
    public currentSegment(arg0: float[]): int
    public currentSegment(arg0: double[]): int
    public static class: java.lang.Class<any>
}

        }
    }
}