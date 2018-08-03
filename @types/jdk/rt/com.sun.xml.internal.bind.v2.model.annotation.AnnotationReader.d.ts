declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace annotation {
                                interface AnnotationReader<T, C, F, M> {
                                    setErrorHandler(arg0: com.sun.xml.internal.bind.v2.model.core.ErrorHandler | com.sun.xml.internal.bind.v2.model.core.ErrorHandler$$Lambda): void
                                    getFieldAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>, arg1: F, arg2: com.sun.xml.internal.bind.v2.model.annotation.Locatable): A
                                    hasFieldAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<java.lang.annotation.Annotation>, arg1: F): boolean
                                    hasClassAnnotation<A extends java.lang.annotation.Annotation>(arg0: C, arg1: java.lang.Class<java.lang.annotation.Annotation>): boolean
                                    getAllFieldAnnotations<A extends java.lang.annotation.Annotation>(arg0: F, arg1: com.sun.xml.internal.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation[]
                                    getMethodAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>, arg1: M, arg2: M, arg3: com.sun.xml.internal.bind.v2.model.annotation.Locatable): A
                                    hasMethodAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<java.lang.annotation.Annotation>, arg1: java.lang.String | string, arg2: M, arg3: M, arg4: com.sun.xml.internal.bind.v2.model.annotation.Locatable): boolean
                                    getAllMethodAnnotations<A extends java.lang.annotation.Annotation>(arg0: M, arg1: com.sun.xml.internal.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation[]
                                    getMethodAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>, arg1: M, arg2: com.sun.xml.internal.bind.v2.model.annotation.Locatable): A
                                    hasMethodAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<java.lang.annotation.Annotation>, arg1: M): boolean
                                    getMethodParameterAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>, arg1: M, arg2: int, arg3: com.sun.xml.internal.bind.v2.model.annotation.Locatable): A
                                    getClassAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>, arg1: C, arg2: com.sun.xml.internal.bind.v2.model.annotation.Locatable): A
                                    getPackageAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>, arg1: C, arg2: com.sun.xml.internal.bind.v2.model.annotation.Locatable): A
                                    getClassValue<A extends java.lang.annotation.Annotation>(arg0: java.lang.annotation.Annotation, arg1: java.lang.String | string): T
                                    getClassArrayValue<A extends java.lang.annotation.Annotation>(arg0: java.lang.annotation.Annotation, arg1: java.lang.String | string): T[]
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}