declare namespace org {
  namespace xml {
    namespace sax {
      namespace ext {

        interface DeclHandler {
          elementDecl(arg0: java.lang.String | string, arg1: java.lang.String | string): void
          attributeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): void
          internalEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string): void
          externalEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
        }

      }
    }
  }
}
