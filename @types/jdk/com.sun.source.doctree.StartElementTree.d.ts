declare namespace com {
  namespace sun {
    namespace source {
      namespace doctree {

        interface StartElementTree extends com.sun.source.doctree.DocTree {

          getName(): javax.lang.model.element.Name
          getAttributes(): java.util.List<com.sun.source.doctree.DocTree>
          isSelfClosing(): boolean
        }

      }
    }
  }
}
