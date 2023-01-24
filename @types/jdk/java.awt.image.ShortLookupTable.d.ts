declare namespace java {
  namespace awt {
    namespace image {
      class ShortLookupTable extends java.awt.image.LookupTable {
        data: short[][]
        public constructor(arg0: number | java.lang.Integer, arg1: number[][] | java.lang.Short[][])
        public constructor(arg0: number | java.lang.Integer, arg1: number[] | java.lang.Short[])
        public getTable(): number[][]
        public lookupPixel(arg0: number[] | java.lang.Integer[], arg1: number[] | java.lang.Integer[]): number[]
        public lookupPixel(arg0: number[] | java.lang.Short[], arg1: number[] | java.lang.Short[]): number[]
      }
    }
  }
}
