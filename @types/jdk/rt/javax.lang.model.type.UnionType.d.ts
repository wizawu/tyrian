declare namespace javax {
    namespace lang {
        namespace model {
            namespace type {
                interface UnionType extends javax.lang.model.type.TypeMirror {
                    getAlternatives(): java.util.List<javax.lang.model.type.TypeMirror>
                }
                interface UnionType$$Lambda extends javax.lang.model.type.TypeMirror {
                    (): java.util.List<javax.lang.model.type.TypeMirror>
                }
            }
        }
    }
}