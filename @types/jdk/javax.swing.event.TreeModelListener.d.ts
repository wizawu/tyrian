declare namespace javax {
  namespace swing {
    namespace event {
      interface TreeModelListener extends java.util.EventListener {
        treeNodesChanged(arg0: javax.swing.event.TreeModelEvent): void
        treeNodesInserted(arg0: javax.swing.event.TreeModelEvent): void
        treeNodesRemoved(arg0: javax.swing.event.TreeModelEvent): void
        treeStructureChanged(arg0: javax.swing.event.TreeModelEvent): void
      }
    }
  }
}
