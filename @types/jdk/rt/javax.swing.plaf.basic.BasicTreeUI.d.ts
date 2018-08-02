declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                class BasicTreeUI extends javax.swing.plaf.TreeUI {
                    protected collapsedIcon: javax.swing.Icon
                    protected expandedIcon: javax.swing.Icon
                    protected leftChildIndent: int
                    protected rightChildIndent: int
                    protected totalChildIndent: int
                    protected preferredMinSize: java.awt.Dimension
                    protected lastSelectedRow: int
                    protected tree: javax.swing.JTree
                    protected currentCellRenderer: javax.swing.tree.TreeCellRenderer
                    protected createdRenderer: boolean
                    protected cellEditor: javax.swing.tree.TreeCellEditor
                    protected createdCellEditor: boolean
                    protected stopEditingInCompleteEditing: boolean
                    protected rendererPane: javax.swing.CellRendererPane
                    protected preferredSize: java.awt.Dimension
                    protected validCachedPreferredSize: boolean
                    protected treeState: javax.swing.tree.AbstractLayoutCache
                    protected drawingCache: java.util.Hashtable<javax.swing.tree.TreePath, java.lang.Boolean>
                    protected largeModel: boolean
                    protected nodeDimensions: javax.swing.tree.AbstractLayoutCache$NodeDimensions
                    protected treeModel: javax.swing.tree.TreeModel
                    protected treeSelectionModel: javax.swing.tree.TreeSelectionModel
                    protected depthOffset: int
                    protected editingComponent: java.awt.Component
                    protected editingPath: javax.swing.tree.TreePath
                    protected editingRow: int
                    protected editorHasDifferentSize: boolean
                    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
                    public constructor()
                    protected getHashColor(): java.awt.Color
                    protected setHashColor(arg0: java.awt.Color): void
                    public setLeftChildIndent(arg0: int): void
                    public getLeftChildIndent(): int
                    public setRightChildIndent(arg0: int): void
                    public getRightChildIndent(): int
                    public setExpandedIcon(arg0: javax.swing.Icon): void
                    public getExpandedIcon(): javax.swing.Icon
                    public setCollapsedIcon(arg0: javax.swing.Icon): void
                    public getCollapsedIcon(): javax.swing.Icon
                    protected setLargeModel(arg0: boolean): void
                    protected isLargeModel(): boolean
                    protected setRowHeight(arg0: int): void
                    protected getRowHeight(): int
                    protected setCellRenderer(arg0: javax.swing.tree.TreeCellRenderer | javax.swing.tree.TreeCellRenderer$$Lambda): void
                    protected getCellRenderer(): javax.swing.tree.TreeCellRenderer
                    protected setModel(arg0: javax.swing.tree.TreeModel): void
                    protected getModel(): javax.swing.tree.TreeModel
                    protected setRootVisible(arg0: boolean): void
                    protected isRootVisible(): boolean
                    protected setShowsRootHandles(arg0: boolean): void
                    protected getShowsRootHandles(): boolean
                    protected setCellEditor(arg0: javax.swing.tree.TreeCellEditor): void
                    protected getCellEditor(): javax.swing.tree.TreeCellEditor
                    protected setEditable(arg0: boolean): void
                    protected isEditable(): boolean
                    protected setSelectionModel(arg0: javax.swing.tree.TreeSelectionModel): void
                    protected getSelectionModel(): javax.swing.tree.TreeSelectionModel
                    public getPathBounds(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda, arg1: javax.swing.tree.TreePath): java.awt.Rectangle
                    public getPathForRow(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda, arg1: int): javax.swing.tree.TreePath
                    public getRowForPath(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda, arg1: javax.swing.tree.TreePath): int
                    public getRowCount(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda): int
                    public getClosestPathForLocation(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda, arg1: int, arg2: int): javax.swing.tree.TreePath
                    public isEditing(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda): boolean
                    public stopEditing(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda): boolean
                    public cancelEditing(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda): void
                    public startEditingAtPath(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda, arg1: javax.swing.tree.TreePath): void
                    public getEditingPath(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda): javax.swing.tree.TreePath
                    public installUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    protected prepareForUIInstall(): void
                    protected completeUIInstall(): void
                    protected installDefaults(): void
                    protected installListeners(): void
                    protected installKeyboardActions(): void
                    protected installComponents(): void
                    protected createNodeDimensions(): javax.swing.tree.AbstractLayoutCache$NodeDimensions
                    protected createPropertyChangeListener(): java.beans.PropertyChangeListener
                    protected createMouseListener(): java.awt.event.MouseListener
                    protected createFocusListener(): java.awt.event.FocusListener
                    protected createKeyListener(): java.awt.event.KeyListener
                    protected createSelectionModelPropertyChangeListener(): java.beans.PropertyChangeListener
                    protected createTreeSelectionListener(): javax.swing.event.TreeSelectionListener
                    protected createCellEditorListener(): javax.swing.event.CellEditorListener
                    protected createComponentListener(): java.awt.event.ComponentListener
                    protected createTreeExpansionListener(): javax.swing.event.TreeExpansionListener
                    protected createLayoutCache(): javax.swing.tree.AbstractLayoutCache
                    protected createCellRendererPane(): javax.swing.CellRendererPane
                    protected createDefaultCellEditor(): javax.swing.tree.TreeCellEditor
                    protected createDefaultCellRenderer(): javax.swing.tree.TreeCellRenderer
                    protected createTreeModelListener(): javax.swing.event.TreeModelListener
                    public uninstallUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    protected prepareForUIUninstall(): void
                    protected completeUIUninstall(): void
                    protected uninstallDefaults(): void
                    protected uninstallListeners(): void
                    protected uninstallKeyboardActions(): void
                    protected uninstallComponents(): void
                    public getBaseline(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: int, arg2: int): int
                    public getBaselineResizeBehavior(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Component$BaselineResizeBehavior
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    protected isDropLine(arg0: javax.swing.JTree$DropLocation): boolean
                    protected paintDropLine(arg0: java.awt.Graphics): void
                    protected getDropLineRect(arg0: javax.swing.JTree$DropLocation): java.awt.Rectangle
                    protected paintHorizontalPartOfLeg(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: java.awt.Insets, arg3: java.awt.Rectangle, arg4: javax.swing.tree.TreePath, arg5: int, arg6: boolean, arg7: boolean, arg8: boolean): void
                    protected paintVerticalPartOfLeg(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: java.awt.Insets, arg3: javax.swing.tree.TreePath): void
                    protected paintExpandControl(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: java.awt.Insets, arg3: java.awt.Rectangle, arg4: javax.swing.tree.TreePath, arg5: int, arg6: boolean, arg7: boolean, arg8: boolean): void
                    protected paintRow(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: java.awt.Insets, arg3: java.awt.Rectangle, arg4: javax.swing.tree.TreePath, arg5: int, arg6: boolean, arg7: boolean, arg8: boolean): void
                    protected shouldPaintExpandControl(arg0: javax.swing.tree.TreePath, arg1: int, arg2: boolean, arg3: boolean, arg4: boolean): boolean
                    protected paintVerticalLine(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg2: int, arg3: int, arg4: int): void
                    protected paintHorizontalLine(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg2: int, arg3: int, arg4: int): void
                    protected getVerticalLegBuffer(): int
                    protected getHorizontalLegBuffer(): int
                    protected drawCentered(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: javax.swing.Icon, arg3: int, arg4: int): void
                    protected drawDashedHorizontalLine(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int): void
                    protected drawDashedVerticalLine(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int): void
                    protected getRowX(arg0: int, arg1: int): int
                    protected updateLayoutCacheExpandedNodes(): void
                    protected updateExpandedDescendants(arg0: javax.swing.tree.TreePath): void
                    protected getLastChildPath(arg0: javax.swing.tree.TreePath): javax.swing.tree.TreePath
                    protected updateDepthOffset(): void
                    protected updateCellEditor(): void
                    protected updateRenderer(): void
                    protected configureLayoutCache(): void
                    protected updateSize(): void
                    protected updateCachedPreferredSize(): void
                    protected pathWasExpanded(arg0: javax.swing.tree.TreePath): void
                    protected pathWasCollapsed(arg0: javax.swing.tree.TreePath): void
                    protected ensureRowsAreVisible(arg0: int, arg1: int): void
                    public setPreferredMinSize(arg0: java.awt.Dimension): void
                    public getPreferredMinSize(): java.awt.Dimension
                    public getPreferredSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    public getPreferredSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: boolean): java.awt.Dimension
                    public getMinimumSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    public getMaximumSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    protected completeEditing(): void
                    protected completeEditing(arg0: boolean, arg1: boolean, arg2: boolean): void
                    protected startEditing(arg0: javax.swing.tree.TreePath, arg1: java.awt.event.MouseEvent): boolean
                    protected checkForClickInExpandControl(arg0: javax.swing.tree.TreePath, arg1: int, arg2: int): void
                    protected isLocationInExpandControl(arg0: javax.swing.tree.TreePath, arg1: int, arg2: int): boolean
                    protected handleExpandControlClick(arg0: javax.swing.tree.TreePath, arg1: int, arg2: int): void
                    protected toggleExpandState(arg0: javax.swing.tree.TreePath): void
                    protected isToggleSelectionEvent(arg0: java.awt.event.MouseEvent): boolean
                    protected isMultiSelectEvent(arg0: java.awt.event.MouseEvent): boolean
                    protected isToggleEvent(arg0: java.awt.event.MouseEvent): boolean
                    protected selectPathForEvent(arg0: javax.swing.tree.TreePath, arg1: java.awt.event.MouseEvent): void
                    protected isLeaf(arg0: int): boolean
                    protected updateLeadSelectionRow(): void
                    protected getLeadSelectionRow(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}