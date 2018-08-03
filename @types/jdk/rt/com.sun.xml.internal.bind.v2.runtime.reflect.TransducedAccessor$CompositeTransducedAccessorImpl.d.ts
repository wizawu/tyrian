declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace reflect {
                                class TransducedAccessor$CompositeTransducedAccessorImpl<BeanT, ValueT> extends com.sun.xml.internal.bind.v2.runtime.reflect.TransducedAccessor<BeanT> {
                                    protected xducer: com.sun.xml.internal.bind.v2.runtime.Transducer<ValueT>
                                    protected acc: com.sun.xml.internal.bind.v2.runtime.reflect.Accessor<BeanT, ValueT>
                                    public constructor(arg0: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl, arg1: com.sun.xml.internal.bind.v2.runtime.Transducer<ValueT>, arg2: com.sun.xml.internal.bind.v2.runtime.reflect.Accessor<BeanT, ValueT>)
                                    public print(arg0: BeanT): java.lang.CharSequence
                                    public parse(arg0: BeanT, arg1: java.lang.CharSequence): void
                                    public hasValue(arg0: BeanT): boolean
                                    public writeLeafElement(arg0: com.sun.xml.internal.bind.v2.runtime.XMLSerializer, arg1: com.sun.xml.internal.bind.v2.runtime.Name, arg2: BeanT, arg3: java.lang.String | string): void
                                    public writeText(arg0: com.sun.xml.internal.bind.v2.runtime.XMLSerializer, arg1: BeanT, arg2: java.lang.String | string): void
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