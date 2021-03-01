declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        class BasicDesktopPaneUI extends javax.swing.plaf.DesktopPaneUI {

          protected desktop: javax.swing.JDesktopPane
          protected desktopManager: javax.swing.DesktopManager
          protected minimizeKey: javax.swing.KeyStroke
          protected maximizeKey: javax.swing.KeyStroke
          protected closeKey: javax.swing.KeyStroke
          protected navigateKey: javax.swing.KeyStroke
          protected navigateKey2: javax.swing.KeyStroke
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public constructor()
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          protected installDefaults(): void
          protected uninstallDefaults(): void
          protected installListeners(): void
          protected uninstallListeners(): void
          protected installDesktopManager(): void
          protected uninstallDesktopManager(): void
          protected installKeyboardActions(): void
          protected registerKeyboardActions(): void
          protected unregisterKeyboardActions(): void
          getInputMap(arg0: int): javax.swing.InputMap
          createInputMap(arg0: int): javax.swing.InputMap
          static loadActionMap(arg0: javax.swing.plaf.basic.LazyActionMap): void
          protected uninstallKeyboardActions(): void
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          protected createPropertyChangeListener(): java.beans.PropertyChangeListener
        }

      }
    }
  }
}
