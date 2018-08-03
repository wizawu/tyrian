declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace message {
                            namespace saaj {
                                class SaajStaxWriter implements javax.xml.stream.XMLStreamWriter {
                                    protected soap: javax.xml.soap.SOAPMessage
                                    protected envURI: string
                                    protected currentElement: javax.xml.soap.SOAPElement
                                    protected deferredElement: com.sun.xml.internal.ws.api.message.saaj.SaajStaxWriter$DeferredElement
                                    protected static readonly Envelope: string
                                    protected static readonly Header: string
                                    protected static readonly Body: string
                                    protected static readonly xmlns: string
                                    public constructor(arg0: javax.xml.soap.SOAPMessage)
                                    public getSOAPMessage(): javax.xml.soap.SOAPMessage
                                    public writeStartElement(arg0: java.lang.String | string): void
                                    public writeStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public writeStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public writeEmptyElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public writeEmptyElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public writeEmptyElement(arg0: java.lang.String | string): void
                                    public writeEndElement(): void
                                    public writeEndDocument(): void
                                    public close(): void
                                    public flush(): void
                                    public writeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public writeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                                    public writeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public writeNamespace(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public writeDefaultNamespace(arg0: java.lang.String | string): void
                                    public writeComment(arg0: java.lang.String | string): void
                                    public writeProcessingInstruction(arg0: java.lang.String | string): void
                                    public writeProcessingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public writeCData(arg0: java.lang.String | string): void
                                    public writeDTD(arg0: java.lang.String | string): void
                                    public writeEntityRef(arg0: java.lang.String | string): void
                                    public writeStartDocument(): void
                                    public writeStartDocument(arg0: java.lang.String | string): void
                                    public writeStartDocument(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public writeCharacters(arg0: java.lang.String | string): void
                                    public writeCharacters(arg0: char[], arg1: int, arg2: int): void
                                    public getPrefix(arg0: java.lang.String | string): string
                                    public setPrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public setDefaultNamespace(arg0: java.lang.String | string): void
                                    public setNamespaceContext(arg0: javax.xml.namespace.NamespaceContext): void
                                    public getProperty(arg0: java.lang.String | string): java.lang.Object
                                    public getNamespaceContext(): javax.xml.namespace.NamespaceContext
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