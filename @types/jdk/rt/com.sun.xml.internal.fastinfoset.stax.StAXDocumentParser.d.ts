declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace stax {
                        class StAXDocumentParser extends com.sun.xml.internal.fastinfoset.Decoder implements javax.xml.stream.XMLStreamReader , com.sun.xml.internal.org.jvnet.fastinfoset.stax.FastInfosetStreamReader , com.sun.xml.internal.fastinfoset.OctetBufferListener {
                            protected static INTERNAL_STATE_START_DOCUMENT: int
                            protected static INTERNAL_STATE_START_ELEMENT_TERMINATE: int
                            protected static INTERNAL_STATE_SINGLE_TERMINATE_ELEMENT_WITH_NAMESPACES: int
                            protected static INTERNAL_STATE_DOUBLE_TERMINATE_ELEMENT: int
                            protected static INTERNAL_STATE_END_DOCUMENT: int
                            protected static INTERNAL_STATE_VOID: int
                            protected _internalState: int
                            protected _eventType: int
                            protected _qNameStack: com.sun.xml.internal.fastinfoset.QualifiedName[]
                            protected _namespaceAIIsStartStack: int[]
                            protected _namespaceAIIsEndStack: int[]
                            protected _stackCount: int
                            protected _namespaceAIIsPrefix: java.lang.String[]
                            protected _namespaceAIIsNamespaceName: java.lang.String[]
                            protected _namespaceAIIsPrefixIndex: int[]
                            protected _namespaceAIIsIndex: int
                            protected _currentNamespaceAIIsStart: int
                            protected _currentNamespaceAIIsEnd: int
                            protected _qualifiedName: com.sun.xml.internal.fastinfoset.QualifiedName
                            protected _attributes: com.sun.xml.internal.fastinfoset.sax.AttributesHolder
                            protected _clearAttributes: boolean
                            protected _characters: char[]
                            protected _charactersOffset: int
                            protected _algorithmURI: string
                            protected _algorithmId: int
                            protected _isAlgorithmDataCloned: boolean
                            protected _algorithmData: byte[]
                            protected _algorithmDataOffset: int
                            protected _algorithmDataLength: int
                            protected _piTarget: string
                            protected _piData: string
                            protected _nsContext: com.sun.xml.internal.fastinfoset.stax.StAXDocumentParser$NamespaceContextImpl
                            protected _characterEncodingScheme: string
                            protected _manager: com.sun.xml.internal.fastinfoset.stax.StAXManager
                            public constructor()
                            public constructor(arg0: java.io.InputStream)
                            public constructor(arg0: java.io.InputStream, arg1: com.sun.xml.internal.fastinfoset.stax.StAXManager)
                            public setInputStream(arg0: java.io.InputStream): void
                            public reset(): void
                            protected resetOnError(): void
                            public getProperty(arg0: java.lang.String | string): java.lang.Object
                            public next(): int
                            public require(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public getElementText(): string
                            public getElementText(arg0: boolean): string
                            public nextTag(): int
                            public nextTag(arg0: boolean): int
                            public hasNext(): boolean
                            public close(): void
                            public getNamespaceURI(arg0: java.lang.String | string): string
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
                            public getNamespaceContext(): javax.xml.namespace.NamespaceContext
                            public getEventType(): int
                            public getText(): string
                            public getTextCharacters(): char[]
                            public getTextStart(): int
                            public getTextLength(): int
                            public getTextCharacters(arg0: int, arg1: char[], arg2: int, arg3: int): int
                            protected checkTextState(): void
                            public getEncoding(): string
                            public hasText(): boolean
                            public getLocation(): javax.xml.stream.Location
                            public getName(): javax.xml.namespace.QName
                            public getLocalName(): string
                            public hasName(): boolean
                            public getNamespaceURI(): string
                            public getPrefix(): string
                            public getVersion(): string
                            public isStandalone(): boolean
                            public standaloneSet(): boolean
                            public getCharacterEncodingScheme(): string
                            public getPITarget(): string
                            public getPIData(): string
                            public getNameString(): string
                            public getAttributeNameString(arg0: int): string
                            public getTextAlgorithmURI(): string
                            public getTextAlgorithmIndex(): int
                            public hasTextAlgorithmBytes(): boolean
                            public getTextAlgorithmBytes(): byte[]
                            public getTextAlgorithmBytesClone(): byte[]
                            public getTextAlgorithmStart(): int
                            public getTextAlgorithmLength(): int
                            public getTextAlgorithmBytes(arg0: int, arg1: byte[], arg2: int, arg3: int): int
                            public peekNext(): int
                            public onBeforeOctetBufferOverwrite(): void
                            public accessNamespaceCount(): int
                            public accessLocalName(): string
                            public accessNamespaceURI(): string
                            public accessPrefix(): string
                            public accessTextCharacters(): char[]
                            public accessTextStart(): int
                            public accessTextLength(): int
                            protected processDII(): void
                            protected processDIIOptionalProperties(arg0: int): void
                            protected resizeNamespaceAIIs(): void
                            protected processEIIWithNamespaces(arg0: boolean): void
                            protected processEII(arg0: com.sun.xml.internal.fastinfoset.QualifiedName, arg1: boolean): void
                            protected processAIIs(): void
                            protected processEIIIndexMedium(arg0: int): com.sun.xml.internal.fastinfoset.QualifiedName
                            protected processEIIIndexLarge(arg0: int): com.sun.xml.internal.fastinfoset.QualifiedName
                            protected processLiteralQualifiedName(arg0: int, arg1: com.sun.xml.internal.fastinfoset.QualifiedName): com.sun.xml.internal.fastinfoset.QualifiedName
                            protected processCommentII(): void
                            protected processProcessingII(): void
                            protected processUnexpandedEntityReference(arg0: int): void
                            protected processCIIEncodingAlgorithm(arg0: boolean): void
                            protected processAIIEncodingAlgorithm(arg0: com.sun.xml.internal.fastinfoset.QualifiedName, arg1: boolean): void
                            protected convertEncodingAlgorithmDataToCharacters(): void
                            protected convertBase64AlorithmDataToCharacters(arg0: java.lang.StringBuffer): void
                            public isBase64Follows(): boolean
                            public getNamespaceDecl(arg0: java.lang.String | string): string
                            public getURI(arg0: java.lang.String | string): string
                            public getPrefixes(): java.util.Iterator
                            public getAttributesHolder(): com.sun.xml.internal.fastinfoset.sax.AttributesHolder
                            public setManager(arg0: com.sun.xml.internal.fastinfoset.stax.StAXManager): void
                            public static class: java.lang.Class<any>
                        }
                        class StAXDocumentParser$$Lambda extends com.sun.xml.internal.fastinfoset.Decoder implements javax.xml.stream.XMLStreamReader , com.sun.xml.internal.org.jvnet.fastinfoset.stax.FastInfosetStreamReader , com.sun.xml.internal.fastinfoset.OctetBufferListener {
                            protected static INTERNAL_STATE_START_DOCUMENT: int
                        }
                    }
                }
            }
        }
    }
}