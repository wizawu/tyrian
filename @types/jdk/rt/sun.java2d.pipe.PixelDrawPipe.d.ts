declare namespace sun {
    namespace java2d {
        namespace pipe {
            interface PixelDrawPipe {
                drawLine(arg0: sun.java2d.SunGraphics2D, arg1: int, arg2: int, arg3: int, arg4: int): void
                drawRect(arg0: sun.java2d.SunGraphics2D, arg1: int, arg2: int, arg3: int, arg4: int): void
                drawRoundRect(arg0: sun.java2d.SunGraphics2D, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
                drawOval(arg0: sun.java2d.SunGraphics2D, arg1: int, arg2: int, arg3: int, arg4: int): void
                drawArc(arg0: sun.java2d.SunGraphics2D, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
                drawPolyline(arg0: sun.java2d.SunGraphics2D, arg1: int[], arg2: int[], arg3: int): void
                drawPolygon(arg0: sun.java2d.SunGraphics2D, arg1: int[], arg2: int[], arg3: int): void
            }
        }
    }
}