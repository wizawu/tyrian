declare namespace javax {
  namespace lang {
    namespace model {
      namespace element {

        interface ModuleElement$ProvidesDirective extends javax.lang.model.element.ModuleElement$Directive {

          getService(): javax.lang.model.element.TypeElement
          getImplementations(): java.util.List<javax.lang.model.element.TypeElement>
        }

      }
    }
  }
}
