declare namespace java {
  namespace awt {
    namespace image {

      class ShortLookupTable extends java.awt.image.LookupTable {
        data: short[][]
        public constructor(arg0: number | java.lang.Integer, arg1: short[][])
        public constructor(arg0: number | java.lang.Integer, arg1: short[])
        public getTable(): number[][]
        public lookupPixel(arg0: int[], arg1: int[]): number[]
        public lookupPixel(arg0: short[], arg1: short[]): number[]
      }

    }
  }
}
