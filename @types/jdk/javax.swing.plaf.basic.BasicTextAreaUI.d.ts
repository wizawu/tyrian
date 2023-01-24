declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {
        class BasicTextAreaUI extends javax.swing.plaf.basic.BasicTextUI {
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public constructor()
          protected getPropertyPrefix(): java.lang.String
          protected installDefaults(): void
          protected propertyChange(arg0: java.beans.PropertyChangeEvent): void
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public create(arg0: javax.swing.text.Element): javax.swing.text.View
          createI18N(arg0: javax.swing.text.Element): javax.swing.text.View
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
