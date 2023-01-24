declare namespace javax {
  namespace naming {
    namespace spi {
      interface InitialContextFactoryBuilder$$lambda {
        (arg0: java.util.Hashtable<unknown, unknown>):
          | javax.naming.spi.InitialContextFactory
          | javax.naming.spi.InitialContextFactory$$lambda
      }

      interface InitialContextFactoryBuilder {
        createInitialContextFactory(arg0: java.util.Hashtable<unknown, unknown>): javax.naming.spi.InitialContextFactory
      }
    }
  }
}
