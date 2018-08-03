declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            class LeafBeanInfoImpl<BeanT> extends com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo<BeanT> {
                                public constructor(arg0: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl, arg1: com.sun.xml.internal.bind.v2.model.runtime.RuntimeLeafInfo)
                                public getTypeName(arg0: BeanT): javax.xml.namespace.QName
                                public getElementNamespaceURI(arg0: BeanT): string
                                public getElementLocalName(arg0: BeanT): string
                                public createInstance(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext): BeanT
                                public reset(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext): boolean
                                public getId(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): string
                                public serializeBody(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): void
                                public serializeAttributes(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): void
                                public serializeRoot(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): void
                                public serializeURIs(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): void
                                public getLoader(arg0: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl, arg1: boolean): com.sun.xml.internal.bind.v2.runtime.unmarshaller.Loader
                                public getTransducer(): com.sun.xml.internal.bind.v2.runtime.Transducer<BeanT>
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}