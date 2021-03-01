declare namespace java {
  namespace awt {
    namespace image {

      abstract class LookupTable {

        numComponents: int
        offset: int
        numEntries: int
        protected constructor(arg0: int, arg1: int)
        public getNumComponents(): int
        public getOffset(): int
        public abstract lookupPixel(arg0: int[], arg1: int[]): int[]
      }

    }
  }
}
