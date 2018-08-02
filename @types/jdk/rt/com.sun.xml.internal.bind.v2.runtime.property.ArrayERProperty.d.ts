declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace property {
                                abstract class ArrayERProperty<BeanT, ListT, ItemT> extends com.sun.xml.internal.bind.v2.runtime.property.ArrayProperty<BeanT, ListT, ItemT> {
                                    protected wrapperTagName: com.sun.xml.internal.bind.v2.runtime.Name
                                    protected isWrapperNillable: boolean
                                    protected constructor(arg0: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl, arg1: com.sun.xml.internal.bind.v2.model.runtime.RuntimePropertyInfo, arg2: javax.xml.namespace.QName, arg3: boolean)
                                    public serializeBody(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer, arg2: java.lang.Object): void
                                    protected serializeListBody(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer, arg2: ListT): void
                                    protected createBodyUnmarshaller(arg0: com.sun.xml.internal.bind.v2.runtime.property.UnmarshallerChain, arg1: com.sun.xml.internal.bind.v2.util.QNameMap<com.sun.xml.internal.bind.v2.runtime.unmarshaller.ChildLoader>): void
                                    public buildChildElementUnmarshallers(arg0: com.sun.xml.internal.bind.v2.runtime.property.UnmarshallerChain, arg1: com.sun.xml.internal.bind.v2.util.QNameMap<com.sun.xml.internal.bind.v2.runtime.unmarshaller.ChildLoader>): void
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