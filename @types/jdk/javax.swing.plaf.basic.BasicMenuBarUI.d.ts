declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        class BasicMenuBarUI extends javax.swing.plaf.MenuBarUI {
          protected menuBar: javax.swing.JMenuBar
          protected containerListener: java.awt.event.ContainerListener
          protected changeListener: javax.swing.event.ChangeListener
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          static loadActionMap(arg0: javax.swing.plaf.basic.LazyActionMap): void
          public installUI(arg0: javax.swing.JComponent): void
          protected installDefaults(): void
          protected installListeners(): void
          protected installKeyboardActions(): void
          getInputMap(arg0: int): javax.swing.InputMap
          public uninstallUI(arg0: javax.swing.JComponent): void
          protected uninstallDefaults(): void
          protected uninstallListeners(): void
          protected uninstallKeyboardActions(): void
          protected createContainerListener(): java.awt.event.ContainerListener
          protected createChangeListener(): javax.swing.event.ChangeListener
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
        }

      }
    }
  }
}
