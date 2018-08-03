declare namespace sun {
    namespace java2d {
        namespace pipe {
            interface PixelFillPipe {
                fillRect(arg0: sun.java2d.SunGraphics2D, arg1: int, arg2: int, arg3: int, arg4: int): void
                fillRoundRect(arg0: sun.java2d.SunGraphics2D, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
                fillOval(arg0: sun.java2d.SunGraphics2D, arg1: int, arg2: int, arg3: int, arg4: int): void
                fillArc(arg0: sun.java2d.SunGraphics2D, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
                fillPolygon(arg0: sun.java2d.SunGraphics2D, arg1: int[], arg2: int[], arg3: int): void
            }
        }
    }
}