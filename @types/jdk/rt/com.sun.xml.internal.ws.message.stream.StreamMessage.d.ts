declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace message {
                        namespace stream {
                            class StreamMessage extends com.sun.xml.internal.ws.message.AbstractMessageImpl implements com.sun.xml.internal.ws.api.message.StreamingSOAP {
                                public constructor(arg0: com.sun.xml.internal.ws.api.SOAPVersion)
                                public constructor(arg0: com.sun.xml.internal.ws.api.SOAPVersion, arg1: javax.xml.stream.XMLStreamReader, arg2: com.sun.xml.internal.ws.api.message.AttachmentSet)
                                public readEnvelope(): javax.xml.stream.XMLStreamReader
                                public constructor(arg0: com.sun.xml.internal.ws.api.message.MessageHeaders, arg1: com.sun.xml.internal.ws.api.message.AttachmentSet, arg2: javax.xml.stream.XMLStreamReader, arg3: com.sun.xml.internal.ws.api.SOAPVersion)
                                public constructor(arg0: com.sun.xml.internal.ws.encoding.TagInfoset, arg1: com.sun.xml.internal.ws.encoding.TagInfoset, arg2: com.sun.xml.internal.ws.api.message.AttachmentSet, arg3: com.sun.xml.internal.ws.api.message.MessageHeaders, arg4: com.sun.xml.internal.ws.encoding.TagInfoset, arg5: javax.xml.stream.XMLStreamReader, arg6: com.sun.xml.internal.ws.api.SOAPVersion)
                                public constructor(arg0: com.sun.xml.internal.ws.encoding.TagInfoset, arg1: com.sun.xml.internal.ws.encoding.TagInfoset, arg2: com.sun.xml.internal.ws.api.message.AttachmentSet, arg3: com.sun.xml.internal.ws.api.message.MessageHeaders, arg4: java.lang.String | string, arg5: com.sun.xml.internal.ws.encoding.TagInfoset, arg6: java.lang.String | string, arg7: javax.xml.stream.XMLStreamReader, arg8: com.sun.xml.internal.ws.api.SOAPVersion)
                                public hasHeaders(): boolean
                                public getHeaders(): com.sun.xml.internal.ws.api.message.MessageHeaders
                                public getPayloadLocalPart(): string
                                public getPayloadNamespaceURI(): string
                                public hasPayload(): boolean
                                public readPayloadAsSource(): javax.xml.transform.Source
                                public readPayloadAsJAXB(arg0: javax.xml.bind.Unmarshaller): java.lang.Object
                                public readPayloadAsJAXB<T>(arg0: com.sun.xml.internal.bind.api.Bridge<T>): T
                                public readPayloadAsJAXB<T>(arg0: com.sun.xml.internal.ws.spi.db.XMLBridge<T>): T
                                public consume<T>(): void
                                public readPayload<T>(): javax.xml.stream.XMLStreamReader
                                public writePayloadTo<T>(arg0: javax.xml.stream.XMLStreamWriter): void
                                public writeTo<T>(arg0: javax.xml.stream.XMLStreamWriter): void
                                public writePayloadTo<T>(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler, arg2: boolean): void
                                public copy<T>(): com.sun.xml.internal.ws.api.message.Message
                                public writeTo<T>(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler): void
                                public getBodyPrologue<T>(): string
                                public getBodyEpilogue<T>(): string
                                public getReader<T>(): javax.xml.stream.XMLStreamReader
                                public static class: java.lang.Class<any>
                            }
                            class StreamMessage$$Lambda extends com.sun.xml.internal.ws.message.AbstractMessageImpl implements com.sun.xml.internal.ws.api.message.StreamingSOAP {
                                public constructor(arg0: com.sun.xml.internal.ws.api.SOAPVersion)
                            }
                        }
                    }
                }
            }
        }
    }
}