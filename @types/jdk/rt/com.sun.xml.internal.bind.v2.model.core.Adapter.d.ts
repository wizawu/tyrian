declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace core {
                                class Adapter<TypeT, ClassDeclT> {
                                    public readonly adapterType: ClassDeclT
                                    public readonly defaultType: TypeT
                                    public readonly customType: TypeT
                                    public constructor(arg0: javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter, arg1: com.sun.xml.internal.bind.v2.model.annotation.AnnotationReader<TypeT, ClassDeclT, any, any>, arg2: com.sun.xml.internal.bind.v2.model.nav.Navigator<TypeT, ClassDeclT, any, any>)
                                    public constructor(arg0: ClassDeclT, arg1: com.sun.xml.internal.bind.v2.model.nav.Navigator<TypeT, ClassDeclT, any, any>)
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