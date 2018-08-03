declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace stax {
                        class StAXDocumentSerializer extends com.sun.xml.internal.fastinfoset.Encoder implements javax.xml.stream.XMLStreamWriter , com.sun.xml.internal.org.jvnet.fastinfoset.stax.LowLevelFastInfosetStreamWriter {
                            protected _manager: com.sun.xml.internal.fastinfoset.stax.StAXManager
                            protected _encoding: string
                            protected _currentLocalName: string
                            protected _currentUri: string
                            protected _currentPrefix: string
                            protected _inStartElement: boolean
                            protected _isEmptyElement: boolean
                            protected _attributesArray: java.lang.String[]
                            protected _attributesArrayIndex: int
                            protected _nsSupportContextStack: boolean[]
                            protected _stackCount: int
                            protected _nsContext: com.sun.xml.internal.fastinfoset.util.NamespaceContextImplementation
                            protected _namespacesArray: java.lang.String[]
                            protected _namespacesArrayIndex: int
                            public constructor()
                            public constructor(arg0: java.io.OutputStream)
                            public constructor(arg0: java.io.OutputStream, arg1: com.sun.xml.internal.fastinfoset.stax.StAXManager)
                            public reset(): void
                            public writeStartDocument(): void
                            public writeStartDocument(arg0: java.lang.String | string): void
                            public writeStartDocument(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public writeEndDocument(): void
                            public close(): void
                            public flush(): void
                            public writeStartElement(arg0: java.lang.String | string): void
                            public writeStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public writeStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public writeEmptyElement(arg0: java.lang.String | string): void
                            public writeEmptyElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public writeEmptyElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public writeEndElement(): void
                            public writeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public writeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public writeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                            public writeNamespace(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public writeDefaultNamespace(arg0: java.lang.String | string): void
                            public writeComment(arg0: java.lang.String | string): void
                            public writeProcessingInstruction(arg0: java.lang.String | string): void
                            public writeProcessingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public writeCData(arg0: java.lang.String | string): void
                            public writeDTD(arg0: java.lang.String | string): void
                            public writeEntityRef(arg0: java.lang.String | string): void
                            public writeCharacters(arg0: java.lang.String | string): void
                            public writeCharacters(arg0: char[], arg1: int, arg2: int): void
                            public getPrefix(arg0: java.lang.String | string): string
                            public setPrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public setDefaultNamespace(arg0: java.lang.String | string): void
                            public setNamespaceContext(arg0: javax.xml.namespace.NamespaceContext): void
                            public getNamespaceContext(): javax.xml.namespace.NamespaceContext
                            public getProperty(arg0: java.lang.String | string): java.lang.Object
                            public setManager(arg0: com.sun.xml.internal.fastinfoset.stax.StAXManager): void
                            public setEncoding(arg0: java.lang.String | string): void
                            public writeOctets(arg0: byte[], arg1: int, arg2: int): void
                            protected encodeTerminationAndCurrentElement(arg0: boolean): void
                            public initiateLowLevelWriting(): void
                            public getNextElementIndex(): int
                            public getNextAttributeIndex(): int
                            public getLocalNameIndex(): int
                            public getNextLocalNameIndex(): int
                            public writeLowLevelTerminationAndMark(): void
                            public writeLowLevelStartElementIndexed(arg0: int, arg1: int): void
                            public writeLowLevelStartElement(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): boolean
                            public writeLowLevelStartNamespaces(): void
                            public writeLowLevelNamespace(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public writeLowLevelEndNamespaces(): void
                            public writeLowLevelStartAttributes(): void
                            public writeLowLevelAttributeIndexed(arg0: int): void
                            public writeLowLevelAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): boolean
                            public writeLowLevelAttributeValue(arg0: java.lang.String | string): void
                            public writeLowLevelStartNameLiteral(arg0: int, arg1: java.lang.String | string, arg2: byte[], arg3: java.lang.String | string): void
                            public writeLowLevelStartNameLiteral(arg0: int, arg1: java.lang.String | string, arg2: int, arg3: java.lang.String | string): void
                            public writeLowLevelEndStartElement(): void
                            public writeLowLevelEndElement(): void
                            public writeLowLevelText(arg0: char[], arg1: int): void
                            public writeLowLevelText(arg0: java.lang.String | string): void
                            public writeLowLevelOctets(arg0: byte[], arg1: int): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}