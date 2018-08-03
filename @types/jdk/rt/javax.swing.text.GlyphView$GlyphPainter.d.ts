declare namespace javax {
    namespace swing {
        namespace text {
            abstract class GlyphView$GlyphPainter {
                public constructor()
                public abstract getSpan(arg0: javax.swing.text.GlyphView, arg1: int, arg2: int, arg3: javax.swing.text.TabExpander | javax.swing.text.TabExpander$$Lambda, arg4: float): float
                public abstract getHeight(arg0: javax.swing.text.GlyphView): float
                public abstract getAscent(arg0: javax.swing.text.GlyphView): float
                public abstract getDescent(arg0: javax.swing.text.GlyphView): float
                public abstract paint(arg0: javax.swing.text.GlyphView, arg1: java.awt.Graphics, arg2: java.awt.Shape, arg3: int, arg4: int): void
                public abstract modelToView(arg0: javax.swing.text.GlyphView, arg1: int, arg2: javax.swing.text.Position$Bias, arg3: java.awt.Shape): java.awt.Shape
                public abstract viewToModel(arg0: javax.swing.text.GlyphView, arg1: float, arg2: float, arg3: java.awt.Shape, arg4: javax.swing.text.Position$Bias[]): int
                public abstract getBoundedPosition(arg0: javax.swing.text.GlyphView, arg1: int, arg2: float, arg3: float): int
                public getPainter(arg0: javax.swing.text.GlyphView, arg1: int, arg2: int): javax.swing.text.GlyphView$GlyphPainter
                public getNextVisualPositionFrom(arg0: javax.swing.text.GlyphView, arg1: int, arg2: javax.swing.text.Position$Bias, arg3: java.awt.Shape, arg4: int, arg5: javax.swing.text.Position$Bias[]): int
                public static class: java.lang.Class<any>
            }
        }
    }
}