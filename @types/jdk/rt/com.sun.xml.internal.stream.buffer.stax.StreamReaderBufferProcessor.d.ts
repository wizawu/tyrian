declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace buffer {
                        namespace stax {
                            class StreamReaderBufferProcessor extends com.sun.xml.internal.stream.buffer.AbstractProcessor implements com.sun.xml.internal.org.jvnet.staxex.XMLStreamReaderEx {
                                protected _stack: com.sun.xml.internal.stream.buffer.stax.StreamReaderBufferProcessor$ElementStackEntry[]
                                protected _stackTop: com.sun.xml.internal.stream.buffer.stax.StreamReaderBufferProcessor$ElementStackEntry
                                protected _depth: int
                                protected _namespaceAIIsPrefix: java.lang.String[]
                                protected _namespaceAIIsNamespaceName: java.lang.String[]
                                protected _namespaceAIIsEnd: int
                                protected _nsCtx: com.sun.xml.internal.stream.buffer.stax.StreamReaderBufferProcessor$InternalNamespaceContext
                                protected _eventType: int
                                protected _attributeCache: com.sun.xml.internal.stream.buffer.AttributesHolder
                                protected _charSequence: java.lang.CharSequence
                                protected _characters: char[]
                                protected _textOffset: int
                                protected _textLen: int
                                protected _piTarget: string
                                protected _piData: string
                                public constructor()
                                public constructor(arg0: com.sun.xml.internal.stream.buffer.XMLStreamBuffer)
                                public setXMLStreamBuffer(arg0: com.sun.xml.internal.stream.buffer.XMLStreamBuffer): void
                                public nextTagAndMark(): com.sun.xml.internal.stream.buffer.XMLStreamBuffer
                                public getProperty(arg0: java.lang.String | string): java.lang.Object
                                public next(): int
                                public require(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public getElementTextTrim(): string
                                public getElementText(): string
                                public getElementText(arg0: boolean): string
                                public nextTag(): int
                                public nextTag(arg0: boolean): int
                                public hasNext(): boolean
                                public close(): void
                                public isStartElement(): boolean
                                public isEndElement(): boolean
                                public isCharacters(): boolean
                                public isWhiteSpace(): boolean
                                public getAttributeValue(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                public getAttributeCount(): int
                                public getAttributeName(arg0: int): javax.xml.namespace.QName
                                public getAttributeNamespace(arg0: int): string
                                public getAttributeLocalName(arg0: int): string
                                public getAttributePrefix(arg0: int): string
                                public getAttributeType(arg0: int): string
                                public getAttributeValue(arg0: int): string
                                public isAttributeSpecified(arg0: int): boolean
                                public getNamespaceCount(): int
                                public getNamespacePrefix(arg0: int): string
                                public getNamespaceURI(arg0: int): string
                                public getNamespaceURI(arg0: java.lang.String | string): string
                                public getNamespaceContext(): com.sun.xml.internal.org.jvnet.staxex.NamespaceContextEx
                                public getEventType(): int
                                public getText(): string
                                public getTextCharacters(): char[]
                                public getTextStart(): int
                                public getTextLength(): int
                                public getTextCharacters(arg0: int, arg1: char[], arg2: int, arg3: int): int
                                public getPCDATA(): java.lang.CharSequence
                                public getEncoding(): string
                                public hasText(): boolean
                                public getLocation(): javax.xml.stream.Location
                                public hasName(): boolean
                                public getName(): javax.xml.namespace.QName
                                public getLocalName(): string
                                public getNamespaceURI(): string
                                public getPrefix(): string
                                public getVersion(): string
                                public isStandalone(): boolean
                                public standaloneSet(): boolean
                                public getCharacterEncodingScheme(): string
                                public getPITarget(): string
                                public getPIData(): string
                                protected processElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean): void
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