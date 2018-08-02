declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace encoding {
                        namespace xml {
                            class XMLMessage$UnknownContent extends com.sun.xml.internal.ws.message.AbstractMessageImpl implements com.sun.xml.internal.ws.encoding.xml.XMLMessage$MessageDataSource {
                                public constructor(arg0: java.lang.String | string, arg1: java.io.InputStream)
                                public constructor(arg0: javax.activation.DataSource)
                                public hasUnconsumedDataSource(): boolean
                                public getDataSource(): javax.activation.DataSource
                                protected writePayloadTo(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler, arg2: boolean): void
                                public hasHeaders(): boolean
                                public isFault(): boolean
                                public getHeaders(): com.sun.xml.internal.ws.api.message.MessageHeaders
                                public getPayloadLocalPart(): string
                                public getPayloadNamespaceURI(): string
                                public hasPayload(): boolean
                                public readPayloadAsSource(): javax.xml.transform.Source
                                public readPayload(): javax.xml.stream.XMLStreamReader
                                public writePayloadTo(arg0: javax.xml.stream.XMLStreamWriter): void
                                public copy(): com.sun.xml.internal.ws.api.message.Message
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}