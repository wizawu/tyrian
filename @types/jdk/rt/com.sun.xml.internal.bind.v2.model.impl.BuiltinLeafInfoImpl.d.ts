declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace impl {
                                class BuiltinLeafInfoImpl<TypeT, ClassDeclT> extends com.sun.xml.internal.bind.v2.model.impl.LeafInfoImpl<TypeT, ClassDeclT> implements com.sun.xml.internal.bind.v2.model.core.BuiltinLeafInfo<TypeT, ClassDeclT> {
                                    protected constructor(arg0: TypeT, ...arg1: javax.xml.namespace.QName[])
                                    public getTypeNames(): javax.xml.namespace.QName[]
                                    public isElement(): boolean
                                    public getElementName(): javax.xml.namespace.QName
                                    public asElement(): com.sun.xml.internal.bind.v2.model.core.Element<TypeT, ClassDeclT>
                                    public static createLeaves<TypeT, ClassDeclT>(arg0: com.sun.xml.internal.bind.v2.model.nav.Navigator<TypeT, ClassDeclT, any, any>): java.util.Map<TypeT, com.sun.xml.internal.bind.v2.model.impl.BuiltinLeafInfoImpl<TypeT, ClassDeclT>>
                                    public toString<TypeT, ClassDeclT>(): string
                                    public isSimpleType<TypeT, ClassDeclT>(): boolean
                                    public getLocation<TypeT, ClassDeclT>(): com.sun.xml.internal.bind.v2.runtime.Location
                                    public getUpstream<TypeT, ClassDeclT>(): com.sun.xml.internal.bind.v2.model.annotation.Locatable
                                    public getTypeName<TypeT, ClassDeclT>(): javax.xml.namespace.QName
                                    public getType<TypeT, ClassDeclT>(): java.lang.Object
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