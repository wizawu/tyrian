declare namespace sun {
    namespace java2d {
        namespace pipe {
class AAShapePipe implements sun.java2d.pipe.ShapeDrawPipe , sun.java2d.pipe.ParallelogramPipe {
    public constructor(arg0: sun.java2d.pipe.CompositePipe)
    public draw(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Shape): void
    public fill(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Shape): void
    public fillParallelogram(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double, arg9: double, arg10: double): void
    public drawParallelogram(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double, arg9: double, arg10: double, arg11: double, arg12: double): void
    public renderPath(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Shape, arg2: java.awt.BasicStroke | java.awt.BasicStroke$$Lambda): void
    public renderTiles(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Shape, arg2: sun.java2d.pipe.AATileGenerator, arg3: int[]): void
    public static class: java.lang.Class<any>
}

        }
    }
}