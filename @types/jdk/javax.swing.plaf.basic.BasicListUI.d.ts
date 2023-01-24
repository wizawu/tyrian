declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {
        class BasicListUI extends javax.swing.plaf.ListUI {
          protected list: javax.swing.JList<java.lang.Object>
          protected rendererPane: javax.swing.CellRendererPane
          protected focusListener: java.awt.event.FocusListener
          protected mouseInputListener: javax.swing.event.MouseInputListener
          protected listSelectionListener: javax.swing.event.ListSelectionListener
          protected listDataListener: javax.swing.event.ListDataListener
          protected propertyChangeListener: java.beans.PropertyChangeListener
          protected cellHeights: int[]
          protected cellHeight: int
          protected cellWidth: int
          protected updateLayoutStateNeeded: int
          protected static readonly modelChanged: int
          protected static readonly selectionModelChanged: int
          protected static readonly fontChanged: int
          protected static readonly fixedCellWidthChanged: int
          protected static readonly fixedCellHeightChanged: int
          protected static readonly prototypeCellValueChanged: int
          protected static readonly cellRendererChanged: int
          public constructor()
          static loadActionMap(arg0: javax.swing.plaf.basic.LazyActionMap): void
          protected paintCell(
            arg0: java.awt.Graphics,
            arg1: number | java.lang.Integer,
            arg2: java.awt.Rectangle,
            arg3:
              | javax.swing.ListCellRenderer<java.lang.Object>
              | javax.swing.ListCellRenderer$$lambda<java.lang.Object>,
            arg4: javax.swing.ListModel<java.lang.Object>,
            arg5: javax.swing.ListSelectionModel,
            arg6: number | java.lang.Integer
          ): void
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public getBaseline(
            arg0: javax.swing.JComponent,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer
          ): number
          public getBaselineResizeBehavior(arg0: javax.swing.JComponent): java.awt.Component$BaselineResizeBehavior
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          protected selectPreviousIndex(): void
          protected selectNextIndex(): void
          protected installKeyboardActions(): void
          getInputMap(arg0: number | java.lang.Integer): javax.swing.InputMap
          protected uninstallKeyboardActions(): void
          protected installListeners(): void
          protected uninstallListeners(): void
          protected installDefaults(): void
          protected uninstallDefaults(): void
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public locationToIndex(arg0: javax.swing.JList<unknown>, arg1: java.awt.Point): number
          public indexToLocation(arg0: javax.swing.JList<unknown>, arg1: number | java.lang.Integer): java.awt.Point
          public getCellBounds(
            arg0: javax.swing.JList<unknown>,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer
          ): java.awt.Rectangle
          protected getRowHeight(arg0: number | java.lang.Integer): number
          protected convertYToRow(arg0: number | java.lang.Integer): number
          protected convertRowToY(arg0: number | java.lang.Integer): number
          protected maybeUpdateLayoutState(): void
          protected updateLayoutState(): void
          protected createMouseInputListener(): javax.swing.event.MouseInputListener
          protected createFocusListener(): java.awt.event.FocusListener
          protected createListSelectionListener(): javax.swing.event.ListSelectionListener
          protected createListDataListener(): javax.swing.event.ListDataListener
          protected createPropertyChangeListener(): java.beans.PropertyChangeListener
        }
      }
    }
  }
}
