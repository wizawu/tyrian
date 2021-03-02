declare namespace javax {
  namespace lang {
    namespace model {
      namespace element {

        interface ModuleElement extends javax.lang.model.element.Element, javax.lang.model.element.QualifiedNameable {
          getQualifiedName(): javax.lang.model.element.Name
          getSimpleName(): javax.lang.model.element.Name
          getEnclosedElements(): java.util.List<javax.lang.model.element.Element>
          isOpen(): boolean
          isUnnamed(): boolean
          getEnclosingElement(): javax.lang.model.element.Element
          getDirectives(): java.util.List<javax.lang.model.element.ModuleElement$Directive>
        }

      }
    }
  }
}
