declare namespace javax {
  namespace naming {
    namespace spi {

      class DirectoryManager extends javax.naming.spi.NamingManager {
        constructor()
        public static getContinuationDirContext(arg0: javax.naming.CannotProceedException): javax.naming.directory.DirContext
        public static getObjectInstance(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<unknown,unknown>, arg4: javax.naming.directory.Attributes): java.lang.Object
        public static getStateToBind(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<unknown,unknown>, arg4: javax.naming.directory.Attributes): javax.naming.spi.DirStateFactory$Result
      }

    }
  }
}
