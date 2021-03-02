declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        class BasicScrollPaneUI extends javax.swing.plaf.ScrollPaneUI implements javax.swing.ScrollPaneConstants {
          protected scrollpane: javax.swing.JScrollPane
          protected vsbChangeListener: javax.swing.event.ChangeListener
          protected hsbChangeListener: javax.swing.event.ChangeListener
          protected viewportChangeListener: javax.swing.event.ChangeListener
          protected spPropertyChangeListener: java.beans.PropertyChangeListener
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          static loadActionMap(arg0: javax.swing.plaf.basic.LazyActionMap): void
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          protected installDefaults(arg0: javax.swing.JScrollPane): void
          protected installListeners(arg0: javax.swing.JScrollPane): void
          protected installKeyboardActions(arg0: javax.swing.JScrollPane): void
          getInputMap(arg0: int): javax.swing.InputMap
          public installUI(arg0: javax.swing.JComponent): void
          protected uninstallDefaults(arg0: javax.swing.JScrollPane): void
          protected uninstallListeners(arg0: javax.swing.JComponent): void
          protected uninstallKeyboardActions(arg0: javax.swing.JScrollPane): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          protected syncScrollPaneWithViewport(): void
          public getBaseline(arg0: javax.swing.JComponent, arg1: int, arg2: int): int
          public getBaselineResizeBehavior(arg0: javax.swing.JComponent): java.awt.Component$BaselineResizeBehavior
          protected createViewportChangeListener(): javax.swing.event.ChangeListener
          protected createHSBChangeListener(): javax.swing.event.ChangeListener
          protected createVSBChangeListener(): javax.swing.event.ChangeListener
          protected createMouseWheelListener(): java.awt.event.MouseWheelListener
          protected updateScrollBarDisplayPolicy(arg0: java.beans.PropertyChangeEvent): void
          protected updateViewport(arg0: java.beans.PropertyChangeEvent): void
          protected updateRowHeader(arg0: java.beans.PropertyChangeEvent): void
          protected updateColumnHeader(arg0: java.beans.PropertyChangeEvent): void
          protected createPropertyChangeListener(): java.beans.PropertyChangeListener
        }

      }
    }
  }
}
