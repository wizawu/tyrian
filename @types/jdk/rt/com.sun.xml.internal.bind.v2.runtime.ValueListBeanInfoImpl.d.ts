declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            class ValueListBeanInfoImpl extends com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo {
                                public constructor(arg0: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl, arg1: java.lang.Class)
                                public serializeBody(arg0: java.lang.Object, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): void
                                public serializeURIs(arg0: java.lang.Object, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): void
                                public getElementNamespaceURI(arg0: java.lang.Object): string
                                public getElementLocalName(arg0: java.lang.Object): string
                                public createInstance(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext | com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext$$Lambda): java.lang.Object
                                public reset(arg0: java.lang.Object, arg1: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext | com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext$$Lambda): boolean
                                public getId(arg0: java.lang.Object, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): string
                                public serializeAttributes(arg0: java.lang.Object, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): void
                                public serializeRoot(arg0: java.lang.Object, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): void
                                public getTransducer(): com.sun.xml.internal.bind.v2.runtime.Transducer
                                public getLoader(arg0: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl, arg1: boolean): com.sun.xml.internal.bind.v2.runtime.unmarshaller.Loader
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}