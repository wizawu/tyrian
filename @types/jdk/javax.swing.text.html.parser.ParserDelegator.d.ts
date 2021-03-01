declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {
        namespace parser {

          class ParserDelegator extends javax.swing.text.html.HTMLEditorKit$Parser implements java.io.Serializable {

            protected static setDefaultDTD(): void
            protected static createDTD(arg0: javax.swing.text.html.parser.DTD, arg1: java.lang.String): javax.swing.text.html.parser.DTD
            public constructor()
            public parse(arg0: java.io.Reader, arg1: javax.swing.text.html.HTMLEditorKit$ParserCallback, arg2: boolean): void
            static getResourceAsStream(arg0: java.lang.String): java.io.InputStream
          }

        }
      }
    }
  }
}
