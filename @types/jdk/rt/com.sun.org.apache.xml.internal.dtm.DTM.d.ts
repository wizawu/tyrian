declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace dtm {
                            interface DTM {
                                NULL: int
                                ROOT_NODE: short
                                ELEMENT_NODE: short
                                ATTRIBUTE_NODE: short
                                TEXT_NODE: short
                                CDATA_SECTION_NODE: short
                                ENTITY_REFERENCE_NODE: short
                                ENTITY_NODE: short
                                PROCESSING_INSTRUCTION_NODE: short
                                COMMENT_NODE: short
                                DOCUMENT_NODE: short
                                DOCUMENT_TYPE_NODE: short
                                DOCUMENT_FRAGMENT_NODE: short
                                NOTATION_NODE: short
                                NAMESPACE_NODE: short
                                NTYPES: short
                                setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                getAxisTraverser(arg0: int): com.sun.org.apache.xml.internal.dtm.DTMAxisTraverser
                                getAxisIterator(arg0: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                getTypedAxisIterator(arg0: int, arg1: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                hasChildNodes(arg0: int): boolean
                                getFirstChild(arg0: int): int
                                getLastChild(arg0: int): int
                                getAttributeNode(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string): int
                                getFirstAttribute(arg0: int): int
                                getFirstNamespaceNode(arg0: int, arg1: boolean): int
                                getNextSibling(arg0: int): int
                                getPreviousSibling(arg0: int): int
                                getNextAttribute(arg0: int): int
                                getNextNamespaceNode(arg0: int, arg1: int, arg2: boolean): int
                                getParent(arg0: int): int
                                getDocument(): int
                                getOwnerDocument(arg0: int): int
                                getDocumentRoot(arg0: int): int
                                getStringValue(arg0: int): com.sun.org.apache.xml.internal.utils.XMLString
                                getStringValueChunkCount(arg0: int): int
                                getStringValueChunk(arg0: int, arg1: int, arg2: int[]): char[]
                                getExpandedTypeID(arg0: int): int
                                getExpandedTypeID(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int): int
                                getLocalNameFromExpandedNameID(arg0: int): string
                                getNamespaceFromExpandedNameID(arg0: int): string
                                getNodeName(arg0: int): string
                                getNodeNameX(arg0: int): string
                                getLocalName(arg0: int): string
                                getPrefix(arg0: int): string
                                getNamespaceURI(arg0: int): string
                                getNodeValue(arg0: int): string
                                getNodeType(arg0: int): short
                                getLevel(arg0: int): short
                                isSupported(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                                getDocumentBaseURI(): string
                                setDocumentBaseURI(arg0: java.lang.String | string): void
                                getDocumentSystemIdentifier(arg0: int): string
                                getDocumentEncoding(arg0: int): string
                                getDocumentStandalone(arg0: int): string
                                getDocumentVersion(arg0: int): string
                                getDocumentAllDeclarationsProcessed(): boolean
                                getDocumentTypeDeclarationSystemIdentifier(): string
                                getDocumentTypeDeclarationPublicIdentifier(): string
                                getElementById(arg0: java.lang.String | string): int
                                getUnparsedEntityURI(arg0: java.lang.String | string): string
                                supportsPreStripping(): boolean
                                isNodeAfter(arg0: int, arg1: int): boolean
                                isCharacterElementContentWhitespace(arg0: int): boolean
                                isDocumentAllDeclarationsProcessed(arg0: int): boolean
                                isAttributeSpecified(arg0: int): boolean
                                dispatchCharactersEvents(arg0: int, arg1: org.xml.sax.ContentHandler, arg2: boolean): void
                                dispatchToEvents(arg0: int, arg1: org.xml.sax.ContentHandler): void
                                getNode(arg0: int): org.w3c.dom.Node
                                needsTwoThreads(): boolean
                                getContentHandler(): org.xml.sax.ContentHandler
                                getLexicalHandler(): org.xml.sax.ext.LexicalHandler
                                getEntityResolver(): org.xml.sax.EntityResolver
                                getDTDHandler(): org.xml.sax.DTDHandler
                                getErrorHandler(): org.xml.sax.ErrorHandler
                                getDeclHandler(): org.xml.sax.ext.DeclHandler
                                appendChild(arg0: int, arg1: boolean, arg2: boolean): void
                                appendTextChild(arg0: java.lang.String | string): void
                                getSourceLocatorFor(arg0: int): javax.xml.transform.SourceLocator
                                documentRegistration(): void
                                documentRelease(): void
                                migrateTo(arg0: com.sun.org.apache.xml.internal.dtm.DTMManager): void
                            }
                        }
                    }
                }
            }
        }
    }
}