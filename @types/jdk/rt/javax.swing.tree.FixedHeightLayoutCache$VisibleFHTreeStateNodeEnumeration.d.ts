declare namespace javax {
    namespace swing {
        namespace tree {
            class FixedHeightLayoutCache$VisibleFHTreeStateNodeEnumeration implements java.util.Enumeration<javax.swing.tree.TreePath> {
                protected parent: javax.swing.tree.FixedHeightLayoutCache$FHTreeStateNode
                protected nextIndex: int
                protected childCount: int
                protected constructor(arg0: javax.swing.tree.FixedHeightLayoutCache, arg1: javax.swing.tree.FixedHeightLayoutCache$FHTreeStateNode)
                protected constructor(arg0: javax.swing.tree.FixedHeightLayoutCache, arg1: javax.swing.tree.FixedHeightLayoutCache$FHTreeStateNode, arg2: int)
                public hasMoreElements(): boolean
                public nextElement(): javax.swing.tree.TreePath
                protected updateNextObject(): void
                protected findNextValidParent(): boolean
                protected updateNextIndex(): boolean
                public nextElement(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}