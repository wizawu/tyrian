declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        class BasicMenuUI extends javax.swing.plaf.basic.BasicMenuItemUI {

          protected changeListener: javax.swing.event.ChangeListener
          protected menuListener: javax.swing.event.MenuListener
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          static loadActionMap(arg0: javax.swing.plaf.basic.LazyActionMap): void
          protected installDefaults(): void
          protected getPropertyPrefix(): java.lang.String
          protected installListeners(): void
          protected installKeyboardActions(): void
          installLazyActionMap(): void
          updateMnemonicBinding(): void
          protected uninstallKeyboardActions(): void
          protected createMouseInputListener(arg0: javax.swing.JComponent): javax.swing.event.MouseInputListener
          protected createMenuListener(arg0: javax.swing.JComponent): javax.swing.event.MenuListener
          protected createChangeListener(arg0: javax.swing.JComponent): javax.swing.event.ChangeListener
          protected createPropertyChangeListener(arg0: javax.swing.JComponent): java.beans.PropertyChangeListener
          getHandler(): javax.swing.plaf.basic.BasicMenuItemUI$Handler
          protected uninstallDefaults(): void
          protected uninstallListeners(): void
          protected createMenuDragMouseListener(arg0: javax.swing.JComponent): javax.swing.event.MenuDragMouseListener
          protected createMenuKeyListener(arg0: javax.swing.JComponent): javax.swing.event.MenuKeyListener
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          protected setupPostTimer(arg0: javax.swing.JMenu): void
        }

      }
    }
  }
}
