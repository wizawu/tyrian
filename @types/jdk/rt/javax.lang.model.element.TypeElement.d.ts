declare namespace javax {
    namespace lang {
        namespace model {
            namespace element {
interface TypeElement extends javax.lang.model.element.Element , javax.lang.model.element.Parameterizable , javax.lang.model.element.QualifiedNameable {
    getEnclosedElements(): java.util.List<javax.lang.model.element.Element>
    getNestingKind(): javax.lang.model.element.NestingKind
    getQualifiedName(): javax.lang.model.element.Name
    getSimpleName(): javax.lang.model.element.Name
    getSuperclass(): javax.lang.model.type.TypeMirror
    getInterfaces(): java.util.List<javax.lang.model.type.TypeMirror>
    getTypeParameters(): java.util.List<javax.lang.model.element.TypeParameterElement>
    getEnclosingElement(): javax.lang.model.element.Element
}

            }
        }
    }
}