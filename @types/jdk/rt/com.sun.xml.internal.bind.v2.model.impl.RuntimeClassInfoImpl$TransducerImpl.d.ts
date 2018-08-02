declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace impl {
                                class RuntimeClassInfoImpl$TransducerImpl<BeanT> implements com.sun.xml.internal.bind.v2.runtime.Transducer<BeanT> {
                                    public constructor(arg0: java.lang.Class<BeanT>, arg1: com.sun.xml.internal.bind.v2.runtime.reflect.TransducedAccessor<BeanT>)
                                    public useNamespace(): boolean
                                    public isDefault(): boolean
                                    public declareNamespace(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): void
                                    public print(arg0: BeanT): java.lang.CharSequence
                                    public parse(arg0: java.lang.CharSequence): BeanT
                                    public writeText(arg0: com.sun.xml.internal.bind.v2.runtime.XMLSerializer, arg1: BeanT, arg2: java.lang.String | string): void
                                    public writeLeafElement(arg0: com.sun.xml.internal.bind.v2.runtime.XMLSerializer, arg1: com.sun.xml.internal.bind.v2.runtime.Name, arg2: BeanT, arg3: java.lang.String | string): void
                                    public getTypeName(arg0: BeanT): javax.xml.namespace.QName
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