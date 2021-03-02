declare namespace javax {
  namespace xml {
    namespace xpath {

      interface XPathNodes extends java.lang.Iterable<org.w3c.dom.Node> {
        iterator(): java.util.Iterator<org.w3c.dom.Node>
        size(): int
        get(arg0: int): org.w3c.dom.Node
      }

    }
  }
}
