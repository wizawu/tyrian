declare namespace javax {
  namespace xml {
    namespace transform {
      interface ErrorListener {
        warning(arg0: javax.xml.transform.TransformerException): void
        error(arg0: javax.xml.transform.TransformerException): void
        fatalError(arg0: javax.xml.transform.TransformerException): void
      }
    }
  }
}
