declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface Scope {

          getEnclosingScope(): com.sun.source.tree.Scope
          getEnclosingClass(): javax.lang.model.element.TypeElement
          getEnclosingMethod(): javax.lang.model.element.ExecutableElement
          getLocalElements(): java.lang.Iterable<javax.lang.model.element.Element>
        }

      }
    }
  }
}
