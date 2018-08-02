declare namespace javax {
    namespace swing {
        class JTree$AccessibleJTree extends javax.swing.JComponent$AccessibleJComponent implements javax.accessibility.AccessibleSelection , javax.swing.event.TreeSelectionListener , javax.swing.event.TreeModelListener , javax.swing.event.TreeExpansionListener {
            public constructor(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda)
            public valueChanged(arg0: javax.swing.event.TreeSelectionEvent): void
            public fireVisibleDataPropertyChange(): void
            public treeNodesChanged(arg0: javax.swing.event.TreeModelEvent): void
            public treeNodesInserted(arg0: javax.swing.event.TreeModelEvent): void
            public treeNodesRemoved(arg0: javax.swing.event.TreeModelEvent): void
            public treeStructureChanged(arg0: javax.swing.event.TreeModelEvent): void
            public treeCollapsed(arg0: javax.swing.event.TreeExpansionEvent): void
            public treeExpanded(arg0: javax.swing.event.TreeExpansionEvent): void
            public getAccessibleRole(): javax.accessibility.AccessibleRole
            public getAccessibleAt(arg0: java.awt.Point): javax.accessibility.Accessible
            public getAccessibleChildrenCount(): int
            public getAccessibleChild(arg0: int): javax.accessibility.Accessible
            public getAccessibleIndexInParent(): int
            public getAccessibleSelection(): javax.accessibility.AccessibleSelection
            public getAccessibleSelectionCount(): int
            public getAccessibleSelection(arg0: int): javax.accessibility.Accessible
            public isAccessibleChildSelected(arg0: int): boolean
            public addAccessibleSelection(arg0: int): void
            public removeAccessibleSelection(arg0: int): void
            public clearAccessibleSelection(): void
            public selectAllAccessibleSelection(): void
            public static class: java.lang.Class<any>
        }
    }
}