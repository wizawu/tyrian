declare namespace sun {
    namespace java2d {
        namespace pipe {
            class PixelToShapeConverter implements sun.java2d.pipe.PixelDrawPipe , sun.java2d.pipe.PixelFillPipe {
                public constructor(arg0: sun.java2d.pipe.ShapeDrawPipe)
                public drawLine(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int): void
                public drawRect(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int): void
                public fillRect(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int): void
                public drawRoundRect(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
                public fillRoundRect(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
                public drawOval(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int): void
                public fillOval(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int): void
                public drawArc(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
                public fillArc(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
                public drawPolyline(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int[], arg2: int[], arg3: int): void
                public drawPolygon(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int[], arg2: int[], arg3: int): void
                public fillPolygon(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int[], arg2: int[], arg3: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}