declare namespace javax {
  namespace xml {
    namespace transform {
      namespace dom {

        interface DOMLocator extends javax.xml.transform.SourceLocator {

          getOriginatingNode(): org.w3c.dom.Node
        }

      }
    }
  }
}
