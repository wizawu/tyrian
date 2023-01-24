declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {
        class BasicTableUI extends javax.swing.plaf.TableUI {
          protected table: javax.swing.JTable
          protected rendererPane: javax.swing.CellRendererPane
          protected keyListener: java.awt.event.KeyListener
          protected focusListener: java.awt.event.FocusListener
          protected mouseInputListener: javax.swing.event.MouseInputListener
          public constructor()
          protected createKeyListener(): java.awt.event.KeyListener
          protected createFocusListener(): java.awt.event.FocusListener
          protected createMouseInputListener(): javax.swing.event.MouseInputListener
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public installUI(arg0: javax.swing.JComponent): void
          protected installDefaults(): void
          protected installListeners(): void
          protected installKeyboardActions(): void
          getInputMap(arg0: number | java.lang.Integer): javax.swing.InputMap
          static loadActionMap(arg0: javax.swing.plaf.basic.LazyActionMap): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          protected uninstallDefaults(): void
          protected uninstallListeners(): void
          protected uninstallKeyboardActions(): void
          public getBaseline(
            arg0: javax.swing.JComponent,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer
          ): number
          public getBaselineResizeBehavior(arg0: javax.swing.JComponent): java.awt.Component$BaselineResizeBehavior
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
        }
      }
    }
  }
}
