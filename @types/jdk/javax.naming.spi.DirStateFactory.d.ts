declare namespace javax {
  namespace naming {
    namespace spi {

      interface DirStateFactory extends javax.naming.spi.StateFactory {
        getStateToBind(arg0: java.lang.Object | any, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<unknown,unknown>, arg4: javax.naming.directory.Attributes): javax.naming.spi.DirStateFactory$Result
      }

    }
  }
}
