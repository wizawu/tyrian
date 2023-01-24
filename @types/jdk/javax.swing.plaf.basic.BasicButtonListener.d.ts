declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {
        class BasicButtonListener
          implements
            java.awt.event.MouseListener,
            java.awt.event.MouseMotionListener,
            java.awt.event.FocusListener,
            javax.swing.event.ChangeListener,
            java.beans.PropertyChangeListener
        {
          static loadActionMap(arg0: javax.swing.plaf.basic.LazyActionMap): void
          public constructor(arg0: javax.swing.AbstractButton)
          public propertyChange(arg0: java.beans.PropertyChangeEvent): void
          protected checkOpacity(arg0: javax.swing.AbstractButton): void
          public installKeyboardActions(arg0: javax.swing.JComponent): void
          public uninstallKeyboardActions(arg0: javax.swing.JComponent): void
          getInputMap(arg0: number | java.lang.Integer, arg1: javax.swing.JComponent): javax.swing.InputMap
          updateMnemonicBinding(arg0: javax.swing.AbstractButton): void
          public stateChanged(arg0: javax.swing.event.ChangeEvent): void
          public focusGained(arg0: java.awt.event.FocusEvent): void
          public focusLost(arg0: java.awt.event.FocusEvent): void
          public mouseMoved(arg0: java.awt.event.MouseEvent): void
          public mouseDragged(arg0: java.awt.event.MouseEvent): void
          public mouseClicked(arg0: java.awt.event.MouseEvent): void
          public mousePressed(arg0: java.awt.event.MouseEvent): void
          public mouseReleased(arg0: java.awt.event.MouseEvent): void
          public mouseEntered(arg0: java.awt.event.MouseEvent): void
          public mouseExited(arg0: java.awt.event.MouseEvent): void
        }
      }
    }
  }
}
