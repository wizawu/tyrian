declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace impl {
                                class ArrayInfoImpl<TypeT, ClassDeclT, FieldT, MethodT> extends com.sun.xml.internal.bind.v2.model.impl.TypeInfoImpl<TypeT, ClassDeclT, FieldT, MethodT> implements com.sun.xml.internal.bind.v2.model.core.ArrayInfo<TypeT, ClassDeclT> , com.sun.xml.internal.bind.v2.runtime.Location {
                                    public constructor(arg0: com.sun.xml.internal.bind.v2.model.impl.ModelBuilder<TypeT, ClassDeclT, FieldT, MethodT>, arg1: com.sun.xml.internal.bind.v2.model.annotation.Locatable, arg2: TypeT)
                                    public getItemType(): com.sun.xml.internal.bind.v2.model.core.NonElement<TypeT, ClassDeclT>
                                    public getTypeName(): javax.xml.namespace.QName
                                    public isSimpleType(): boolean
                                    public getType(): TypeT
                                    public canBeReferencedByIDREF(): boolean
                                    public getLocation(): com.sun.xml.internal.bind.v2.runtime.Location
                                    public toString(): string
                                    public getUpstream(): com.sun.xml.internal.bind.v2.model.annotation.Locatable
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