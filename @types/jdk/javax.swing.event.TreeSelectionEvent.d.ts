declare namespace javax {
  namespace swing {
    namespace event {
      class TreeSelectionEvent extends java.util.EventObject {
        protected paths: javax.swing.tree.TreePath[]
        protected areNew: boolean[]
        protected oldLeadSelectionPath: javax.swing.tree.TreePath
        protected newLeadSelectionPath: javax.swing.tree.TreePath
        public constructor(
          arg0: java.lang.Object | any,
          arg1: javax.swing.tree.TreePath[],
          arg2: boolean[] | java.lang.Boolean[],
          arg3: javax.swing.tree.TreePath,
          arg4: javax.swing.tree.TreePath
        )
        public constructor(
          arg0: java.lang.Object | any,
          arg1: javax.swing.tree.TreePath,
          arg2: boolean | java.lang.Boolean,
          arg3: javax.swing.tree.TreePath,
          arg4: javax.swing.tree.TreePath
        )
        public getPaths(): javax.swing.tree.TreePath[]
        public getPath(): javax.swing.tree.TreePath
        public isAddedPath(): boolean
        public isAddedPath(arg0: javax.swing.tree.TreePath): boolean
        public isAddedPath(arg0: number | java.lang.Integer): boolean
        public getOldLeadSelectionPath(): javax.swing.tree.TreePath
        public getNewLeadSelectionPath(): javax.swing.tree.TreePath
        public cloneWithSource(arg0: java.lang.Object | any): java.lang.Object
      }
    }
  }
}
