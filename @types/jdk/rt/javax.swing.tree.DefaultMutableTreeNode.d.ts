declare namespace javax {
    namespace swing {
        namespace tree {
class DefaultMutableTreeNode implements java.lang.Cloneable , javax.swing.tree.MutableTreeNode , java.io.Serializable {
    public static EMPTY_ENUMERATION: java.util.Enumeration<javax.swing.tree.TreeNode>
    protected parent: javax.swing.tree.MutableTreeNode
    protected children: java.util.Vector
    protected userObject: java.lang.Object
    protected allowsChildren: boolean
    public constructor()
    public constructor(arg0: java.lang.Object)
    public constructor(arg0: java.lang.Object, arg1: boolean)
    public insert(arg0: javax.swing.tree.MutableTreeNode, arg1: int): void
    public remove(arg0: int): void
    public setParent(arg0: javax.swing.tree.MutableTreeNode): void
    public getParent(): javax.swing.tree.TreeNode
    public getChildAt(arg0: int): javax.swing.tree.TreeNode
    public getChildCount(): int
    public getIndex(arg0: javax.swing.tree.TreeNode): int
    public children(): java.util.Enumeration
    public setAllowsChildren(arg0: boolean): void
    public getAllowsChildren(): boolean
    public setUserObject(arg0: java.lang.Object): void
    public getUserObject(): java.lang.Object
    public removeFromParent(): void
    public remove(arg0: javax.swing.tree.MutableTreeNode): void
    public removeAllChildren(): void
    public add(arg0: javax.swing.tree.MutableTreeNode): void
    public isNodeAncestor(arg0: javax.swing.tree.TreeNode): boolean
    public isNodeDescendant(arg0: javax.swing.tree.DefaultMutableTreeNode): boolean
    public getSharedAncestor(arg0: javax.swing.tree.DefaultMutableTreeNode): javax.swing.tree.TreeNode
    public isNodeRelated(arg0: javax.swing.tree.DefaultMutableTreeNode): boolean
    public getDepth(): int
    public getLevel(): int
    public getPath(): javax.swing.tree.TreeNode[]
    protected getPathToRoot(arg0: javax.swing.tree.TreeNode, arg1: int): javax.swing.tree.TreeNode[]
    public getUserObjectPath(): java.lang.Object[]
    public getRoot(): javax.swing.tree.TreeNode
    public isRoot(): boolean
    public getNextNode(): javax.swing.tree.DefaultMutableTreeNode
    public getPreviousNode(): javax.swing.tree.DefaultMutableTreeNode
    public preorderEnumeration(): java.util.Enumeration
    public postorderEnumeration(): java.util.Enumeration
    public breadthFirstEnumeration(): java.util.Enumeration
    public depthFirstEnumeration(): java.util.Enumeration
    public pathFromAncestorEnumeration(arg0: javax.swing.tree.TreeNode): java.util.Enumeration
    public isNodeChild(arg0: javax.swing.tree.TreeNode): boolean
    public getFirstChild(): javax.swing.tree.TreeNode
    public getLastChild(): javax.swing.tree.TreeNode
    public getChildAfter(arg0: javax.swing.tree.TreeNode): javax.swing.tree.TreeNode
    public getChildBefore(arg0: javax.swing.tree.TreeNode): javax.swing.tree.TreeNode
    public isNodeSibling(arg0: javax.swing.tree.TreeNode): boolean
    public getSiblingCount(): int
    public getNextSibling(): javax.swing.tree.DefaultMutableTreeNode
    public getPreviousSibling(): javax.swing.tree.DefaultMutableTreeNode
    public isLeaf(): boolean
    public getFirstLeaf(): javax.swing.tree.DefaultMutableTreeNode
    public getLastLeaf(): javax.swing.tree.DefaultMutableTreeNode
    public getNextLeaf(): javax.swing.tree.DefaultMutableTreeNode
    public getPreviousLeaf(): javax.swing.tree.DefaultMutableTreeNode
    public getLeafCount(): int
    public toString(): string
    public clone(): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}