declare namespace javax {
  namespace swing {
    namespace text {

      interface Highlighter {

        install(arg0: javax.swing.text.JTextComponent): void
        deinstall(arg0: javax.swing.text.JTextComponent): void
        paint(arg0: java.awt.Graphics): void
        addHighlight(arg0: int, arg1: int, arg2: javax.swing.text.Highlighter$HighlightPainter): java.lang.Object
        removeHighlight(arg0: java.lang.Object): void
        removeAllHighlights(): void
        changeHighlight(arg0: java.lang.Object, arg1: int, arg2: int): void
        getHighlights(): javax.swing.text.Highlighter$Highlight[]
      }

    }
  }
}
