declare namespace java {
    namespace awt {
        namespace image {
            abstract class LookupTable {
                protected constructor(arg0: int, arg1: int)
                public getNumComponents(): int
                public getOffset(): int
                public abstract lookupPixel(arg0: int[], arg1: int[]): int[]
                public static class: java.lang.Class<any>
            }
            interface LookupTable$$Lambda {
                (arg0: int[], arg1: int[]): int[]
            }
        }
    }
}