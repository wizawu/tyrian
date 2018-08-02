declare namespace javax {
    namespace lang {
        namespace model {
            namespace type {
                interface TypeVariable extends javax.lang.model.type.ReferenceType {
                    asElement(): javax.lang.model.element.Element
                    getUpperBound(): javax.lang.model.type.TypeMirror
                    getLowerBound(): javax.lang.model.type.TypeMirror
                }
            }
        }
    }
}