declare namespace javax {
  namespace swing {
    namespace text {
      abstract class LayeredHighlighter implements javax.swing.text.Highlighter {
        public constructor()
        public abstract paintLayeredHighlights(
          arg0: java.awt.Graphics,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: java.awt.Shape,
          arg4: javax.swing.text.JTextComponent,
          arg5: javax.swing.text.View
        ): void
      }
    }
  }
}
