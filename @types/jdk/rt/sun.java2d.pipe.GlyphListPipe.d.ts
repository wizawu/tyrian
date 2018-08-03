declare namespace sun {
    namespace java2d {
        namespace pipe {
            abstract class GlyphListPipe implements sun.java2d.pipe.TextPipe {
                public constructor()
                public drawString(arg0: sun.java2d.SunGraphics2D, arg1: java.lang.String | string, arg2: double, arg3: double): void
                public drawChars(arg0: sun.java2d.SunGraphics2D, arg1: char[], arg2: int, arg3: int, arg4: int, arg5: int): void
                public drawGlyphVector(arg0: sun.java2d.SunGraphics2D, arg1: java.awt.font.GlyphVector, arg2: float, arg3: float): void
                protected abstract drawGlyphList(arg0: sun.java2d.SunGraphics2D, arg1: sun.font.GlyphList): void
                protected drawGlyphList(arg0: sun.java2d.SunGraphics2D, arg1: sun.font.GlyphList, arg2: int): void
                public static class: java.lang.Class<any>
            }
            interface GlyphListPipe$$Lambda implements sun.java2d.pipe.TextPipe {
                (arg0: sun.java2d.SunGraphics2D, arg1: sun.font.GlyphList): void
            }
        }
    }
}