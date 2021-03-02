declare namespace com {
  namespace sun {
    namespace source {
      namespace doctree {

        interface AttributeTree extends com.sun.source.doctree.DocTree {
          getName(): javax.lang.model.element.Name
          getValueKind(): com.sun.source.doctree.AttributeTree$ValueKind
          getValue(): java.util.List<com.sun.source.doctree.DocTree>
        }

      }
    }
  }
}
