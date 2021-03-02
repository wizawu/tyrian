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
          protected getRolloverColumn(): number
          protected rolloverColumnUpdated(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
          selectColumn(arg0: number | java.lang.Integer): void
          selectColumn(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): void
          public getBaseline(arg0: javax.swing.JComponent, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
        }

      }
    }
  }
}
