declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace property {
interface Property<BeanT> extends com.sun.xml.internal.bind.v2.runtime.property.StructureLoaderBuilder {
    reset(arg0: BeanT): void
    serializeBody(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer, arg2: java.lang.Object): void
    serializeURIs(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): void
    hasSerializeURIAction(): boolean
    getIdValue(arg0: BeanT): string
    getKind(): com.sun.xml.internal.bind.v2.model.core.PropertyKind
    getElementPropertyAccessor(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.xml.internal.bind.v2.runtime.reflect.Accessor
    wrapUp(): void
    getInfo(): com.sun.xml.internal.bind.v2.model.runtime.RuntimePropertyInfo
    isHiddenByOverride(): boolean
    setHiddenByOverride(arg0: boolean): void
    getFieldName(): string
}

                            }
                        }
                    }
                }
            }
        }
    }
}