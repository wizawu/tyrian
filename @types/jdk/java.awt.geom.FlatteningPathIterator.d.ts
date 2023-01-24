declare namespace java {
  namespace awt {
    namespace geom {
      class FlatteningPathIterator implements java.awt.geom.PathIterator {
        static readonly GROW_SIZE: int
        src: java.awt.geom.PathIterator
        squareflat: double
        limit: int
        hold: double[]
        curx: double
        cury: double
        movx: double
        movy: double
        holdType: int
        holdEnd: int
        holdIndex: int
        levels: int[]
        levelIndex: int
        done: boolean
        public constructor(arg0: java.awt.geom.PathIterator, arg1: number | java.lang.Double)
        public constructor(
          arg0: java.awt.geom.PathIterator,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Integer
        )
        public getFlatness(): number
        public getRecursionLimit(): number
        public getWindingRule(): number
        public isDone(): boolean
        ensureHoldCapacity(arg0: number | java.lang.Integer): void
        public next(): void
        public currentSegment(arg0: number[] | java.lang.Float[]): number
        public currentSegment(arg0: number[] | java.lang.Double[]): number
      }
    }
  }
}
