declare namespace javax {
  namespace naming {
    namespace spi {
      interface DirObjectFactory extends javax.naming.spi.ObjectFactory {
        getObjectInstance(
          arg0: java.lang.Object | any,
          arg1: javax.naming.Name,
          arg2: javax.naming.Context,
          arg3: java.util.Hashtable<unknown, unknown>,
          arg4: javax.naming.directory.Attributes
        ): java.lang.Object
      }
    }
  }
}
