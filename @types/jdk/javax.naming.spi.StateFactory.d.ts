declare namespace javax {
  namespace naming {
    namespace spi {
      interface StateFactory$$lambda {
        (
          arg0: java.lang.Object | any,
          arg1: javax.naming.Name,
          arg2: javax.naming.Context,
          arg3: java.util.Hashtable<unknown, unknown>
        ): java.lang.Object | any
      }

      interface StateFactory {
        getStateToBind(
          arg0: java.lang.Object | any,
          arg1: javax.naming.Name,
          arg2: javax.naming.Context,
          arg3: java.util.Hashtable<unknown, unknown>
        ): java.lang.Object
      }
    }
  }
}
