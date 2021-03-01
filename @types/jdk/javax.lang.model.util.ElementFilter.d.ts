declare namespace javax {
  namespace lang {
    namespace model {
      namespace util {

        class ElementFilter {

          public static fieldsIn(arg0: java.lang.Iterable<javax.lang.model.element.Element>): java.util.List<javax.lang.model.element.VariableElement>
          public static fieldsIn(arg0: java.util.Set<javax.lang.model.element.Element>): java.util.Set<javax.lang.model.element.VariableElement>
          public static constructorsIn(arg0: java.lang.Iterable<javax.lang.model.element.Element>): java.util.List<javax.lang.model.element.ExecutableElement>
          public static constructorsIn(arg0: java.util.Set<javax.lang.model.element.Element>): java.util.Set<javax.lang.model.element.ExecutableElement>
          public static methodsIn(arg0: java.lang.Iterable<javax.lang.model.element.Element>): java.util.List<javax.lang.model.element.ExecutableElement>
          public static methodsIn(arg0: java.util.Set<javax.lang.model.element.Element>): java.util.Set<javax.lang.model.element.ExecutableElement>
          public static typesIn(arg0: java.lang.Iterable<javax.lang.model.element.Element>): java.util.List<javax.lang.model.element.TypeElement>
          public static typesIn(arg0: java.util.Set<javax.lang.model.element.Element>): java.util.Set<javax.lang.model.element.TypeElement>
          public static packagesIn(arg0: java.lang.Iterable<javax.lang.model.element.Element>): java.util.List<javax.lang.model.element.PackageElement>
          public static packagesIn(arg0: java.util.Set<javax.lang.model.element.Element>): java.util.Set<javax.lang.model.element.PackageElement>
          public static modulesIn(arg0: java.lang.Iterable<javax.lang.model.element.Element>): java.util.List<javax.lang.model.element.ModuleElement>
          public static modulesIn(arg0: java.util.Set<javax.lang.model.element.Element>): java.util.Set<javax.lang.model.element.ModuleElement>
          public static exportsIn(arg0: java.lang.Iterable<javax.lang.model.element.ModuleElement$Directive>): java.util.List<javax.lang.model.element.ModuleElement$ExportsDirective>
          public static opensIn(arg0: java.lang.Iterable<javax.lang.model.element.ModuleElement$Directive>): java.util.List<javax.lang.model.element.ModuleElement$OpensDirective>
          public static providesIn(arg0: java.lang.Iterable<javax.lang.model.element.ModuleElement$Directive>): java.util.List<javax.lang.model.element.ModuleElement$ProvidesDirective>
          public static requiresIn(arg0: java.lang.Iterable<javax.lang.model.element.ModuleElement$Directive>): java.util.List<javax.lang.model.element.ModuleElement$RequiresDirective>
          public static usesIn(arg0: java.lang.Iterable<javax.lang.model.element.ModuleElement$Directive>): java.util.List<javax.lang.model.element.ModuleElement$UsesDirective>
        }

      }
    }
  }
}
