declare namespace sun {
    namespace java2d {
        namespace pisces {
            class Stroker implements sun.awt.geom.PathConsumer2D {
                public static readonly JOIN_MITER: int
                public static readonly JOIN_ROUND: int
                public static readonly JOIN_BEVEL: int
                public static readonly CAP_BUTT: int
                public static readonly CAP_ROUND: int
                public static readonly CAP_SQUARE: int
                public constructor(arg0: sun.awt.geom.PathConsumer2D, arg1: float, arg2: int, arg3: int, arg4: float)
                public moveTo(arg0: float, arg1: float): void
                public lineTo(arg0: float, arg1: float): void
                public closePath(): void
                public pathDone(): void
                public curveTo(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
                public quadTo(arg0: float, arg1: float, arg2: float, arg3: float): void
                public getNativeConsumer(): long
                public static class: java.lang.Class<any>
            }
        }
    }
}