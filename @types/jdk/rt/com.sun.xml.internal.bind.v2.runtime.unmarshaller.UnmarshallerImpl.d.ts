declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace unmarshaller {
                                class UnmarshallerImpl extends javax.xml.bind.helpers.AbstractUnmarshallerImpl implements javax.xml.bind.ValidationEventHandler , java.io.Closeable {
                                    protected readonly context: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl
                                    public readonly coordinator: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext
                                    public static readonly FACTORY: string
                                    public constructor(arg0: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl, arg1: com.sun.xml.internal.bind.v2.runtime.AssociationMap)
                                    public getUnmarshallerHandler(): javax.xml.bind.UnmarshallerHandler
                                    protected getXMLReader(): org.xml.sax.XMLReader
                                    public createUnmarshallerHandler(arg0: com.sun.xml.internal.bind.unmarshaller.InfosetScanner, arg1: boolean, arg2: com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo): com.sun.xml.internal.bind.v2.runtime.unmarshaller.XmlVisitor
                                    public static needsInterning(arg0: org.xml.sax.XMLReader): boolean
                                    protected unmarshal(arg0: org.xml.sax.XMLReader, arg1: org.xml.sax.InputSource): java.lang.Object
                                    protected unmarshal<T>(arg0: org.xml.sax.XMLReader, arg1: org.xml.sax.InputSource, arg2: java.lang.Class<T>): javax.xml.bind.JAXBElement<T>
                                    public unmarshal<T>(arg0: javax.xml.transform.Source, arg1: java.lang.Class<T>): javax.xml.bind.JAXBElement<T>
                                    public unmarshal0<T>(arg0: javax.xml.transform.Source, arg1: com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo): java.lang.Object
                                    public getEventHandler<T>(): javax.xml.bind.ValidationEventHandler
                                    public hasEventHandler<T>(): boolean
                                    public unmarshal<T>(arg0: org.w3c.dom.Node, arg1: java.lang.Class<T>): javax.xml.bind.JAXBElement<T>
                                    public unmarshal<T>(arg0: org.w3c.dom.Node): java.lang.Object
                                    public unmarshal<T>(arg0: javax.xml.transform.sax.SAXSource): java.lang.Object
                                    public unmarshal0<T>(arg0: org.w3c.dom.Node, arg1: com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo): java.lang.Object
                                    public unmarshal<T>(arg0: javax.xml.stream.XMLStreamReader): java.lang.Object
                                    public unmarshal<T>(arg0: javax.xml.stream.XMLStreamReader, arg1: java.lang.Class<T>): javax.xml.bind.JAXBElement<T>
                                    public unmarshal0<T>(arg0: javax.xml.stream.XMLStreamReader, arg1: com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo): java.lang.Object
                                    public unmarshal<T>(arg0: javax.xml.stream.XMLEventReader, arg1: java.lang.Class<T>): javax.xml.bind.JAXBElement<T>
                                    public unmarshal<T>(arg0: javax.xml.stream.XMLEventReader): java.lang.Object
                                    public unmarshal0<T>(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo): java.lang.Object
                                    public getProperty<T>(arg0: java.lang.String | string): java.lang.Object
                                    public setProperty<T>(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                    public setSchema<T>(arg0: javax.xml.validation.Schema): void
                                    public getSchema<T>(): javax.xml.validation.Schema
                                    public getAttachmentUnmarshaller<T>(): javax.xml.bind.attachment.AttachmentUnmarshaller
                                    public setAttachmentUnmarshaller<T>(arg0: javax.xml.bind.attachment.AttachmentUnmarshaller): void
                                    public isValidating<T>(): boolean
                                    public setValidating<T>(arg0: boolean): void
                                    public setAdapter<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: java.lang.Class<A>, arg1: A): void
                                    public getAdapter<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: java.lang.Class<A>): A
                                    public createUnmarshalException<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: org.xml.sax.SAXException): javax.xml.bind.UnmarshalException
                                    public handleEvent<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: javax.xml.bind.ValidationEvent): boolean
                                    public getBeanInfo<T>(arg0: java.lang.Class<T>): com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo<T>
                                    public getListener<T>(): javax.xml.bind.Unmarshaller$Listener
                                    public setListener<T>(arg0: javax.xml.bind.Unmarshaller$Listener): void
                                    public getContext<T>(): com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext
                                    protected finalize<T>(): void
                                    public close<T>(): void
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