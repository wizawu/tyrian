declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace impl {
                                class ElementPropertyInfoImpl<TypeT, ClassDeclT, FieldT, MethodT> extends com.sun.xml.internal.bind.v2.model.impl.ERPropertyInfoImpl<TypeT, ClassDeclT, FieldT, MethodT> implements com.sun.xml.internal.bind.v2.model.core.ElementPropertyInfo<TypeT, ClassDeclT> {
                                    public getTypes(): java.util.List<com.sun.xml.internal.bind.v2.model.impl.TypeRefImpl<TypeT, ClassDeclT>>
                                    protected createTypeRef(arg0: javax.xml.namespace.QName, arg1: TypeT, arg2: boolean, arg3: java.lang.String | string): com.sun.xml.internal.bind.v2.model.impl.TypeRefImpl<TypeT, ClassDeclT>
                                    public isValueList(): boolean
                                    public isRequired(): boolean
                                    public ref(): java.util.List<com.sun.xml.internal.bind.v2.model.core.TypeInfo<TypeT, ClassDeclT>>
                                    public kind(): com.sun.xml.internal.bind.v2.model.core.PropertyKind
                                    protected link(): void
                                    public ref(): java.util.Collection
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