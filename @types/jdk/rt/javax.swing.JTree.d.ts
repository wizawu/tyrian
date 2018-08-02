declare namespace javax {
    namespace swing {
class JTree extends javax.swing.JComponent implements javax.swing.Scrollable , javax.accessibility.Accessible {
    protected treeModel: javax.swing.tree.TreeModel
    protected selectionModel: javax.swing.tree.TreeSelectionModel
    protected rootVisible: boolean
    protected cellRenderer: javax.swing.tree.TreeCellRenderer
    protected rowHeight: int
    protected showsRootHandles: boolean
    protected selectionRedirector: javax.swing.JTree$TreeSelectionRedirector
    protected cellEditor: javax.swing.tree.TreeCellEditor
    protected editable: boolean
    protected largeModel: boolean
    protected visibleRowCount: int
    protected invokesStopCellEditing: boolean
    protected scrollsOnExpand: boolean
    protected toggleClickCount: int
    protected treeModelListener: javax.swing.event.TreeModelListener
    public static CELL_RENDERER_PROPERTY: string
    public static TREE_MODEL_PROPERTY: string
    public static ROOT_VISIBLE_PROPERTY: string
    public static SHOWS_ROOT_HANDLES_PROPERTY: string
    public static ROW_HEIGHT_PROPERTY: string
    public static CELL_EDITOR_PROPERTY: string
    public static EDITABLE_PROPERTY: string
    public static LARGE_MODEL_PROPERTY: string
    public static SELECTION_MODEL_PROPERTY: string
    public static VISIBLE_ROW_COUNT_PROPERTY: string
    public static INVOKES_STOP_CELL_EDITING_PROPERTY: string
    public static SCROLLS_ON_EXPAND_PROPERTY: string
    public static TOGGLE_CLICK_COUNT_PROPERTY: string
    public static LEAD_SELECTION_PATH_PROPERTY: string
    public static ANCHOR_SELECTION_PATH_PROPERTY: string
    public static EXPANDS_SELECTED_PATHS_PROPERTY: string
    protected static getDefaultTreeModel(): javax.swing.tree.TreeModel
    protected static createTreeModel(arg0: java.lang.Object): javax.swing.tree.TreeModel
    public constructor()
    public constructor(arg0: java.lang.Object[])
    public constructor(arg0: java.util.Vector<any>)
    public constructor(arg0: java.util.Hashtable<any, any>)
    public constructor(arg0: javax.swing.tree.TreeNode)
    public constructor(arg0: javax.swing.tree.TreeNode, arg1: boolean)
    public constructor(arg0: javax.swing.tree.TreeModel)
    public getUI(): javax.swing.plaf.TreeUI
    public setUI(arg0: javax.swing.plaf.TreeUI): void
    public updateUI(): void
    public getUIClassID(): string
    public getCellRenderer(): javax.swing.tree.TreeCellRenderer
    public setCellRenderer(arg0: javax.swing.tree.TreeCellRenderer | javax.swing.tree.TreeCellRenderer$$Lambda): void
    public setEditable(arg0: boolean): void
    public isEditable(): boolean
    public setCellEditor(arg0: javax.swing.tree.TreeCellEditor): void
    public getCellEditor(): javax.swing.tree.TreeCellEditor
    public getModel(): javax.swing.tree.TreeModel
    public setModel(arg0: javax.swing.tree.TreeModel): void
    public isRootVisible(): boolean
    public setRootVisible(arg0: boolean): void
    public setShowsRootHandles(arg0: boolean): void
    public getShowsRootHandles(): boolean
    public setRowHeight(arg0: int): void
    public getRowHeight(): int
    public isFixedRowHeight(): boolean
    public setLargeModel(arg0: boolean): void
    public isLargeModel(): boolean
    public setInvokesStopCellEditing(arg0: boolean): void
    public getInvokesStopCellEditing(): boolean
    public setScrollsOnExpand(arg0: boolean): void
    public getScrollsOnExpand(): boolean
    public setToggleClickCount(arg0: int): void
    public getToggleClickCount(): int
    public setExpandsSelectedPaths(arg0: boolean): void
    public getExpandsSelectedPaths(): boolean
    public setDragEnabled(arg0: boolean): void
    public getDragEnabled(): boolean
    public setDropMode(arg0: javax.swing.DropMode): void
    public getDropMode(): javax.swing.DropMode
    public getDropLocation(): javax.swing.JTree$DropLocation
    public isPathEditable(arg0: javax.swing.tree.TreePath): boolean
    public getToolTipText(arg0: java.awt.event.MouseEvent): string
    public convertValueToText(arg0: java.lang.Object, arg1: boolean, arg2: boolean, arg3: boolean, arg4: int, arg5: boolean): string
    public getRowCount(): int
    public setSelectionPath(arg0: javax.swing.tree.TreePath): void
    public setSelectionPaths(arg0: javax.swing.tree.TreePath[]): void
    public setLeadSelectionPath(arg0: javax.swing.tree.TreePath): void
    public setAnchorSelectionPath(arg0: javax.swing.tree.TreePath): void
    public setSelectionRow(arg0: int): void
    public setSelectionRows(arg0: int[]): void
    public addSelectionPath(arg0: javax.swing.tree.TreePath): void
    public addSelectionPaths(arg0: javax.swing.tree.TreePath[]): void
    public addSelectionRow(arg0: int): void
    public addSelectionRows(arg0: int[]): void
    public getLastSelectedPathComponent(): java.lang.Object
    public getLeadSelectionPath(): javax.swing.tree.TreePath
    public getAnchorSelectionPath(): javax.swing.tree.TreePath
    public getSelectionPath(): javax.swing.tree.TreePath
    public getSelectionPaths(): javax.swing.tree.TreePath[]
    public getSelectionRows(): int[]
    public getSelectionCount(): int
    public getMinSelectionRow(): int
    public getMaxSelectionRow(): int
    public getLeadSelectionRow(): int
    public isPathSelected(arg0: javax.swing.tree.TreePath): boolean
    public isRowSelected(arg0: int): boolean
    public getExpandedDescendants(arg0: javax.swing.tree.TreePath): java.util.Enumeration<javax.swing.tree.TreePath>
    public hasBeenExpanded(arg0: javax.swing.tree.TreePath): boolean
    public isExpanded(arg0: javax.swing.tree.TreePath): boolean
    public isExpanded(arg0: int): boolean
    public isCollapsed(arg0: javax.swing.tree.TreePath): boolean
    public isCollapsed(arg0: int): boolean
    public makeVisible(arg0: javax.swing.tree.TreePath): void
    public isVisible(arg0: javax.swing.tree.TreePath): boolean
    public getPathBounds(arg0: javax.swing.tree.TreePath): java.awt.Rectangle
    public getRowBounds(arg0: int): java.awt.Rectangle
    public scrollPathToVisible(arg0: javax.swing.tree.TreePath): void
    public scrollRowToVisible(arg0: int): void
    public getPathForRow(arg0: int): javax.swing.tree.TreePath
    public getRowForPath(arg0: javax.swing.tree.TreePath): int
    public expandPath(arg0: javax.swing.tree.TreePath): void
    public expandRow(arg0: int): void
    public collapsePath(arg0: javax.swing.tree.TreePath): void
    public collapseRow(arg0: int): void
    public getPathForLocation(arg0: int, arg1: int): javax.swing.tree.TreePath
    public getRowForLocation(arg0: int, arg1: int): int
    public getClosestPathForLocation(arg0: int, arg1: int): javax.swing.tree.TreePath
    public getClosestRowForLocation(arg0: int, arg1: int): int
    public isEditing(): boolean
    public stopEditing(): boolean
    public cancelEditing(): void
    public startEditingAtPath(arg0: javax.swing.tree.TreePath): void
    public getEditingPath(): javax.swing.tree.TreePath
    public setSelectionModel(arg0: javax.swing.tree.TreeSelectionModel): void
    public getSelectionModel(): javax.swing.tree.TreeSelectionModel
    protected getPathBetweenRows(arg0: int, arg1: int): javax.swing.tree.TreePath[]
    public setSelectionInterval(arg0: int, arg1: int): void
    public addSelectionInterval(arg0: int, arg1: int): void
    public removeSelectionInterval(arg0: int, arg1: int): void
    public removeSelectionPath(arg0: javax.swing.tree.TreePath): void
    public removeSelectionPaths(arg0: javax.swing.tree.TreePath[]): void
    public removeSelectionRow(arg0: int): void
    public removeSelectionRows(arg0: int[]): void
    public clearSelection(): void
    public isSelectionEmpty(): boolean
    public addTreeExpansionListener(arg0: javax.swing.event.TreeExpansionListener): void
    public removeTreeExpansionListener(arg0: javax.swing.event.TreeExpansionListener): void
    public getTreeExpansionListeners(): javax.swing.event.TreeExpansionListener[]
    public addTreeWillExpandListener(arg0: javax.swing.event.TreeWillExpandListener): void
    public removeTreeWillExpandListener(arg0: javax.swing.event.TreeWillExpandListener): void
    public getTreeWillExpandListeners(): javax.swing.event.TreeWillExpandListener[]
    public fireTreeExpanded(arg0: javax.swing.tree.TreePath): void
    public fireTreeCollapsed(arg0: javax.swing.tree.TreePath): void
    public fireTreeWillExpand(arg0: javax.swing.tree.TreePath): void
    public fireTreeWillCollapse(arg0: javax.swing.tree.TreePath): void
    public addTreeSelectionListener(arg0: javax.swing.event.TreeSelectionListener): void
    public removeTreeSelectionListener(arg0: javax.swing.event.TreeSelectionListener): void
    public getTreeSelectionListeners(): javax.swing.event.TreeSelectionListener[]
    protected fireValueChanged(arg0: javax.swing.event.TreeSelectionEvent): void
    public treeDidChange(): void
    public setVisibleRowCount(arg0: int): void
    public getVisibleRowCount(): int
    public getNextMatch(arg0: java.lang.String | string, arg1: int, arg2: javax.swing.text.Position$Bias): javax.swing.tree.TreePath
    public getPreferredScrollableViewportSize(): java.awt.Dimension
    public getScrollableUnitIncrement(arg0: java.awt.Rectangle, arg1: int, arg2: int): int
    public getScrollableBlockIncrement(arg0: java.awt.Rectangle, arg1: int, arg2: int): int
    public getScrollableTracksViewportWidth(): boolean
    public getScrollableTracksViewportHeight(): boolean
    protected setExpandedState(arg0: javax.swing.tree.TreePath, arg1: boolean): void
    protected getDescendantToggledPaths(arg0: javax.swing.tree.TreePath): java.util.Enumeration<javax.swing.tree.TreePath>
    protected removeDescendantToggledPaths(arg0: java.util.Enumeration<javax.swing.tree.TreePath>): void
    protected clearToggledPaths(): void
    protected createTreeModelListener(): javax.swing.event.TreeModelListener
    protected removeDescendantSelectedPaths(arg0: javax.swing.tree.TreePath, arg1: boolean): boolean
    protected paramString(): string
    public getAccessibleContext(): javax.accessibility.AccessibleContext
    public static class: java.lang.Class<any>
}

class JTree$$Lambda extends javax.swing.JComponent implements javax.swing.Scrollable , javax.accessibility.Accessible {
    protected treeModel: javax.swing.tree.TreeModel
}

    }
}