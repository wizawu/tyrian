declare namespace sun {
    namespace java2d {
        namespace pipe {
            abstract class BufferedContext {
                public static NO_CONTEXT_FLAGS: int
                public static SRC_IS_OPAQUE: int
                public static USE_MASK: int
                protected rq: sun.java2d.pipe.RenderQueue
                protected buf: sun.java2d.pipe.RenderBuffer
                protected static currentContext: sun.java2d.pipe.BufferedContext
                protected constructor(arg0: sun.java2d.pipe.RenderQueue)
                public static validateContext(arg0: sun.java2d.pipe.hw.AccelSurface, arg1: sun.java2d.pipe.hw.AccelSurface, arg2: sun.java2d.pipe.Region, arg3: java.awt.Composite | java.awt.Composite$$Lambda, arg4: java.awt.geom.AffineTransform, arg5: java.awt.Paint | java.awt.Paint$$Lambda, arg6: sun.java2d.SunGraphics2D, arg7: int): void
                public static validateContext(arg0: sun.java2d.pipe.hw.AccelSurface): void
                public validate(arg0: sun.java2d.pipe.hw.AccelSurface, arg1: sun.java2d.pipe.hw.AccelSurface, arg2: sun.java2d.pipe.Region, arg3: java.awt.Composite | java.awt.Composite$$Lambda, arg4: java.awt.geom.AffineTransform, arg5: java.awt.Paint | java.awt.Paint$$Lambda, arg6: sun.java2d.SunGraphics2D, arg7: int): void
                public invalidateContext(): void
                public getRenderQueue(): sun.java2d.pipe.RenderQueue
                public saveState(): void
                public restoreState(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}