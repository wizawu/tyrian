declare namespace javax {
    namespace lang {
        namespace model {
            namespace type {
interface DeclaredType extends javax.lang.model.type.ReferenceType {
    asElement(): javax.lang.model.element.Element
    getEnclosingType(): javax.lang.model.type.TypeMirror
    getTypeArguments(): java.util.List<javax.lang.model.type.TypeMirror>
}

            }
        }
    }
}