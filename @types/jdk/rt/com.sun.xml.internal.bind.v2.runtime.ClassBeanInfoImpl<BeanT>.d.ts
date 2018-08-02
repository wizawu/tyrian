declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
class ClassBeanInfoImpl<BeanT> extends com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo<BeanT> implements com.sun.xml.internal.bind.v2.runtime.AttributeAccessor<BeanT> {
    public properties: com.sun.xml.internal.bind.v2.runtime.property.Property<BeanT>[]
    public superClazz: com.sun.xml.internal.bind.v2.runtime.ClassBeanInfoImpl<BeanT>
    protected link(arg0: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl): void
    public wrapUp(): void
    public getElementNamespaceURI(arg0: BeanT): string
    public getElementLocalName(arg0: BeanT): string
    public createInstance(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext | com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext$$Lambda): BeanT
    public reset(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext | com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext$$Lambda): boolean
    public getId(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): string
    public serializeRoot(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): void
    public serializeBody(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): void
    public serializeAttributes(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): void
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