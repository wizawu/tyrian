declare namespace javax {
  namespace lang {
    namespace model {
      namespace element {

        interface PackageElement extends javax.lang.model.element.Element, javax.lang.model.element.QualifiedNameable {
          getQualifiedName(): javax.lang.model.element.Name
          getSimpleName(): javax.lang.model.element.Name
          getEnclosedElements(): java.util.List<javax.lang.model.element.Element>
          isUnnamed(): boolean
          getEnclosingElement(): javax.lang.model.element.Element
        }

      }
    }
  }
}
