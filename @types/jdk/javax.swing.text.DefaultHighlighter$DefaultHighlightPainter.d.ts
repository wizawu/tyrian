declare namespace javax {
  namespace swing {
    namespace text {
      class DefaultHighlighter$DefaultHighlightPainter extends javax.swing.text.LayeredHighlighter$LayerPainter {
        public constructor(arg0: java.awt.Color)
        public getColor(): java.awt.Color
        public paint(
          arg0: java.awt.Graphics,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: java.awt.Shape,
          arg4: javax.swing.text.JTextComponent
        ): void
        public paintLayer(
          arg0: java.awt.Graphics,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: java.awt.Shape,
          arg4: javax.swing.text.JTextComponent,
          arg5: javax.swing.text.View
        ): java.awt.Shape
      }
    }
  }
}
