declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace core {
                                class Ref<T, C> {
                                    public readonly type: T
                                    public readonly adapter: com.sun.xml.internal.bind.v2.model.core.Adapter<T, C>
                                    public readonly valueList: boolean
                                    public constructor(arg0: T)
                                    public constructor(arg0: T, arg1: com.sun.xml.internal.bind.v2.model.core.Adapter<T, C>, arg2: boolean)
                                    public constructor(arg0: com.sun.xml.internal.bind.v2.model.impl.ModelBuilderI<T, C, any, any>, arg1: T, arg2: javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter, arg3: javax.xml.bind.annotation.XmlList)
                                    public constructor(arg0: com.sun.xml.internal.bind.v2.model.annotation.AnnotationReader<T, C, any, any>, arg1: com.sun.xml.internal.bind.v2.model.nav.Navigator<T, C, any, any>, arg2: T, arg3: javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter, arg4: javax.xml.bind.annotation.XmlList)
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