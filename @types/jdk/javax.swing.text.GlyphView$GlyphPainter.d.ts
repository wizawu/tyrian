declare namespace javax {
  namespace swing {
    namespace text {
      abstract class GlyphView$GlyphPainter {
        public constructor()
        public abstract getSpan(
          arg0: javax.swing.text.GlyphView,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: javax.swing.text.TabExpander | javax.swing.text.TabExpander$$lambda,
          arg4: number | java.lang.Float
        ): number
        public abstract getHeight(arg0: javax.swing.text.GlyphView): number
        public abstract getAscent(arg0: javax.swing.text.GlyphView): number
        public abstract getDescent(arg0: javax.swing.text.GlyphView): number
        public abstract paint(
          arg0: javax.swing.text.GlyphView,
          arg1: java.awt.Graphics,
          arg2: java.awt.Shape,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer
        ): void
        public abstract modelToView(
          arg0: javax.swing.text.GlyphView,
          arg1: number | java.lang.Integer,
          arg2: javax.swing.text.Position$Bias,
          arg3: java.awt.Shape
        ): java.awt.Shape
        public abstract viewToModel(
          arg0: javax.swing.text.GlyphView,
          arg1: number | java.lang.Float,
          arg2: number | java.lang.Float,
          arg3: java.awt.Shape,
          arg4: javax.swing.text.Position$Bias[]
        ): number
        public abstract getBoundedPosition(
          arg0: javax.swing.text.GlyphView,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Float,
          arg3: number | java.lang.Float
        ): number
        public getPainter(
          arg0: javax.swing.text.GlyphView,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): javax.swing.text.GlyphView$GlyphPainter
        public getNextVisualPositionFrom(
          arg0: javax.swing.text.GlyphView,
          arg1: number | java.lang.Integer,
          arg2: javax.swing.text.Position$Bias,
          arg3: java.awt.Shape,
          arg4: number | java.lang.Integer,
          arg5: javax.swing.text.Position$Bias[]
        ): number
      }
    }
  }
}
