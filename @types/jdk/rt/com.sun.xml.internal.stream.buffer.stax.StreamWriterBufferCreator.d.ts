declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace buffer {
                        namespace stax {
                            class StreamWriterBufferCreator extends com.sun.xml.internal.stream.buffer.stax.StreamBufferCreator implements com.sun.xml.internal.org.jvnet.staxex.XMLStreamWriterEx {
                                public constructor()
                                public constructor(arg0: com.sun.xml.internal.stream.buffer.MutableXMLStreamBuffer)
                                public getProperty(arg0: java.lang.String | string): java.lang.Object
                                public close(): void
                                public flush(): void
                                public getNamespaceContext(): com.sun.xml.internal.org.jvnet.staxex.NamespaceContextEx
                                public setNamespaceContext(arg0: javax.xml.namespace.NamespaceContext): void
                                public setDefaultNamespace(arg0: java.lang.String | string): void
                                public setPrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public getPrefix(arg0: java.lang.String | string): string
                                public writeStartDocument(): void
                                public writeStartDocument(arg0: java.lang.String | string): void
                                public writeStartDocument(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public writeEndDocument(): void
                                public writeStartElement(arg0: java.lang.String | string): void
                                public writeStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public writeStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public writeEmptyElement(arg0: java.lang.String | string): void
                                public writeEmptyElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public writeEmptyElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public writeEndElement(): void
                                public writeDefaultNamespace(arg0: java.lang.String | string): void
                                public writeNamespace(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public writeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public writeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public writeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                                public writeCData(arg0: java.lang.String | string): void
                                public writeCharacters(arg0: java.lang.String | string): void
                                public writeCharacters(arg0: char[], arg1: int, arg2: int): void
                                public writeComment(arg0: java.lang.String | string): void
                                public writeDTD(arg0: java.lang.String | string): void
                                public writeEntityRef(arg0: java.lang.String | string): void
                                public writeProcessingInstruction(arg0: java.lang.String | string): void
                                public writeProcessingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public writePCDATA(arg0: java.lang.CharSequence): void
                                public writeBinary(arg0: byte[], arg1: int, arg2: int, arg3: java.lang.String | string): void
                                public writeBinary(arg0: javax.activation.DataHandler): void
                                public writeBinary(arg0: java.lang.String | string): java.io.OutputStream
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