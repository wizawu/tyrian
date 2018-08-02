declare namespace java {
    namespace awt {
        namespace image {
            class ShortLookupTable extends java.awt.image.LookupTable {
                public constructor(arg0: int, arg1: short[][])
                public constructor(arg0: int, arg1: short[])
                public getTable(): short[][]
                public lookupPixel(arg0: int[], arg1: int[]): int[]
                public lookupPixel(arg0: short[], arg1: short[]): short[]
                public static class: java.lang.Class<any>
            }
        }
    }
}