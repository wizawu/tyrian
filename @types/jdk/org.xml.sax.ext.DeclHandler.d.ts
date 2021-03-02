declare namespace org {
  namespace xml {
    namespace sax {
      namespace ext {

        interface DeclHandler {
          elementDecl(arg0: java.lang.String, arg1: java.lang.String): void
          attributeDecl(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: java.lang.String, arg4: java.lang.String): void
          internalEntityDecl(arg0: java.lang.String, arg1: java.lang.String): void
          externalEntityDecl(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String): void
        }

      }
    }
  }
}
