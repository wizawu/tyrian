declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace property {
                                abstract class PropertyImpl<BeanT> implements com.sun.xml.internal.bind.v2.runtime.property.Property<BeanT> {
                                    protected fieldName: string
                                    public constructor(arg0: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl, arg1: com.sun.xml.internal.bind.v2.model.runtime.RuntimePropertyInfo)
                                    public getInfo(): com.sun.xml.internal.bind.v2.model.runtime.RuntimePropertyInfo
                                    public serializeBody(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer, arg2: java.lang.Object): void
                                    public serializeURIs(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): void
                                    public hasSerializeURIAction(): boolean
                                    public getElementPropertyAccessor(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.xml.internal.bind.v2.runtime.reflect.Accessor
                                    public wrapUp(): void
                                    public isHiddenByOverride(): boolean
                                    public setHiddenByOverride(arg0: boolean): void
                                    public getFieldName(): string
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