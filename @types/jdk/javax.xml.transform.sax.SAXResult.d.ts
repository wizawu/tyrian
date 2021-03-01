declare namespace javax {
  namespace xml {
    namespace transform {
      namespace sax {

        class SAXResult implements javax.xml.transform.Result {

          public static readonly FEATURE: java.lang.String
          public constructor()
          public constructor(arg0: org.xml.sax.ContentHandler)
          public setHandler(arg0: org.xml.sax.ContentHandler): void
          public getHandler(): org.xml.sax.ContentHandler
          public setLexicalHandler(arg0: org.xml.sax.ext.LexicalHandler): void
          public getLexicalHandler(): org.xml.sax.ext.LexicalHandler
          public setSystemId(arg0: java.lang.String): void
          public getSystemId(): java.lang.String
        }

      }
    }
  }
}
