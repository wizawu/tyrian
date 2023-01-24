declare namespace javax {
  namespace swing {
    class JTree extends javax.swing.JComponent implements javax.swing.Scrollable, javax.accessibility.Accessible {
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
      public static readonly CELL_RENDERER_PROPERTY: java.lang.String
      public static readonly TREE_MODEL_PROPERTY: java.lang.String
      public static readonly ROOT_VISIBLE_PROPERTY: java.lang.String
      public static readonly SHOWS_ROOT_HANDLES_PROPERTY: java.lang.String
      public static readonly ROW_HEIGHT_PROPERTY: java.lang.String
      public static readonly CELL_EDITOR_PROPERTY: java.lang.String
      public static readonly EDITABLE_PROPERTY: java.lang.String
      public static readonly LARGE_MODEL_PROPERTY: java.lang.String
      public static readonly SELECTION_MODEL_PROPERTY: java.lang.String
      public static readonly VISIBLE_ROW_COUNT_PROPERTY: java.lang.String
      public static readonly INVOKES_STOP_CELL_EDITING_PROPERTY: java.lang.String
      public static readonly SCROLLS_ON_EXPAND_PROPERTY: java.lang.String
      public static readonly TOGGLE_CLICK_COUNT_PROPERTY: java.lang.String
      public static readonly LEAD_SELECTION_PATH_PROPERTY: java.lang.String
      public static readonly ANCHOR_SELECTION_PATH_PROPERTY: java.lang.String
      public static readonly EXPANDS_SELECTED_PATHS_PROPERTY: java.lang.String
      static readonly $assertionsDisabled: boolean
      protected static getDefaultTreeModel(): javax.swing.tree.TreeModel
      protected static createTreeModel(arg0: java.lang.Object | any): javax.swing.tree.TreeModel
      public constructor()
      public constructor(arg0: java.lang.Object[] | any[])
      public constructor(arg0: java.util.Vector<unknown>)
      public constructor(arg0: java.util.Hashtable<unknown, unknown>)
      public constructor(arg0: javax.swing.tree.TreeNode)
      public constructor(arg0: javax.swing.tree.TreeNode, arg1: boolean | java.lang.Boolean)
      public constructor(arg0: javax.swing.tree.TreeModel)
      public getUI(): javax.swing.plaf.TreeUI
      public setUI(arg0: javax.swing.plaf.TreeUI): void
      public updateUI(): void
      public getUIClassID(): java.lang.String
      public getCellRenderer(): javax.swing.tree.TreeCellRenderer
      public setCellRenderer(arg0: javax.swing.tree.TreeCellRenderer | javax.swing.tree.TreeCellRenderer$$lambda): void
      public setEditable(arg0: boolean | java.lang.Boolean): void
      public isEditable(): boolean
      public setCellEditor(arg0: javax.swing.tree.TreeCellEditor): void
      public getCellEditor(): javax.swing.tree.TreeCellEditor
      public getModel(): javax.swing.tree.TreeModel
      public setModel(arg0: javax.swing.tree.TreeModel): void
      public isRootVisible(): boolean
      public setRootVisible(arg0: boolean | java.lang.Boolean): void
      public setShowsRootHandles(arg0: boolean | java.lang.Boolean): void
      public getShowsRootHandles(): boolean
      public setRowHeight(arg0: number | java.lang.Integer): void
      public getRowHeight(): number
      public isFixedRowHeight(): boolean
      public setLargeModel(arg0: boolean | java.lang.Boolean): void
      public isLargeModel(): boolean
      public setInvokesStopCellEditing(arg0: boolean | java.lang.Boolean): void
      public getInvokesStopCellEditing(): boolean
      public setScrollsOnExpand(arg0: boolean | java.lang.Boolean): void
      public getScrollsOnExpand(): boolean
      public setToggleClickCount(arg0: number | java.lang.Integer): void
      public getToggleClickCount(): number
      public setExpandsSelectedPaths(arg0: boolean | java.lang.Boolean): void
      public getExpandsSelectedPaths(): boolean
      public setDragEnabled(arg0: boolean | java.lang.Boolean): void
      public getDragEnabled(): boolean
      public setDropMode(arg0: javax.swing.DropMode): void
      public getDropMode(): javax.swing.DropMode
      dropLocationForPoint(arg0: java.awt.Point): javax.swing.JTree$DropLocation
      setDropLocation(
        arg0: javax.swing.TransferHandler$DropLocation,
        arg1: java.lang.Object | any,
        arg2: boolean | java.lang.Boolean
      ): java.lang.Object
      dndDone(): void
      public getDropLocation(): javax.swing.JTree$DropLocation
      public isPathEditable(arg0: javax.swing.tree.TreePath): boolean
      public getToolTipText(arg0: java.awt.event.MouseEvent): java.lang.String
      public convertValueToText(
        arg0: java.lang.Object | any,
        arg1: boolean | java.lang.Boolean,
        arg2: boolean | java.lang.Boolean,
        arg3: boolean | java.lang.Boolean,
        arg4: number | java.lang.Integer,
        arg5: boolean | java.lang.Boolean
      ): java.lang.String
      public getRowCount(): number
      public setSelectionPath(arg0: javax.swing.tree.TreePath): void
      public setSelectionPaths(arg0: javax.swing.tree.TreePath[]): void
      public setLeadSelectionPath(arg0: javax.swing.tree.TreePath): void
      public setAnchorSelectionPath(arg0: javax.swing.tree.TreePath): void
      public setSelectionRow(arg0: number | java.lang.Integer): void
      public setSelectionRows(arg0: number[] | java.lang.Integer[]): void
      public addSelectionPath(arg0: javax.swing.tree.TreePath): void
      public addSelectionPaths(arg0: javax.swing.tree.TreePath[]): void
      public addSelectionRow(arg0: number | java.lang.Integer): void
      public addSelectionRows(arg0: number[] | java.lang.Integer[]): void
      public getLastSelectedPathComponent(): java.lang.Object
      public getLeadSelectionPath(): javax.swing.tree.TreePath
      public getAnchorSelectionPath(): javax.swing.tree.TreePath
      public getSelectionPath(): javax.swing.tree.TreePath
      public getSelectionPaths(): javax.swing.tree.TreePath[]
      public getSelectionRows(): number[]
      public getSelectionCount(): number
      public getMinSelectionRow(): number
      public getMaxSelectionRow(): number
      public getLeadSelectionRow(): number
      public isPathSelected(arg0: javax.swing.tree.TreePath): boolean
      public isRowSelected(arg0: number | java.lang.Integer): boolean
      public getExpandedDescendants(arg0: javax.swing.tree.TreePath): java.util.Enumeration<javax.swing.tree.TreePath>
      public hasBeenExpanded(arg0: javax.swing.tree.TreePath): boolean
      public isExpanded(arg0: javax.swing.tree.TreePath): boolean
      public isExpanded(arg0: number | java.lang.Integer): boolean
      public isCollapsed(arg0: javax.swing.tree.TreePath): boolean
      public isCollapsed(arg0: number | java.lang.Integer): boolean
      public makeVisible(arg0: javax.swing.tree.TreePath): void
      public isVisible(arg0: javax.swing.tree.TreePath): boolean
      public getPathBounds(arg0: javax.swing.tree.TreePath): java.awt.Rectangle
      public getRowBounds(arg0: number | java.lang.Integer): java.awt.Rectangle
      public scrollPathToVisible(arg0: javax.swing.tree.TreePath): void
      public scrollRowToVisible(arg0: number | java.lang.Integer): void
      public getPathForRow(arg0: number | java.lang.Integer): javax.swing.tree.TreePath
      public getRowForPath(arg0: javax.swing.tree.TreePath): number
      public expandPath(arg0: javax.swing.tree.TreePath): void
      public expandRow(arg0: number | java.lang.Integer): void
      public collapsePath(arg0: javax.swing.tree.TreePath): void
      public collapseRow(arg0: number | java.lang.Integer): void
      public getPathForLocation(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer
      ): javax.swing.tree.TreePath
      public getRowForLocation(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      public getClosestPathForLocation(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer
      ): javax.swing.tree.TreePath
      public getClosestRowForLocation(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      public isEditing(): boolean
      public stopEditing(): boolean
      public cancelEditing(): void
      public startEditingAtPath(arg0: javax.swing.tree.TreePath): void
      public getEditingPath(): javax.swing.tree.TreePath
      public setSelectionModel(arg0: javax.swing.tree.TreeSelectionModel): void
      public getSelectionModel(): javax.swing.tree.TreeSelectionModel
      protected getPathBetweenRows(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer
      ): javax.swing.tree.TreePath[]
      public setSelectionInterval(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public addSelectionInterval(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public removeSelectionInterval(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public removeSelectionPath(arg0: javax.swing.tree.TreePath): void
      public removeSelectionPaths(arg0: javax.swing.tree.TreePath[]): void
      public removeSelectionRow(arg0: number | java.lang.Integer): void
      public removeSelectionRows(arg0: number[] | java.lang.Integer[]): void
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
      public addTreeSelectionListener(
        arg0: javax.swing.event.TreeSelectionListener | javax.swing.event.TreeSelectionListener$$lambda
      ): void
      public removeTreeSelectionListener(
        arg0: javax.swing.event.TreeSelectionListener | javax.swing.event.TreeSelectionListener$$lambda
      ): void
      public getTreeSelectionListeners(): javax.swing.event.TreeSelectionListener[]
      protected fireValueChanged(arg0: javax.swing.event.TreeSelectionEvent): void
      public treeDidChange(): void
      public setVisibleRowCount(arg0: number | java.lang.Integer): void
      public getVisibleRowCount(): number
      public getNextMatch(
        arg0: java.lang.String | string,
        arg1: number | java.lang.Integer,
        arg2: javax.swing.text.Position$Bias
      ): javax.swing.tree.TreePath
      public getPreferredScrollableViewportSize(): java.awt.Dimension
      public getScrollableUnitIncrement(
        arg0: java.awt.Rectangle,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number
      public getScrollableBlockIncrement(
        arg0: java.awt.Rectangle,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number
      public getScrollableTracksViewportWidth(): boolean
      public getScrollableTracksViewportHeight(): boolean
      protected setExpandedState(arg0: javax.swing.tree.TreePath, arg1: boolean | java.lang.Boolean): void
      protected getDescendantToggledPaths(
        arg0: javax.swing.tree.TreePath
      ): java.util.Enumeration<javax.swing.tree.TreePath>
      protected removeDescendantToggledPaths(arg0: java.util.Enumeration<javax.swing.tree.TreePath>): void
      protected clearToggledPaths(): void
      protected createTreeModelListener(): javax.swing.event.TreeModelListener
      protected removeDescendantSelectedPaths(
        arg0: javax.swing.tree.TreePath,
        arg1: boolean | java.lang.Boolean
      ): boolean
      removeDescendantSelectedPaths(arg0: javax.swing.event.TreeModelEvent): void
      setUIProperty(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      dropLocationForPoint(arg0: java.awt.Point): javax.swing.TransferHandler$DropLocation
      public getUI(): javax.swing.plaf.ComponentUI
    }
  }
}
