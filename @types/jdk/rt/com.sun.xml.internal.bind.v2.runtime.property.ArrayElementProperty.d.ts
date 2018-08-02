declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace property {
abstract class ArrayElementProperty<BeanT, ListT, ItemT> extends com.sun.xml.internal.bind.v2.runtime.property.ArrayERProperty<BeanT, ListT, ItemT> {
    protected prop: com.sun.xml.internal.bind.v2.model.runtime.RuntimeElementPropertyInfo
    protected constructor(arg0: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl, arg1: com.sun.xml.internal.bind.v2.model.runtime.RuntimeElementPropertyInfo)
    public wrapUp(): void
    protected serializeListBody(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer, arg2: ListT): void
    protected serializeItem(arg0: com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo, arg1: ItemT, arg2: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): void
    public createBodyUnmarshaller(arg0: com.sun.xml.internal.bind.v2.runtime.property.UnmarshallerChain, arg1: com.sun.xml.internal.bind.v2.util.QNameMap<com.sun.xml.internal.bind.v2.runtime.unmarshaller.ChildLoader>): void
    public getKind(): com.sun.xml.internal.bind.v2.model.core.PropertyKind
    public getElementPropertyAccessor(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.xml.internal.bind.v2.runtime.reflect.Accessor
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