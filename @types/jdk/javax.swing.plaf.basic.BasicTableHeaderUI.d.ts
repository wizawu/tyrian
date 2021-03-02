declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        class BasicTableHeaderUI extends javax.swing.plaf.TableHeaderUI {
          protected header: javax.swing.table.JTableHeader
          protected rendererPane: javax.swing.CellRendererPane
          protected mouseInputListener: javax.swing.event.MouseInputListener
          public constructor()
          protected createMouseInputListener(): javax.swing.event.MouseInputListener
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public installUI(arg0: javax.swing.JComponent): void
          protected installDefaults(): void
          protected installListeners(): void
          protected installKeyboardActions(): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          protected uninstallDefaults(): void
          protected uninstallListeners(): void
          protected uninstallKeyboardActions(): void
          static loadActionMap(arg0: javax.swing.plaf.basic.LazyActionMap): void
          protected getRolloverColumn(): int
          protected rolloverColumnUpdated(arg0: int, arg1: int): void
          selectColumn(arg0: int): void
          selectColumn(arg0: int, arg1: boolean): void
          public getBaseline(arg0: javax.swing.JComponent, arg1: int, arg2: int): int
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
        }

      }
    }
  }
}
