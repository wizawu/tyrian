declare namespace javax {
  namespace swing {
    namespace text {
      interface Highlighter {
        install(arg0: javax.swing.text.JTextComponent): void
        deinstall(arg0: javax.swing.text.JTextComponent): void
        paint(arg0: java.awt.Graphics): void
        addHighlight(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: javax.swing.text.Highlighter$HighlightPainter | javax.swing.text.Highlighter$HighlightPainter$$lambda
        ): java.lang.Object
        removeHighlight(arg0: java.lang.Object | any): void
        removeAllHighlights(): void
        changeHighlight(
          arg0: java.lang.Object | any,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        getHighlights(): javax.swing.text.Highlighter$Highlight[]
      }
    }
  }
}
