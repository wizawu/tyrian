declare namespace javax {
  namespace swing {
    namespace text {

      interface Caret {
        install(arg0: javax.swing.text.JTextComponent): void
        deinstall(arg0: javax.swing.text.JTextComponent): void
        paint(arg0: java.awt.Graphics): void
        addChangeListener(arg0: javax.swing.event.ChangeListener): void
        removeChangeListener(arg0: javax.swing.event.ChangeListener): void
        isVisible(): boolean
        setVisible(arg0: boolean): void
        isSelectionVisible(): boolean
        setSelectionVisible(arg0: boolean): void
        setMagicCaretPosition(arg0: java.awt.Point): void
        getMagicCaretPosition(): java.awt.Point
        setBlinkRate(arg0: int): void
        getBlinkRate(): int
        getDot(): int
        getMark(): int
        setDot(arg0: int): void
        moveDot(arg0: int): void
      }

    }
  }
}
