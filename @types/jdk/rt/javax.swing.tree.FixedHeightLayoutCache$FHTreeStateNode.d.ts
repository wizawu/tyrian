declare namespace javax {
    namespace swing {
        namespace tree {
class FixedHeightLayoutCache$FHTreeStateNode extends javax.swing.tree.DefaultMutableTreeNode {
    protected isExpanded: boolean
    protected childIndex: int
    protected childCount: int
    protected row: int
    protected path: javax.swing.tree.TreePath
    public constructor(arg0: javax.swing.tree.FixedHeightLayoutCache, arg1: java.lang.Object, arg2: int, arg3: int)
    public setParent(arg0: javax.swing.tree.MutableTreeNode): void
    public remove(arg0: int): void
    public setUserObject(arg0: java.lang.Object): void
    public getChildIndex(): int
    public getTreePath(): javax.swing.tree.TreePath
    public getChildAtModelIndex(arg0: int): javax.swing.tree.FixedHeightLayoutCache$FHTreeStateNode
    public isVisible(): boolean
    public getRow(): int
    public getRowToModelIndex(arg0: int): int
    public getTotalChildCount(): int
    public isExpanded(): boolean
    public getVisibleLevel(): int
    protected resetChildrenPaths(arg0: javax.swing.tree.TreePath): void
    protected removeFromMapping(): void
    protected createChildFor(arg0: java.lang.Object): javax.swing.tree.FixedHeightLayoutCache$FHTreeStateNode
    protected adjustRowBy(arg0: int): void
    protected adjustRowBy(arg0: int, arg1: int): void
    protected didExpand(): void
    protected setRowAndChildren(arg0: int): int
    protected resetChildrenRowsFrom(arg0: int, arg1: int, arg2: int): void
    protected makeVisible(): void
    protected expandParentAndReceiver(): void
    protected expand(): void
    protected collapse(arg0: boolean): void
    public isLeaf(): boolean
    protected addNode(arg0: javax.swing.tree.FixedHeightLayoutCache$FHTreeStateNode): void
    protected removeChildAtModelIndex(arg0: int, arg1: boolean): void
    protected adjustChildIndexs(arg0: int, arg1: int): void
    protected childInsertedAtModelIndex(arg0: int, arg1: boolean): void
    protected getPathForRow(arg0: int, arg1: int, arg2: javax.swing.tree.FixedHeightLayoutCache$SearchInfo): boolean
    protected getCountTo(arg0: int): int
    protected getNumExpandedChildrenTo(arg0: int): int
    protected didAdjustTree(): void
    public static class: java.lang.Class<any>
}

        }
    }
}