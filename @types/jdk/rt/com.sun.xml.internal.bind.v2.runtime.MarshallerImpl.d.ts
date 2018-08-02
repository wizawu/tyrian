declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            class MarshallerImpl extends javax.xml.bind.helpers.AbstractMarshallerImpl implements javax.xml.bind.ValidationEventHandler {
                                protected serializer: com.sun.xml.internal.bind.v2.runtime.XMLSerializer
                                protected static INDENT_STRING: string
                                protected static PREFIX_MAPPER: string
                                protected static ENCODING_HANDLER: string
                                protected static ENCODING_HANDLER2: string
                                protected static XMLDECLARATION: string
                                protected static XML_HEADERS: string
                                protected static C14N: string
                                protected static OBJECT_IDENTITY_CYCLE_DETECTION: string
                                public constructor(arg0: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl, arg1: com.sun.xml.internal.bind.v2.runtime.AssociationMap)
                                public getContext(): com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl
                                public marshal(arg0: java.lang.Object, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: javax.xml.namespace.NamespaceContext): void
                                public marshal(arg0: java.lang.Object, arg1: javax.xml.stream.XMLStreamWriter): void
                                public marshal(arg0: java.lang.Object, arg1: javax.xml.stream.XMLEventWriter): void
                                public marshal(arg0: java.lang.Object, arg1: com.sun.xml.internal.bind.v2.runtime.output.XmlOutput): void
                                public marshal(arg0: java.lang.Object, arg1: javax.xml.transform.Result): void
                                protected write<T>(arg0: com.sun.xml.internal.bind.v2.runtime.Name, arg1: com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo<T>, arg2: T, arg3: com.sun.xml.internal.bind.v2.runtime.output.XmlOutput, arg4: java.lang.Runnable | java.lang.Runnable$$Lambda): void
                                protected createEscapeHandler(arg0: java.lang.String | string): com.sun.xml.internal.bind.marshaller.CharacterEscapeHandler
                                public createWriter(arg0: java.io.Writer | java.io.Writer$$Lambda, arg1: java.lang.String | string): com.sun.xml.internal.bind.v2.runtime.output.XmlOutput
                                public createWriter(arg0: java.io.Writer | java.io.Writer$$Lambda): com.sun.xml.internal.bind.v2.runtime.output.XmlOutput
                                public createWriter(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): com.sun.xml.internal.bind.v2.runtime.output.XmlOutput
                                public createWriter(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.lang.String | string): com.sun.xml.internal.bind.v2.runtime.output.XmlOutput
                                public getProperty(arg0: java.lang.String | string): java.lang.Object
                                public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                public setAdapter<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: java.lang.Class<A>, arg1: A): void
                                public getAdapter<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: java.lang.Class<A>): A
                                public setAttachmentMarshaller<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: javax.xml.bind.attachment.AttachmentMarshaller): void
                                public getAttachmentMarshaller<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(): javax.xml.bind.attachment.AttachmentMarshaller
                                public getSchema<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(): javax.xml.validation.Schema
                                public setSchema<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: javax.xml.validation.Schema): void
                                public handleEvent<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: javax.xml.bind.ValidationEvent): boolean
                                public getListener<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(): javax.xml.bind.Marshaller$Listener
                                public setListener<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: javax.xml.bind.Marshaller$Listener): void
                                public static class: java.lang.Class<any>
                            }
                            class MarshallerImpl$$Lambda extends javax.xml.bind.helpers.AbstractMarshallerImpl implements javax.xml.bind.ValidationEventHandler {
                                protected serializer: com.sun.xml.internal.bind.v2.runtime.XMLSerializer
                            }
                        }
                    }
                }
            }
        }
    }
}