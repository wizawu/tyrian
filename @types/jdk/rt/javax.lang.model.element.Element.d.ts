declare namespace javax {
    namespace lang {
        namespace model {
            namespace element {
                interface Element extends javax.lang.model.AnnotatedConstruct {
                    asType(): javax.lang.model.type.TypeMirror
                    getKind(): javax.lang.model.element.ElementKind
                    getModifiers(): java.util.Set<javax.lang.model.element.Modifier>
                    getSimpleName(): javax.lang.model.element.Name
                    getEnclosingElement(): javax.lang.model.element.Element
                    getEnclosedElements(): java.util.List<javax.lang.model.element.Element>
                    equals(arg0: java.lang.Object): boolean
                    hashCode(): int
                    getAnnotationMirrors(): java.util.List<javax.lang.model.element.AnnotationMirror>
                    getAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A
                    accept<R, P>(arg0: javax.lang.model.element.ElementVisitor<R, P>, arg1: P): R
                }
            }
        }
    }
}