declare namespace javax {
    namespace lang {
        namespace model {
interface AnnotatedConstruct {
    getAnnotationMirrors(): java.util.List<javax.lang.model.element.AnnotationMirror>
    getAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A
    getAnnotationsByType<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A[]
}

        }
    }
}