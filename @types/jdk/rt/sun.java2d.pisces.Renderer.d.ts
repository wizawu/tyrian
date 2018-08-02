declare namespace sun {
    namespace java2d {
        namespace pisces {
class Renderer implements sun.awt.geom.PathConsumer2D {
    public static WIND_EVEN_ODD: int
    public static WIND_NON_ZERO: int
    public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int)
    public moveTo(arg0: float, arg1: float): void
    public lineTo(arg0: float, arg1: float): void
    public curveTo(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
    public quadTo(arg0: float, arg1: float, arg2: float, arg3: float): void
    public closePath(): void
    public pathDone(): void
    public getNativeConsumer(): long
    public endRendering(): void
    public getCache(): sun.java2d.pisces.PiscesCache
    public static class: java.lang.Class<any>
}

        }
    }
}