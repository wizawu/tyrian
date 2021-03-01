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
        public constructor(arg0: java.awt.geom.PathIterator, arg1: double)
        public constructor(arg0: java.awt.geom.PathIterator, arg1: double, arg2: int)
        public getFlatness(): double
        public getRecursionLimit(): int
        public getWindingRule(): int
        public isDone(): boolean
        ensureHoldCapacity(arg0: int): void
        public next(): void
        public currentSegment(arg0: float[]): int
        public currentSegment(arg0: double[]): int
      }

    }
  }
}
