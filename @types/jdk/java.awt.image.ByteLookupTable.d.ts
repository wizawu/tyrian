declare namespace java {
  namespace awt {
    namespace image {

      class ByteLookupTable extends java.awt.image.LookupTable {
        data: byte[][]
        public constructor(arg0: int, arg1: byte[][])
        public constructor(arg0: int, arg1: byte[])
        public getTable(): byte[][]
        public lookupPixel(arg0: int[], arg1: int[]): int[]
        public lookupPixel(arg0: byte[], arg1: byte[]): byte[]
      }

    }
  }
}
