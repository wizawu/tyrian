declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace writers {
                        class XMLStreamWriterImpl extends java.util.AbstractMap implements javax.xml.stream.XMLStreamWriter {
                            public static START_COMMENT: string
                            public static END_COMMENT: string
                            public static DEFAULT_ENCODING: string
                            public static DEFAULT_XMLDECL: string
                            public static DEFAULT_XML_VERSION: string
                            public static CLOSE_START_TAG: char
                            public static OPEN_START_TAG: char
                            public static OPEN_END_TAG: string
                            public static CLOSE_END_TAG: char
                            public static START_CDATA: string
                            public static END_CDATA: string
                            public static CLOSE_EMPTY_ELEMENT: string
                            public static SPACE: string
                            public static UTF_8: string
                            public static OUTPUTSTREAM_PROPERTY: string
                            public constructor(arg0: java.io.OutputStream, arg1: com.sun.org.apache.xerces.internal.impl.PropertyManager)
                            public constructor(arg0: java.io.OutputStream, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.impl.PropertyManager)
                            public constructor(arg0: java.io.Writer, arg1: com.sun.org.apache.xerces.internal.impl.PropertyManager)
                            public constructor(arg0: javax.xml.transform.stream.StreamResult, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.impl.PropertyManager)
                            public reset(): void
                            public setOutput(arg0: javax.xml.transform.stream.StreamResult, arg1: java.lang.String | string): void
                            public canReuse(): boolean
                            public setEscapeCharacters(arg0: boolean): void
                            public getEscapeCharacters(): boolean
                            public close(): void
                            public flush(): void
                            public getNamespaceContext(): javax.xml.namespace.NamespaceContext
                            public getPrefix(arg0: java.lang.String | string): string
                            public getProperty(arg0: java.lang.String | string): java.lang.Object
                            public setDefaultNamespace(arg0: java.lang.String | string): void
                            public setNamespaceContext(arg0: javax.xml.namespace.NamespaceContext): void
                            public setPrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public writeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public writeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public writeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                            public writeCData(arg0: java.lang.String | string): void
                            public writeCharacters(arg0: java.lang.String | string): void
                            public writeCharacters(arg0: char[], arg1: int, arg2: int): void
                            public writeComment(arg0: java.lang.String | string): void
                            public writeDTD(arg0: java.lang.String | string): void
                            public writeDefaultNamespace(arg0: java.lang.String | string): void
                            public writeEmptyElement(arg0: java.lang.String | string): void
                            public writeEmptyElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public writeEmptyElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public writeEndDocument(): void
                            public writeEndElement(): void
                            public writeEntityRef(arg0: java.lang.String | string): void
                            public writeNamespace(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public writeProcessingInstruction(arg0: java.lang.String | string): void
                            public writeProcessingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public writeStartDocument(): void
                            public writeStartDocument(arg0: java.lang.String | string): void
                            public writeStartDocument(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public writeStartElement(arg0: java.lang.String | string): void
                            public writeStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public writeStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            protected repair(): void
                            public size(): int
                            public isEmpty(): boolean
                            public containsKey(arg0: java.lang.Object): boolean
                            public get(arg0: java.lang.Object): java.lang.Object
                            public entrySet(): java.util.Set
                            public toString(): string
                            public hashCode(): int
                            public equals(arg0: java.lang.Object): boolean
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}