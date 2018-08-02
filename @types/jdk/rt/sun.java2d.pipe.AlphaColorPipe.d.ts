declare namespace sun {
    namespace java2d {
        namespace pipe {
class AlphaColorPipe implements sun.java2d.pipe.CompositePipe , sun.java2d.pipe.ParallelogramPipe {
    public constructor()
    public startSequence(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Shape, arg2: java.awt.Rectangle, arg3: int[]): java.lang.Object
    public needTile(arg0: java.lang.Object, arg1: int, arg2: int, arg3: int, arg4: int): boolean
    public renderPathTile(arg0: java.lang.Object, arg1: byte[], arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int): void
    public skipTile(arg0: java.lang.Object, arg1: int, arg2: int): void
    public endSequence(arg0: java.lang.Object): void
    public fillParallelogram(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double, arg9: double, arg10: double): void
    public drawParallelogram(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double, arg9: double, arg10: double, arg11: double, arg12: double): void
    public static class: java.lang.Class<any>
}

        }
    }
}