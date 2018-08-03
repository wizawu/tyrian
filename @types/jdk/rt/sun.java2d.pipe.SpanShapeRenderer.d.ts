declare namespace sun {
    namespace java2d {
        namespace pipe {
            abstract class SpanShapeRenderer implements sun.java2d.pipe.ShapeDrawPipe {
                public static readonly NON_RECTILINEAR_TRANSFORM_MASK: int
                public constructor()
                public draw(arg0: sun.java2d.SunGraphics2D, arg1: java.awt.Shape): void
                public fill(arg0: sun.java2d.SunGraphics2D, arg1: java.awt.Shape): void
                public abstract startSequence(arg0: sun.java2d.SunGraphics2D, arg1: java.awt.Shape, arg2: java.awt.Rectangle, arg3: int[]): java.lang.Object
                public abstract renderBox(arg0: java.lang.Object, arg1: int, arg2: int, arg3: int, arg4: int): void
                public abstract endSequence(arg0: java.lang.Object): void
                public renderRect(arg0: sun.java2d.SunGraphics2D, arg1: java.awt.geom.Rectangle2D): void
                public renderSpans(arg0: sun.java2d.SunGraphics2D, arg1: sun.java2d.pipe.Region, arg2: java.awt.Shape, arg3: sun.java2d.pipe.ShapeSpanIterator): void
                public spanClipLoop(arg0: java.lang.Object, arg1: sun.java2d.pipe.SpanIterator, arg2: sun.java2d.pipe.Region, arg3: int[]): void
                public static class: java.lang.Class<any>
            }
        }
    }
}