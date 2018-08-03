declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace impl {
                                abstract class TypeInfoImpl<TypeT, ClassDeclT, FieldT, MethodT> implements com.sun.xml.internal.bind.v2.model.core.TypeInfo<TypeT, ClassDeclT> , com.sun.xml.internal.bind.v2.model.annotation.Locatable {
                                    protected readonly owner: com.sun.xml.internal.bind.v2.model.impl.TypeInfoSetImpl<TypeT, ClassDeclT, FieldT, MethodT>
                                    protected builder: com.sun.xml.internal.bind.v2.model.impl.ModelBuilder<TypeT, ClassDeclT, FieldT, MethodT>
                                    protected constructor(arg0: com.sun.xml.internal.bind.v2.model.impl.ModelBuilder<TypeT, ClassDeclT, FieldT, MethodT>, arg1: com.sun.xml.internal.bind.v2.model.annotation.Locatable)
                                    public getUpstream(): com.sun.xml.internal.bind.v2.model.annotation.Locatable
                                    protected nav(): com.sun.xml.internal.bind.v2.model.nav.Navigator<TypeT, ClassDeclT, FieldT, MethodT>
                                    protected reader(): com.sun.xml.internal.bind.v2.model.annotation.AnnotationReader<TypeT, ClassDeclT, FieldT, MethodT>
                                    protected parseElementName(arg0: ClassDeclT): javax.xml.namespace.QName
                                    protected parseTypeName(arg0: ClassDeclT): javax.xml.namespace.QName
                                    protected parseTypeName(arg0: ClassDeclT, arg1: javax.xml.bind.annotation.XmlType): javax.xml.namespace.QName
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