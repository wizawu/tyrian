declare namespace javax {
    namespace swing {
        namespace tree {
            class VariableHeightLayoutCache$TreeStateNode extends javax.swing.tree.DefaultMutableTreeNode {
                protected preferredWidth: int
                protected preferredHeight: int
                protected xOrigin: int
                protected yOrigin: int
                protected expanded: boolean
                protected hasBeenExpanded: boolean
                protected path: javax.swing.tree.TreePath
                public constructor(arg0: javax.swing.tree.VariableHeightLayoutCache, arg1: java.lang.Object)
                public setParent(arg0: javax.swing.tree.MutableTreeNode): void
                public remove(arg0: int): void
                public setUserObject(arg0: java.lang.Object): void
                public children(): java.util.Enumeration
                public isLeaf(): boolean
                public getNodeBounds(arg0: java.awt.Rectangle): java.awt.Rectangle
                public getXOrigin(): int
                public getYOrigin(): int
                public getPreferredHeight(): int
                public getPreferredWidth(): int
                public hasValidSize(): boolean
                public getRow(): int
                public hasBeenExpanded(): boolean
                public isExpanded(): boolean
                public getLastVisibleNode(): javax.swing.tree.VariableHeightLayoutCache$TreeStateNode
                public isVisible(): boolean
                public getModelChildCount(): int
                public getVisibleChildCount(): int
                public toggleExpanded(): void
                public makeVisible(): void
                public expand(): void
                public collapse(): void
                public getValue(): java.lang.Object
                public getTreePath(): javax.swing.tree.TreePath
                protected resetChildrenPaths(arg0: javax.swing.tree.TreePath): void
                protected setYOrigin(arg0: int): void
                protected shiftYOriginBy(arg0: int): void
                protected updatePreferredSize(): void
                protected updatePreferredSize(arg0: int): void
                protected markSizeInvalid(): void
                protected deepMarkSizeInvalid(): void
                protected getLoadedChildren(arg0: boolean): java.util.Enumeration
                protected didAdjustTree(): void
                protected expandParentAndReceiver(): void
                protected expand(arg0: boolean): void
                protected collapse(arg0: boolean): void
                protected removeFromMapping(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}