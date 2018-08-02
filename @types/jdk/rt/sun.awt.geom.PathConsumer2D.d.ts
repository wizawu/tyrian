declare namespace sun {
    namespace awt {
        namespace geom {
            interface PathConsumer2D {
                moveTo(arg0: float, arg1: float): void
                lineTo(arg0: float, arg1: float): void
                quadTo(arg0: float, arg1: float, arg2: float, arg3: float): void
                curveTo(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
                closePath(): void
                pathDone(): void
                getNativeConsumer(): long
            }
        }
    }
}