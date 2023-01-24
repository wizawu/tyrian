declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {
        class BasicPanelUI extends javax.swing.plaf.PanelUI {
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          protected installDefaults(arg0: javax.swing.JPanel): void
          protected uninstallDefaults(arg0: javax.swing.JPanel): void
          public getBaseline(
            arg0: javax.swing.JComponent,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer
          ): number
          public getBaselineResizeBehavior(arg0: javax.swing.JComponent): java.awt.Component$BaselineResizeBehavior
        }
      }
    }
  }
}
