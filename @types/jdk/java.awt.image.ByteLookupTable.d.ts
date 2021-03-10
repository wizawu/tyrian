declare namespace java {
  namespace awt {
    namespace image {

      class ByteLookupTable extends java.awt.image.LookupTable {
        data: byte[][]
        public constructor(arg0: number | java.lang.Integer, arg1: number[][] | java.lang.Byte[][])
        public constructor(arg0: number | java.lang.Integer, arg1: number[] | java.lang.Byte[])
        public getTable(): number[][]
        public lookupPixel(arg0: number[] | java.lang.Integer[], arg1: number[] | java.lang.Integer[]): number[]
        public lookupPixel(arg0: number[] | java.lang.Byte[], arg1: number[] | java.lang.Byte[]): number[]
      }

    }
  }
}
