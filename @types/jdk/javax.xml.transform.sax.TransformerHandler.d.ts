declare namespace javax {
  namespace xml {
    namespace transform {
      namespace sax {
        interface TransformerHandler
          extends org.xml.sax.ContentHandler,
            org.xml.sax.ext.LexicalHandler,
            org.xml.sax.DTDHandler {
          setResult(arg0: javax.xml.transform.Result): void
          setSystemId(arg0: java.lang.String | string): void
          getSystemId(): java.lang.String
          getTransformer(): javax.xml.transform.Transformer
        }
      }
    }
  }
}
