declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace annotation {
                                interface AnnotationSource {
                                    readAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A
                                    hasAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<java.lang.annotation.Annotation>): boolean
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}