declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace metal {

        class MetalRadioButtonUI extends javax.swing.plaf.basic.BasicRadioButtonUI {
          protected focusColor: java.awt.Color
          protected selectColor: java.awt.Color
          protected disabledTextColor: java.awt.Color
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public installDefaults(arg0: javax.swing.AbstractButton): void
          protected uninstallDefaults(arg0: javax.swing.AbstractButton): void
          protected getSelectColor(): java.awt.Color
          protected getDisabledTextColor(): java.awt.Color
          protected getFocusColor(): java.awt.Color
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paintFocus(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: java.awt.Dimension): void
        }

      }
    }
  }
}
