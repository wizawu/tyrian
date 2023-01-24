declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace metal {
        class MetalButtonUI extends javax.swing.plaf.basic.BasicButtonUI {
          protected focusColor: java.awt.Color
          protected selectColor: java.awt.Color
          protected disabledTextColor: java.awt.Color
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public installDefaults(arg0: javax.swing.AbstractButton): void
          public uninstallDefaults(arg0: javax.swing.AbstractButton): void
          protected createButtonListener(arg0: javax.swing.AbstractButton): javax.swing.plaf.basic.BasicButtonListener
          protected getSelectColor(): java.awt.Color
          protected getDisabledTextColor(): java.awt.Color
          protected getFocusColor(): java.awt.Color
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paintButtonPressed(arg0: java.awt.Graphics, arg1: javax.swing.AbstractButton): void
          protected paintFocus(
            arg0: java.awt.Graphics,
            arg1: javax.swing.AbstractButton,
            arg2: java.awt.Rectangle,
            arg3: java.awt.Rectangle,
            arg4: java.awt.Rectangle
          ): void
          protected paintText(
            arg0: java.awt.Graphics,
            arg1: javax.swing.JComponent,
            arg2: java.awt.Rectangle,
            arg3: java.lang.String | string
          ): void
        }
      }
    }
  }
}
