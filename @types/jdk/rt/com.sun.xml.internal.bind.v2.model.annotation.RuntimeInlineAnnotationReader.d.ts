declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace annotation {
                                class RuntimeInlineAnnotationReader extends com.sun.xml.internal.bind.v2.model.annotation.AbstractInlineAnnotationReaderImpl<java.lang.reflect.Type, java.lang.Class, java.lang.reflect.Field, java.lang.reflect.Method> implements com.sun.xml.internal.bind.v2.model.annotation.RuntimeAnnotationReader {
                                    public constructor()
                                    public getFieldAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>, arg1: java.lang.reflect.Field, arg2: com.sun.xml.internal.bind.v2.model.annotation.Locatable): A
                                    public hasFieldAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<java.lang.annotation.Annotation>, arg1: java.lang.reflect.Field): boolean
                                    public hasClassAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class, arg1: java.lang.Class<java.lang.annotation.Annotation>): boolean
                                    public getAllFieldAnnotations<A extends java.lang.annotation.Annotation>(arg0: java.lang.reflect.Field, arg1: com.sun.xml.internal.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation[]
                                    public getMethodAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>, arg1: java.lang.reflect.Method, arg2: com.sun.xml.internal.bind.v2.model.annotation.Locatable): A
                                    public hasMethodAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<java.lang.annotation.Annotation>, arg1: java.lang.reflect.Method): boolean
                                    public getAllMethodAnnotations<A extends java.lang.annotation.Annotation>(arg0: java.lang.reflect.Method, arg1: com.sun.xml.internal.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation[]
                                    public getMethodParameterAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>, arg1: java.lang.reflect.Method, arg2: int, arg3: com.sun.xml.internal.bind.v2.model.annotation.Locatable): A
                                    public getClassAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>, arg1: java.lang.Class, arg2: com.sun.xml.internal.bind.v2.model.annotation.Locatable): A
                                    public getPackageAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>, arg1: java.lang.Class, arg2: com.sun.xml.internal.bind.v2.model.annotation.Locatable): A
                                    public getClassValue<A extends java.lang.annotation.Annotation>(arg0: java.lang.annotation.Annotation, arg1: java.lang.String | string): java.lang.Class
                                    public getClassArrayValue<A extends java.lang.annotation.Annotation>(arg0: java.lang.annotation.Annotation, arg1: java.lang.String | string): java.lang.Class[]
                                    protected fullName<A extends java.lang.annotation.Annotation>(arg0: java.lang.reflect.Method): string
                                    protected fullName<A extends java.lang.annotation.Annotation>(arg0: java.lang.Object): string
                                    public getClassArrayValue<A extends java.lang.annotation.Annotation>(arg0: java.lang.annotation.Annotation, arg1: java.lang.String | string): java.lang.Object[]
                                    public getClassValue<A extends java.lang.annotation.Annotation>(arg0: java.lang.annotation.Annotation, arg1: java.lang.String | string): java.lang.Object
                                    public getPackageAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class, arg1: java.lang.Object, arg2: com.sun.xml.internal.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation
                                    public getClassAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class, arg1: java.lang.Object, arg2: com.sun.xml.internal.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation
                                    public getMethodParameterAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class, arg1: java.lang.Object, arg2: int, arg3: com.sun.xml.internal.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation
                                    public hasMethodAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class, arg1: java.lang.Object): boolean
                                    public getMethodAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class, arg1: java.lang.Object, arg2: com.sun.xml.internal.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation
                                    public getAllMethodAnnotations<A extends java.lang.annotation.Annotation>(arg0: java.lang.Object, arg1: com.sun.xml.internal.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation[]
                                    public getAllFieldAnnotations<A extends java.lang.annotation.Annotation>(arg0: java.lang.Object, arg1: com.sun.xml.internal.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation[]
                                    public hasClassAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Object, arg1: java.lang.Class): boolean
                                    public hasFieldAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class, arg1: java.lang.Object): boolean
                                    public getFieldAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class, arg1: java.lang.Object, arg2: com.sun.xml.internal.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation
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