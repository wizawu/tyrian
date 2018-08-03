declare namespace java {
    namespace lang {
        namespace reflect {
            interface AnnotatedElement {
                isAnnotationPresent(arg0: java.lang.Class<java.lang.annotation.Annotation>): boolean
                getAnnotation<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T
                getAnnotations<T extends java.lang.annotation.Annotation>(): java.lang.annotation.Annotation[]
                getAnnotationsByType<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T[]
                getDeclaredAnnotation<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T
                getDeclaredAnnotationsByType<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T[]
                getDeclaredAnnotations<T extends java.lang.annotation.Annotation>(): java.lang.annotation.Annotation[]
            }
        }
    }
}