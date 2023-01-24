declare namespace javax {
  namespace swing {
    namespace text {
      interface Caret {
        install(arg0: javax.swing.text.JTextComponent): void
        deinstall(arg0: javax.swing.text.JTextComponent): void
        paint(arg0: java.awt.Graphics): void
        addChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda): void
        removeChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda): void
        isVisible(): boolean
        setVisible(arg0: boolean | java.lang.Boolean): void
        isSelectionVisible(): boolean
        setSelectionVisible(arg0: boolean | java.lang.Boolean): void
        setMagicCaretPosition(arg0: java.awt.Point): void
        getMagicCaretPosition(): java.awt.Point
        setBlinkRate(arg0: number | java.lang.Integer): void
        getBlinkRate(): number
        getDot(): number
        getMark(): number
        setDot(arg0: number | java.lang.Integer): void
        moveDot(arg0: number | java.lang.Integer): void
      }
    }
  }
}
