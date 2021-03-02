declare namespace javax {
  namespace naming {
    namespace directory {

      class AttributeModificationException extends javax.naming.NamingException {
        public constructor(arg0: java.lang.String)
        public constructor()
        public setUnexecutedModifications(arg0: javax.naming.directory.ModificationItem[]): void
        public getUnexecutedModifications(): javax.naming.directory.ModificationItem[]
        public toString(): java.lang.String
      }

    }
  }
}
