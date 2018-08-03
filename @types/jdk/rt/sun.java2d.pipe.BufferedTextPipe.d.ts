declare namespace sun {
    namespace java2d {
        namespace pipe {
            abstract class BufferedTextPipe extends sun.java2d.pipe.GlyphListPipe {
                protected readonly rq: sun.java2d.pipe.RenderQueue
                protected constructor(arg0: sun.java2d.pipe.RenderQueue)
                protected drawGlyphList(arg0: sun.java2d.SunGraphics2D, arg1: sun.font.GlyphList): void
                protected abstract drawGlyphList(arg0: int, arg1: boolean, arg2: boolean, arg3: boolean, arg4: int, arg5: float, arg6: float, arg7: long[], arg8: float[]): void
                protected abstract validateContext(arg0: sun.java2d.SunGraphics2D, arg1: java.awt.Composite | java.awt.Composite$$Lambda): void
                public static class: java.lang.Class<any>
            }
        }
    }
}