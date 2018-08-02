declare namespace javax {
    namespace lang {
        namespace model {
            namespace element {
interface ElementVisitor<R, P> {
    visit(arg0: javax.lang.model.element.Element, arg1: P): R
    visit(arg0: javax.lang.model.element.Element): R
    visitPackage(arg0: javax.lang.model.element.PackageElement, arg1: P): R
    visitType(arg0: javax.lang.model.element.TypeElement, arg1: P): R
    visitVariable(arg0: javax.lang.model.element.VariableElement, arg1: P): R
    visitExecutable(arg0: javax.lang.model.element.ExecutableElement, arg1: P): R
    visitTypeParameter(arg0: javax.lang.model.element.TypeParameterElement, arg1: P): R
    visitUnknown(arg0: javax.lang.model.element.Element, arg1: P): R
}

            }
        }
    }
}