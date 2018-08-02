declare namespace javax {
    namespace lang {
        namespace model {
            namespace element {
                interface AnnotationValue {
                    getValue(): java.lang.Object
                    toString(): string
                    accept<R, P>(arg0: javax.lang.model.element.AnnotationValueVisitor<R, P>, arg1: P): R
                }
            }
        }
    }
}