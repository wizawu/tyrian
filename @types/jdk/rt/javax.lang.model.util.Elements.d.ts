declare namespace javax {
    namespace lang {
        namespace model {
            namespace util {
                interface Elements {
                    getPackageElement(arg0: java.lang.CharSequence): javax.lang.model.element.PackageElement
                    getTypeElement(arg0: java.lang.CharSequence): javax.lang.model.element.TypeElement
                    getElementValuesWithDefaults(arg0: javax.lang.model.element.AnnotationMirror): java.util.Map<javax.lang.model.element.ExecutableElement, javax.lang.model.element.AnnotationValue>
                    getDocComment(arg0: javax.lang.model.element.Element): string
                    isDeprecated(arg0: javax.lang.model.element.Element): boolean
                    getBinaryName(arg0: javax.lang.model.element.TypeElement): javax.lang.model.element.Name
                    getPackageOf(arg0: javax.lang.model.element.Element): javax.lang.model.element.PackageElement
                    getAllMembers(arg0: javax.lang.model.element.TypeElement): java.util.List<javax.lang.model.element.Element>
                    getAllAnnotationMirrors(arg0: javax.lang.model.element.Element): java.util.List<javax.lang.model.element.AnnotationMirror>
                    hides(arg0: javax.lang.model.element.Element, arg1: javax.lang.model.element.Element): boolean
                    overrides(arg0: javax.lang.model.element.ExecutableElement, arg1: javax.lang.model.element.ExecutableElement, arg2: javax.lang.model.element.TypeElement): boolean
                    getConstantExpression(arg0: java.lang.Object): string
                    printElements(arg0: java.io.Writer | java.io.Writer$$Lambda, ...arg1: javax.lang.model.element.Element[]): void
                    getName(arg0: java.lang.CharSequence): javax.lang.model.element.Name
                    isFunctionalInterface(arg0: javax.lang.model.element.TypeElement): boolean
                }
            }
        }
    }
}