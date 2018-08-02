declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace impl {
                                class EnumLeafInfoImpl<T, C, F, M> extends com.sun.xml.internal.bind.v2.model.impl.TypeInfoImpl<T, C, F, M> implements com.sun.xml.internal.bind.v2.model.core.EnumLeafInfo<T, C> , com.sun.xml.internal.bind.v2.model.core.Element<T, C> , java.lang.Iterable<com.sun.xml.internal.bind.v2.model.impl.EnumConstantImpl<T, C, F, M>> {
                                    protected tokenStringType: boolean
                                    public constructor(arg0: com.sun.xml.internal.bind.v2.model.impl.ModelBuilder<T, C, F, M>, arg1: com.sun.xml.internal.bind.v2.model.annotation.Locatable, arg2: C, arg3: T)
                                    protected calcConstants(): void
                                    protected createEnumConstant(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: F, arg3: com.sun.xml.internal.bind.v2.model.impl.EnumConstantImpl<T, C, F, M>): com.sun.xml.internal.bind.v2.model.impl.EnumConstantImpl<T, C, F, M>
                                    public getType(): T
                                    public isToken(): boolean
                                    public canBeReferencedByIDREF(): boolean
                                    public getTypeName(): javax.xml.namespace.QName
                                    public getClazz(): C
                                    public getBaseType(): com.sun.xml.internal.bind.v2.model.core.NonElement<T, C>
                                    public isSimpleType(): boolean
                                    public getLocation(): com.sun.xml.internal.bind.v2.runtime.Location
                                    public getConstants(): java.lang.Iterable<com.sun.xml.internal.bind.v2.model.impl.EnumConstantImpl<T, C, F, M>>
                                    public link(): void
                                    public getSubstitutionHead(): com.sun.xml.internal.bind.v2.model.core.Element<T, C>
                                    public getElementName(): javax.xml.namespace.QName
                                    public isElement(): boolean
                                    public asElement(): com.sun.xml.internal.bind.v2.model.core.Element<T, C>
                                    public getScope(): com.sun.xml.internal.bind.v2.model.core.ClassInfo<T, C>
                                    public iterator(): java.util.Iterator<com.sun.xml.internal.bind.v2.model.impl.EnumConstantImpl<T, C, F, M>>
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