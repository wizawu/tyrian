declare namespace javax {
  namespace naming {
    namespace spi {

      interface ObjectFactory$$lambda {
        (arg0: java.lang.Object | any, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<unknown,unknown>): java.lang.Object
      }

      interface ObjectFactory {
        getObjectInstance(arg0: java.lang.Object | any, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<unknown,unknown>): java.lang.Object
      }

    }
  }
}
