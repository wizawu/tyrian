declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace message {
                        namespace jaxb {
                            class JAXBMessage extends com.sun.xml.internal.ws.message.AbstractMessageImpl implements com.sun.xml.internal.ws.api.message.StreamingSOAP {
                                public static create(arg0: com.sun.xml.internal.ws.spi.db.BindingContext, arg1: java.lang.Object, arg2: com.sun.xml.internal.ws.api.SOAPVersion, arg3: com.sun.xml.internal.ws.api.message.MessageHeaders, arg4: com.sun.xml.internal.ws.api.message.AttachmentSet): com.sun.xml.internal.ws.api.message.Message
                                public static create(arg0: com.sun.xml.internal.ws.spi.db.BindingContext, arg1: java.lang.Object, arg2: com.sun.xml.internal.ws.api.SOAPVersion): com.sun.xml.internal.ws.api.message.Message
                                public static create(arg0: javax.xml.bind.JAXBContext, arg1: java.lang.Object, arg2: com.sun.xml.internal.ws.api.SOAPVersion): com.sun.xml.internal.ws.api.message.Message
                                public static createRaw(arg0: javax.xml.bind.JAXBContext, arg1: java.lang.Object, arg2: com.sun.xml.internal.ws.api.SOAPVersion): com.sun.xml.internal.ws.api.message.Message
                                public static create(arg0: com.sun.xml.internal.ws.spi.db.XMLBridge, arg1: java.lang.Object, arg2: com.sun.xml.internal.ws.api.SOAPVersion): com.sun.xml.internal.ws.api.message.Message
                                public constructor(arg0: com.sun.xml.internal.ws.message.jaxb.JAXBMessage | com.sun.xml.internal.ws.message.jaxb.JAXBMessage$$Lambda)
                                public hasHeaders(): boolean
                                public getHeaders(): com.sun.xml.internal.ws.api.message.MessageHeaders
                                public getPayloadLocalPart(): string
                                public getPayloadNamespaceURI(): string
                                public hasPayload(): boolean
                                public readPayloadAsSource(): javax.xml.transform.Source
                                public readPayloadAsJAXB<T>(arg0: javax.xml.bind.Unmarshaller): T
                                public readPayload<T>(): javax.xml.stream.XMLStreamReader
                                protected writePayloadTo<T>(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler, arg2: boolean): void
                                public writePayloadTo<T>(arg0: javax.xml.stream.XMLStreamWriter): void
                                public copy<T>(): com.sun.xml.internal.ws.api.message.Message
                                public readEnvelope<T>(): javax.xml.stream.XMLStreamReader
                                public static class: java.lang.Class<any>
                            }
                            class JAXBMessage$$Lambda extends com.sun.xml.internal.ws.message.AbstractMessageImpl implements com.sun.xml.internal.ws.api.message.StreamingSOAP {
                                public static (arg0: com.sun.xml.internal.ws.spi.db.BindingContext, arg1: java.lang.Object, arg2: com.sun.xml.internal.ws.api.SOAPVersion, arg3: com.sun.xml.internal.ws.api.message.MessageHeaders, arg4: com.sun.xml.internal.ws.api.message.AttachmentSet): com.sun.xml.internal.ws.api.message.Message
                            }
                        }
                    }
                }
            }
        }
    }
}