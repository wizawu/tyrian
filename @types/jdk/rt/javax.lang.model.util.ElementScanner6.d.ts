declare namespace javax {
    namespace lang {
        namespace model {
            namespace util {
                class ElementScanner6<R, P> extends javax.lang.model.util.AbstractElementVisitor6<R, P> {
                    protected DEFAULT_VALUE: R
                    protected constructor()
                    protected constructor(arg0: R)
                    public scan(arg0: java.lang.Iterable<javax.lang.model.element.Element>, arg1: P): R
                    public scan(arg0: javax.lang.model.element.Element, arg1: P): R
                    public scan(arg0: javax.lang.model.element.Element): R
                    public visitPackage(arg0: javax.lang.model.element.PackageElement, arg1: P): R
                    public visitType(arg0: javax.lang.model.element.TypeElement, arg1: P): R
                    public visitVariable(arg0: javax.lang.model.element.VariableElement, arg1: P): R
                    public visitExecutable(arg0: javax.lang.model.element.ExecutableElement, arg1: P): R
                    public visitTypeParameter(arg0: javax.lang.model.element.TypeParameterElement, arg1: P): R
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}