declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace metal {
        class MetalToolBarUI extends javax.swing.plaf.basic.BasicToolBarUI {
          protected contListener: java.awt.event.ContainerListener
          protected rolloverListener: java.beans.PropertyChangeListener
          public constructor()
          static register(arg0: javax.swing.JComponent): void
          static unregister(arg0: javax.swing.JComponent): void
          static findRegisteredComponentOfType(
            arg0: javax.swing.JComponent,
            arg1: java.lang.Class<unknown>
          ): java.lang.Object
          static doesMenuBarBorderToolBar(arg0: javax.swing.JMenuBar): boolean
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          protected installListeners(): void
          protected uninstallListeners(): void
          protected createRolloverBorder(): javax.swing.border.Border
          protected createNonRolloverBorder(): javax.swing.border.Border
          protected setBorderToNonRollover(arg0: java.awt.Component): void
          protected createContainerListener(): java.awt.event.ContainerListener
          protected createRolloverListener(): java.beans.PropertyChangeListener
          protected createDockingListener(): javax.swing.event.MouseInputListener
          protected setDragOffset(arg0: java.awt.Point): void
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
        }
      }
    }
  }
}
