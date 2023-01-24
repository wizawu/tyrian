declare namespace javax {
  namespace swing {
    namespace tree {
      class TreePath implements java.io.Serializable {
        public constructor(arg0: java.lang.Object[] | any[])
        public constructor(arg0: java.lang.Object | any)
        protected constructor(arg0: javax.swing.tree.TreePath, arg1: java.lang.Object | any)
        protected constructor(arg0: java.lang.Object[] | any[], arg1: number | java.lang.Integer)
        protected constructor()
        public getPath(): java.lang.Object[]
        public getLastPathComponent(): java.lang.Object
        public getPathCount(): number
        public getPathComponent(arg0: number | java.lang.Integer): java.lang.Object
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public isDescendant(arg0: javax.swing.tree.TreePath): boolean
        public pathByAddingChild(arg0: java.lang.Object | any): javax.swing.tree.TreePath
        public getParentPath(): javax.swing.tree.TreePath
        public toString(): java.lang.String
      }
    }
  }
}
