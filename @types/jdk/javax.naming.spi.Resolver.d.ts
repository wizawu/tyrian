declare namespace javax {
  namespace naming {
    namespace spi {

      interface Resolver {
        resolveToClass(arg0: javax.naming.Name, arg1: java.lang.Class<javax.naming.Context>): javax.naming.spi.ResolveResult
        resolveToClass(arg0: java.lang.String, arg1: java.lang.Class<javax.naming.Context>): javax.naming.spi.ResolveResult
      }

    }
  }
}
