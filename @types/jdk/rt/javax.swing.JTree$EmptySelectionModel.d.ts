declare namespace javax {
    namespace swing {
        class JTree$EmptySelectionModel extends javax.swing.tree.DefaultTreeSelectionModel {
            protected static sharedInstance: javax.swing.JTree$EmptySelectionModel
            protected constructor()
            public static sharedInstance(): javax.swing.JTree$EmptySelectionModel
            public setSelectionPaths(arg0: javax.swing.tree.TreePath[]): void
            public addSelectionPaths(arg0: javax.swing.tree.TreePath[]): void
            public removeSelectionPaths(arg0: javax.swing.tree.TreePath[]): void
            public setSelectionMode(arg0: int): void
            public setRowMapper(arg0: javax.swing.tree.RowMapper | javax.swing.tree.RowMapper$$Lambda): void
            public addTreeSelectionListener(arg0: javax.swing.event.TreeSelectionListener | javax.swing.event.TreeSelectionListener$$Lambda): void
            public removeTreeSelectionListener(arg0: javax.swing.event.TreeSelectionListener | javax.swing.event.TreeSelectionListener$$Lambda): void
            public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$Lambda): void
            public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$Lambda): void
            public static class: java.lang.Class<any>
        }
    }
}