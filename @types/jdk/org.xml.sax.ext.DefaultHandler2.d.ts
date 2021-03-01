declare namespace org {
  namespace xml {
    namespace sax {
      namespace ext {

        class DefaultHandler2 extends org.xml.sax.helpers.DefaultHandler implements org.xml.sax.ext.LexicalHandler, org.xml.sax.ext.DeclHandler, org.xml.sax.ext.EntityResolver2 {

          public constructor()
          public startCDATA(): void
          public endCDATA(): void
          public startDTD(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String): void
          public endDTD(): void
          public startEntity(arg0: java.lang.String): void
          public endEntity(arg0: java.lang.String): void
          public comment(arg0: char[], arg1: int, arg2: int): void
          public attributeDecl(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: java.lang.String, arg4: java.lang.String): void
          public elementDecl(arg0: java.lang.String, arg1: java.lang.String): void
          public externalEntityDecl(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String): void
          public internalEntityDecl(arg0: java.lang.String, arg1: java.lang.String): void
          public getExternalSubset(arg0: java.lang.String, arg1: java.lang.String): org.xml.sax.InputSource
          public resolveEntity(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: java.lang.String): org.xml.sax.InputSource
          public resolveEntity(arg0: java.lang.String, arg1: java.lang.String): org.xml.sax.InputSource
        }

      }
    }
  }
}
