declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace databinding {
                            interface MetadataReader {
                                getAnnotations(arg0: java.lang.reflect.Method): java.lang.annotation.Annotation[]
                                getParameterAnnotations(arg0: java.lang.reflect.Method): java.lang.annotation.Annotation[][]
                                getAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>, arg1: java.lang.reflect.Method): A
                                getAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>, arg1: java.lang.Class<any>): A
                                getAnnotations<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<any>): java.lang.annotation.Annotation[]
                                getProperties<A extends java.lang.annotation.Annotation>(arg0: java.util.Map<java.lang.String, java.lang.Object>, arg1: java.lang.Class<any>): void
                                getProperties<A extends java.lang.annotation.Annotation>(arg0: java.util.Map<java.lang.String, java.lang.Object>, arg1: java.lang.reflect.Method): void
                                getProperties<A extends java.lang.annotation.Annotation>(arg0: java.util.Map<java.lang.String, java.lang.Object>, arg1: java.lang.reflect.Method, arg2: int): void
                            }
                        }
                    }
                }
            }
        }
    }
}