declare namespace javax {
  namespace lang {
    namespace model {
      namespace element {
        interface ModuleElement$RequiresDirective extends javax.lang.model.element.ModuleElement$Directive {
          isStatic(): boolean
          isTransitive(): boolean
          getDependency(): javax.lang.model.element.ModuleElement
        }
      }
    }
  }
}
