declare namespace java {
  namespace awt {
    namespace image {
      abstract class LookupTable {
        numComponents: int
        offset: int
        numEntries: int
        protected constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
        public getNumComponents(): number
        public getOffset(): number
        public abstract lookupPixel(
          arg0: number[] | java.lang.Integer[],
          arg1: number[] | java.lang.Integer[]
        ): number[]
      }
    }
  }
}
