declare namespace sun {
    namespace java2d {
        namespace pipe {
            abstract class BufferedMaskFill extends sun.java2d.loops.MaskFill {
                protected readonly rq: sun.java2d.pipe.RenderQueue
                protected constructor(arg0: sun.java2d.pipe.RenderQueue, arg1: sun.java2d.loops.SurfaceType, arg2: sun.java2d.loops.CompositeType, arg3: sun.java2d.loops.SurfaceType)
                public MaskFill(arg0: sun.java2d.SunGraphics2D, arg1: sun.java2d.SurfaceData, arg2: java.awt.Composite | java.awt.Composite$$Lambda, arg3: int, arg4: int, arg5: int, arg6: int, arg7: byte[], arg8: int, arg9: int): void
                protected abstract maskFill(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: byte[]): void
                protected abstract validateContext(arg0: sun.java2d.SunGraphics2D, arg1: java.awt.Composite | java.awt.Composite$$Lambda, arg2: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}