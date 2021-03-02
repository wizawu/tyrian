declare namespace javax {
  namespace xml {
    namespace xpath {

      interface XPathNodes extends java.lang.Iterable<org.w3c.dom.Node> {
        iterator(): java.util.Iterator<org.w3c.dom.Node>
        size(): number
        get(arg0: number | java.lang.Integer): org.w3c.dom.Node
      }

    }
  }
}
