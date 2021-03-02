declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        class BasicEditorPaneUI extends javax.swing.plaf.basic.BasicTextUI {
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public constructor()
          protected getPropertyPrefix(): java.lang.String
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          public getEditorKit(arg0: javax.swing.text.JTextComponent): javax.swing.text.EditorKit
          getActionMap(): javax.swing.ActionMap
          protected propertyChange(arg0: java.beans.PropertyChangeEvent): void
          removeActions(arg0: javax.swing.ActionMap, arg1: javax.swing.Action[]): void
          addActions(arg0: javax.swing.ActionMap, arg1: javax.swing.Action[]): void
          updateDisplayProperties(arg0: java.awt.Font, arg1: java.awt.Color): void
          cleanDisplayProperties(): void
        }

      }
    }
  }
}
