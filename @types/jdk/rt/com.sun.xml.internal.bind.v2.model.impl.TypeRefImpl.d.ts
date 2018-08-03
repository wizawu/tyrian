declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace impl {
                                class TypeRefImpl<TypeT, ClassDeclT> implements com.sun.xml.internal.bind.v2.model.core.TypeRef<TypeT, ClassDeclT> {
                                    protected readonly owner: com.sun.xml.internal.bind.v2.model.impl.ElementPropertyInfoImpl<TypeT, ClassDeclT, any, any>
                                    public constructor(arg0: com.sun.xml.internal.bind.v2.model.impl.ElementPropertyInfoImpl<TypeT, ClassDeclT, any, any>, arg1: javax.xml.namespace.QName, arg2: TypeT, arg3: boolean, arg4: java.lang.String | string)
                                    public getTarget(): com.sun.xml.internal.bind.v2.model.core.NonElement<TypeT, ClassDeclT>
                                    public getTagName(): javax.xml.namespace.QName
                                    public isNillable(): boolean
                                    public getDefaultValue(): string
                                    protected link(): void
                                    public getSource(): com.sun.xml.internal.bind.v2.model.core.PropertyInfo<TypeT, ClassDeclT>
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