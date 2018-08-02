declare namespace sun {
    namespace java2d {
        namespace xr {
            class XRRenderer implements sun.java2d.pipe.PixelDrawPipe , sun.java2d.pipe.PixelFillPipe , sun.java2d.pipe.ShapeDrawPipe {
                public constructor(arg0: sun.java2d.xr.MaskTileManager)
                public drawLine(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int): void
                public drawRect(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int): void
                public drawPolyline(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int[], arg2: int[], arg3: int): void
                public drawPolygon(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int[], arg2: int[], arg3: int): void
                public fillRect(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int): void
                public fillPolygon(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int[], arg2: int[], arg3: int): void
                public drawRoundRect(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
                public fillRoundRect(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
                public drawOval(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int): void
                public fillOval(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int): void
                public drawArc(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
                public fillArc(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
                protected drawPath(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.geom.Path2D$Float, arg2: int, arg3: int): void
                protected fillPath(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.geom.Path2D$Float, arg2: int, arg3: int): void
                protected fillSpans(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: sun.java2d.pipe.SpanIterator, arg2: int, arg3: int): void
                public draw(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Shape): void
                public fill(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Shape): void
                public static class: java.lang.Class<any>
            }
        }
    }
}