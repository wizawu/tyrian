declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace model {
                        class ReflectAnnotationReader implements com.sun.xml.internal.ws.api.databinding.MetadataReader {
                            public constructor()
                            public getAnnotations(arg0: java.lang.reflect.Method): java.lang.annotation.Annotation[]
                            public getParameterAnnotations(arg0: java.lang.reflect.Method): java.lang.annotation.Annotation[][]
                            public getAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>, arg1: java.lang.reflect.Method): A
                            public getAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>, arg1: java.lang.Class<any>): A
                            public getAnnotations<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<any>): java.lang.annotation.Annotation[]
                            public getProperties<A extends java.lang.annotation.Annotation>(arg0: java.util.Map<java.lang.String, java.lang.Object>, arg1: java.lang.Class<any>): void
                            public getProperties<A extends java.lang.annotation.Annotation>(arg0: java.util.Map<java.lang.String, java.lang.Object>, arg1: java.lang.reflect.Method): void
                            public getProperties<A extends java.lang.annotation.Annotation>(arg0: java.util.Map<java.lang.String, java.lang.Object>, arg1: java.lang.reflect.Method, arg2: int): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}