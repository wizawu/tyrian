declare namespace javax {
  namespace swing {
    namespace event {

      class TreeModelEvent extends java.util.EventObject {

        protected path: javax.swing.tree.TreePath
        protected childIndices: int[]
        protected children: java.lang.Object[]
        public constructor(arg0: java.lang.Object, arg1: java.lang.Object[], arg2: int[], arg3: java.lang.Object[])
        public constructor(arg0: java.lang.Object, arg1: javax.swing.tree.TreePath, arg2: int[], arg3: java.lang.Object[])
        public constructor(arg0: java.lang.Object, arg1: java.lang.Object[])
        public constructor(arg0: java.lang.Object, arg1: javax.swing.tree.TreePath)
        public getTreePath(): javax.swing.tree.TreePath
        public getPath(): java.lang.Object[]
        public getChildren(): java.lang.Object[]
        public getChildIndices(): int[]
        public toString(): java.lang.String
      }

    }
  }
}
