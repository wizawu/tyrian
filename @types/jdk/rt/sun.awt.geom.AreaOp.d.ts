declare namespace sun {
    namespace awt {
        namespace geom {
            abstract class AreaOp {
                public static CTAG_LEFT: int
                public static CTAG_RIGHT: int
                public static ETAG_IGNORE: int
                public static ETAG_ENTER: int
                public static ETAG_EXIT: int
                public static RSTAG_INSIDE: int
                public static RSTAG_OUTSIDE: int
                public newRow(): void
                public classify(arg0: sun.awt.geom.Edge): int
                public getState(): int
                public calculate(arg0: java.util.Vector, arg1: java.util.Vector): java.util.Vector
                public static finalizeSubCurves(arg0: java.util.Vector, arg1: java.util.Vector): void
                public static resolveLinks(arg0: java.util.Vector, arg1: java.util.Vector, arg2: java.util.Vector): void
                public static obstructs(arg0: double, arg1: double, arg2: int): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}