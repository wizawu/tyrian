declare namespace javax {
  namespace lang {
    namespace model {
      namespace util {

        interface Elements {
          getPackageElement(arg0: java.lang.CharSequence): javax.lang.model.element.PackageElement
          getPackageElement(arg0: javax.lang.model.element.ModuleElement, arg1: java.lang.CharSequence): javax.lang.model.element.PackageElement
          getAllPackageElements(arg0: java.lang.CharSequence): java.util.Set<javax.lang.model.element.PackageElement>
          getTypeElement(arg0: java.lang.CharSequence): javax.lang.model.element.TypeElement
          getTypeElement(arg0: javax.lang.model.element.ModuleElement, arg1: java.lang.CharSequence): javax.lang.model.element.TypeElement
          getAllTypeElements(arg0: java.lang.CharSequence): java.util.Set<javax.lang.model.element.TypeElement>
          getModuleElement(arg0: java.lang.CharSequence): javax.lang.model.element.ModuleElement
          getAllModuleElements(): java.util.Set<javax.lang.model.element.ModuleElement>
          getElementValuesWithDefaults(arg0: javax.lang.model.element.AnnotationMirror): java.util.Map<javax.lang.model.element.ExecutableElement,javax.lang.model.element.AnnotationValue>
          getDocComment(arg0: javax.lang.model.element.Element): java.lang.String
          isDeprecated(arg0: javax.lang.model.element.Element): boolean
          getOrigin(arg0: javax.lang.model.element.Element): javax.lang.model.util.Elements$Origin
          getOrigin(arg0: javax.lang.model.AnnotatedConstruct, arg1: javax.lang.model.element.AnnotationMirror): javax.lang.model.util.Elements$Origin
          getOrigin(arg0: javax.lang.model.element.ModuleElement, arg1: javax.lang.model.element.ModuleElement$Directive): javax.lang.model.util.Elements$Origin
          isBridge(arg0: javax.lang.model.element.ExecutableElement): boolean
          getBinaryName(arg0: javax.lang.model.element.TypeElement): javax.lang.model.element.Name
          getPackageOf(arg0: javax.lang.model.element.Element): javax.lang.model.element.PackageElement
          getModuleOf(arg0: javax.lang.model.element.Element): javax.lang.model.element.ModuleElement
          getAllMembers(arg0: javax.lang.model.element.TypeElement): java.util.List<javax.lang.model.element.Element>
          getAllAnnotationMirrors(arg0: javax.lang.model.element.Element): java.util.List<javax.lang.model.element.AnnotationMirror>
          hides(arg0: javax.lang.model.element.Element, arg1: javax.lang.model.element.Element): boolean
          overrides(arg0: javax.lang.model.element.ExecutableElement, arg1: javax.lang.model.element.ExecutableElement, arg2: javax.lang.model.element.TypeElement): boolean
          getConstantExpression(arg0: java.lang.Object): java.lang.String
          printElements(arg0: java.io.Writer, ...arg1: javax.lang.model.element.Element[]): void
          getName(arg0: java.lang.CharSequence): javax.lang.model.element.Name
          isFunctionalInterface(arg0: javax.lang.model.element.TypeElement): boolean
        }

      }
    }
  }
}
