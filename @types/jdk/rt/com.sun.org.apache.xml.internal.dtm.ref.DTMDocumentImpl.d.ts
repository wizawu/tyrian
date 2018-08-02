declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace dtm {
                            namespace ref {
                                class DTMDocumentImpl implements com.sun.org.apache.xml.internal.dtm.DTM , org.xml.sax.ContentHandler , org.xml.sax.ext.LexicalHandler {
                                    protected static DOCHANDLE_SHIFT: byte
                                    protected static NODEHANDLE_MASK: int
                                    protected static DOCHANDLE_MASK: int
                                    protected m_currentNode: int
                                    protected m_documentBaseURI: string
                                    public constructor(arg0: com.sun.org.apache.xml.internal.dtm.DTMManager, arg1: int, arg2: com.sun.org.apache.xml.internal.dtm.DTMWSFilter, arg3: com.sun.org.apache.xml.internal.utils.XMLStringFactory)
                                    public setIncrementalSAXSource(arg0: com.sun.org.apache.xml.internal.dtm.ref.IncrementalSAXSource): void
                                    public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                    public setLocalNameTable(arg0: com.sun.org.apache.xml.internal.dtm.ref.DTMStringPool): void
                                    public getLocalNameTable(): com.sun.org.apache.xml.internal.dtm.ref.DTMStringPool
                                    public setNsNameTable(arg0: com.sun.org.apache.xml.internal.dtm.ref.DTMStringPool): void
                                    public getNsNameTable(): com.sun.org.apache.xml.internal.dtm.ref.DTMStringPool
                                    public setPrefixNameTable(arg0: com.sun.org.apache.xml.internal.dtm.ref.DTMStringPool): void
                                    public getPrefixNameTable(): com.sun.org.apache.xml.internal.dtm.ref.DTMStringPool
                                    public getContentHandler(): org.xml.sax.ContentHandler
                                    public getLexicalHandler(): org.xml.sax.ext.LexicalHandler
                                    public getEntityResolver(): org.xml.sax.EntityResolver
                                    public getDTDHandler(): org.xml.sax.DTDHandler
                                    public getErrorHandler(): org.xml.sax.ErrorHandler
                                    public getDeclHandler(): org.xml.sax.ext.DeclHandler
                                    public needsTwoThreads(): boolean
                                    public characters(arg0: char[], arg1: int, arg2: int): void
                                    public endDocument(): void
                                    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public endPrefixMapping(arg0: java.lang.String | string): void
                                    public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
                                    public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public setDocumentLocator(arg0: org.xml.sax.Locator): void
                                    public skippedEntity(arg0: java.lang.String | string): void
                                    public startDocument(): void
                                    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                                    public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public comment(arg0: char[], arg1: int, arg2: int): void
                                    public endCDATA(): void
                                    public endDTD(): void
                                    public endEntity(arg0: java.lang.String | string): void
                                    public startCDATA(): void
                                    public startDTD(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public startEntity(arg0: java.lang.String | string): void
                                    public hasChildNodes(arg0: int): boolean
                                    public getFirstChild(arg0: int): int
                                    public getLastChild(arg0: int): int
                                    public getAttributeNode(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string): int
                                    public getFirstAttribute(arg0: int): int
                                    public getFirstNamespaceNode(arg0: int, arg1: boolean): int
                                    public getNextSibling(arg0: int): int
                                    public getPreviousSibling(arg0: int): int
                                    public getNextAttribute(arg0: int): int
                                    public getNextNamespaceNode(arg0: int, arg1: int, arg2: boolean): int
                                    public getNextDescendant(arg0: int, arg1: int): int
                                    public getNextFollowing(arg0: int, arg1: int): int
                                    public getNextPreceding(arg0: int, arg1: int): int
                                    public getParent(arg0: int): int
                                    public getDocumentRoot(): int
                                    public getDocument(): int
                                    public getOwnerDocument(arg0: int): int
                                    public getDocumentRoot(arg0: int): int
                                    public getStringValue(arg0: int): com.sun.org.apache.xml.internal.utils.XMLString
                                    public getStringValueChunkCount(arg0: int): int
                                    public getStringValueChunk(arg0: int, arg1: int, arg2: int[]): char[]
                                    public getExpandedTypeID(arg0: int): int
                                    public getExpandedTypeID(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int): int
                                    public getLocalNameFromExpandedNameID(arg0: int): string
                                    public getNamespaceFromExpandedNameID(arg0: int): string
                                    public getNodeName(arg0: int): string
                                    public getNodeNameX(arg0: int): string
                                    public getLocalName(arg0: int): string
                                    public getPrefix(arg0: int): string
                                    public getNamespaceURI(arg0: int): string
                                    public getNodeValue(arg0: int): string
                                    public getNodeType(arg0: int): short
                                    public getLevel(arg0: int): short
                                    public isSupported(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                                    public getDocumentBaseURI(): string
                                    public setDocumentBaseURI(arg0: java.lang.String | string): void
                                    public getDocumentSystemIdentifier(arg0: int): string
                                    public getDocumentEncoding(arg0: int): string
                                    public getDocumentStandalone(arg0: int): string
                                    public getDocumentVersion(arg0: int): string
                                    public getDocumentAllDeclarationsProcessed(): boolean
                                    public getDocumentTypeDeclarationSystemIdentifier(): string
                                    public getDocumentTypeDeclarationPublicIdentifier(): string
                                    public getElementById(arg0: java.lang.String | string): int
                                    public getUnparsedEntityURI(arg0: java.lang.String | string): string
                                    public supportsPreStripping(): boolean
                                    public isNodeAfter(arg0: int, arg1: int): boolean
                                    public isCharacterElementContentWhitespace(arg0: int): boolean
                                    public isDocumentAllDeclarationsProcessed(arg0: int): boolean
                                    public isAttributeSpecified(arg0: int): boolean
                                    public dispatchCharactersEvents(arg0: int, arg1: org.xml.sax.ContentHandler, arg2: boolean): void
                                    public dispatchToEvents(arg0: int, arg1: org.xml.sax.ContentHandler): void
                                    public getNode(arg0: int): org.w3c.dom.Node
                                    public appendChild(arg0: int, arg1: boolean, arg2: boolean): void
                                    public appendTextChild(arg0: java.lang.String | string): void
                                    public getAxisTraverser(arg0: int): com.sun.org.apache.xml.internal.dtm.DTMAxisTraverser
                                    public getAxisIterator(arg0: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getTypedAxisIterator(arg0: int, arg1: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                    public getSourceLocatorFor(arg0: int): javax.xml.transform.SourceLocator
                                    public documentRegistration(): void
                                    public documentRelease(): void
                                    public migrateTo(arg0: com.sun.org.apache.xml.internal.dtm.DTMManager): void
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