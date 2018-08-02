declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace annotation {
                                abstract class AbstractInlineAnnotationReaderImpl<T, C, F, M> implements com.sun.xml.internal.bind.v2.model.annotation.AnnotationReader<T, C, F, M> {
                                    public constructor()
                                    public setErrorHandler(arg0: com.sun.xml.internal.bind.v2.model.core.ErrorHandler | com.sun.xml.internal.bind.v2.model.core.ErrorHandler$$Lambda): void
                                    public getErrorHandler(): com.sun.xml.internal.bind.v2.model.core.ErrorHandler
                                    public getMethodAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>, arg1: M, arg2: M, arg3: com.sun.xml.internal.bind.v2.model.annotation.Locatable): A
                                    public hasMethodAnnotation(arg0: java.lang.Class<java.lang.annotation.Annotation>, arg1: java.lang.String | string, arg2: M, arg3: M, arg4: com.sun.xml.internal.bind.v2.model.annotation.Locatable): boolean
                                    protected fullName(arg0: M): string
                                    public static class: java.lang.Class<any>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}