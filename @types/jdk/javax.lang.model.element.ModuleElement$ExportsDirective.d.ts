declare namespace javax {
  namespace lang {
    namespace model {
      namespace element {
        interface ModuleElement$ExportsDirective extends javax.lang.model.element.ModuleElement$Directive {
          getPackage(): javax.lang.model.element.PackageElement
          getTargetModules(): java.util.List<javax.lang.model.element.ModuleElement>
        }
      }
    }
  }
}
