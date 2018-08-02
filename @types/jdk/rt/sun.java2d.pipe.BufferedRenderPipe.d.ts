declare namespace sun {
    namespace java2d {
        namespace pipe {
abstract class BufferedRenderPipe implements sun.java2d.pipe.PixelDrawPipe , sun.java2d.pipe.PixelFillPipe , sun.java2d.pipe.ShapeDrawPipe , sun.java2d.pipe.ParallelogramPipe {
    protected rq: sun.java2d.pipe.RenderQueue
    protected buf: sun.java2d.pipe.RenderBuffer
    public constructor(arg0: sun.java2d.pipe.RenderQueue)
    public getAAParallelogramPipe(): sun.java2d.pipe.ParallelogramPipe
    protected validateContext(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda): void
    protected validateContextAA(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda): void
    public drawLine(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int): void
    public drawRect(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int): void
    public fillRect(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int): void
    public drawRoundRect(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
    public fillRoundRect(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
    public drawOval(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int): void
    public fillOval(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int): void
    public drawArc(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
    public fillArc(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
    protected drawPoly(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int[], arg2: int[], arg3: int, arg4: boolean): void
    protected drawPoly(arg0: int[], arg1: int[], arg2: int, arg3: boolean, arg4: int, arg5: int): void
    public drawPolyline(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int[], arg2: int[], arg3: int): void
    public drawPolygon(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int[], arg2: int[], arg3: int): void
    public fillPolygon(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int[], arg2: int[], arg3: int): void
    protected drawPath(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.geom.Path2D$Float, arg2: int, arg3: int): void
    protected fillPath(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.geom.Path2D$Float, arg2: int, arg3: int): void
    protected fillSpans(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: sun.java2d.pipe.SpanIterator, arg2: int, arg3: int): void
    public fillParallelogram(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double, arg9: double, arg10: double): void
    public drawParallelogram(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double, arg9: double, arg10: double, arg11: double, arg12: double): void
    public draw(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Shape): void
    public fill(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Shape): void
    public static class: java.lang.Class<any>
}

        }
    }
}