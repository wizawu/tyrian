declare namespace javax {
  namespace swing {

    interface MenuElement {

      processMouseEvent(arg0: java.awt.event.MouseEvent, arg1: javax.swing.MenuElement[], arg2: javax.swing.MenuSelectionManager): void
      processKeyEvent(arg0: java.awt.event.KeyEvent, arg1: javax.swing.MenuElement[], arg2: javax.swing.MenuSelectionManager): void
      menuSelectionChanged(arg0: boolean): void
      getSubElements(): javax.swing.MenuElement[]
      getComponent(): java.awt.Component
    }

  }
}
