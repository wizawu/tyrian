declare namespace javax {
  namespace lang {
    namespace model {
      namespace element {
        interface ModuleElement$DirectiveVisitor<R, P> {
          visit(arg0: javax.lang.model.element.ModuleElement$Directive): R
          visit(arg0: javax.lang.model.element.ModuleElement$Directive, arg1: P): R
          visitRequires(arg0: javax.lang.model.element.ModuleElement$RequiresDirective, arg1: P): R
          visitExports(arg0: javax.lang.model.element.ModuleElement$ExportsDirective, arg1: P): R
          visitOpens(arg0: javax.lang.model.element.ModuleElement$OpensDirective, arg1: P): R
          visitUses(arg0: javax.lang.model.element.ModuleElement$UsesDirective, arg1: P): R
          visitProvides(arg0: javax.lang.model.element.ModuleElement$ProvidesDirective, arg1: P): R
          visitUnknown(arg0: javax.lang.model.element.ModuleElement$Directive, arg1: P): R
        }
      }
    }
  }
}
