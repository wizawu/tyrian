declare namespace sun {
    namespace java2d {
        namespace pisces {
class Dasher implements sun.awt.geom.PathConsumer2D {
    public constructor(arg0: sun.awt.geom.PathConsumer2D, arg1: float[], arg2: float)
    public moveTo(arg0: float, arg1: float): void
    public lineTo(arg0: float, arg1: float): void
    public curveTo(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
    public quadTo(arg0: float, arg1: float, arg2: float, arg3: float): void
    public closePath(): void
    public pathDone(): void
    public getNativeConsumer(): long
    public static class: java.lang.Class<any>
}

        }
    }
}