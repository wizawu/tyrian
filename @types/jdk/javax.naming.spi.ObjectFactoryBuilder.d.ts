declare namespace javax {
  namespace naming {
    namespace spi {
      interface ObjectFactoryBuilder$$lambda {
        (arg0: java.lang.Object | any, arg1: java.util.Hashtable<unknown, unknown>):
          | javax.naming.spi.ObjectFactory
          | javax.naming.spi.ObjectFactory$$lambda
      }

      interface ObjectFactoryBuilder {
        createObjectFactory(
          arg0: java.lang.Object | any,
          arg1: java.util.Hashtable<unknown, unknown>
        ): javax.naming.spi.ObjectFactory
      }
    }
  }
}
