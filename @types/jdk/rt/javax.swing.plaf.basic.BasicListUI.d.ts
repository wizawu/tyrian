declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                class BasicListUI extends javax.swing.plaf.ListUI {
                    protected list: javax.swing.JList
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
                    protected static modelChanged: int
                    protected static selectionModelChanged: int
                    protected static fontChanged: int
                    protected static fixedCellWidthChanged: int
                    protected static fixedCellHeightChanged: int
                    protected static prototypeCellValueChanged: int
                    protected static cellRendererChanged: int
                    public constructor()
                    protected paintCell(arg0: java.awt.Graphics, arg1: int, arg2: java.awt.Rectangle, arg3: javax.swing.ListCellRenderer | javax.swing.ListCellRenderer$$Lambda, arg4: javax.swing.ListModel, arg5: javax.swing.ListSelectionModel, arg6: int): void
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
                    public getBaseline(arg0: javax.swing.JComponent, arg1: int, arg2: int): int
                    public getBaselineResizeBehavior(arg0: javax.swing.JComponent): java.awt.Component$BaselineResizeBehavior
                    public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    protected selectPreviousIndex(): void
                    protected selectNextIndex(): void
                    protected installKeyboardActions(): void
                    protected uninstallKeyboardActions(): void
                    protected installListeners(): void
                    protected uninstallListeners(): void
                    protected installDefaults(): void
                    protected uninstallDefaults(): void
                    public installUI(arg0: javax.swing.JComponent): void
                    public uninstallUI(arg0: javax.swing.JComponent): void
                    public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    public locationToIndex(arg0: javax.swing.JList, arg1: java.awt.Point): int
                    public indexToLocation(arg0: javax.swing.JList, arg1: int): java.awt.Point
                    public getCellBounds(arg0: javax.swing.JList, arg1: int, arg2: int): java.awt.Rectangle
                    protected getRowHeight(arg0: int): int
                    protected convertYToRow(arg0: int): int
                    protected convertRowToY(arg0: int): int
                    protected maybeUpdateLayoutState(): void
                    protected updateLayoutState(): void
                    protected createMouseInputListener(): javax.swing.event.MouseInputListener
                    protected createFocusListener(): java.awt.event.FocusListener
                    protected createListSelectionListener(): javax.swing.event.ListSelectionListener
                    protected createListDataListener(): javax.swing.event.ListDataListener
                    protected createPropertyChangeListener(): java.beans.PropertyChangeListener
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}