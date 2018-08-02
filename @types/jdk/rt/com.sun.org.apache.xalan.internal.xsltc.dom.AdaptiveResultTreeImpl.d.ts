declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace dom {
                                class AdaptiveResultTreeImpl extends com.sun.org.apache.xalan.internal.xsltc.dom.SimpleResultTreeImpl {
                                    public constructor(arg0: com.sun.org.apache.xalan.internal.xsltc.dom.XSLTCDTMManager, arg1: int, arg2: com.sun.org.apache.xml.internal.dtm.DTMWSFilter, arg3: int, arg4: boolean)
                                    public getNestedDOM(): com.sun.org.apache.xalan.internal.xsltc.DOM
                                    public getDocument(): int
                                    public getStringValue(): string
                                    public getIterator(): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getChildren(arg0: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getTypedChildren(arg0: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getAxisIterator(arg0: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getTypedAxisIterator(arg0: int, arg1: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getNthDescendant(arg0: int, arg1: int, arg2: boolean): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getNamespaceAxisIterator(arg0: int, arg1: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getNodeValueIterator(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg1: int, arg2: java.lang.String | string, arg3: boolean): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public orderNodes(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg1: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getNodeName(arg0: int): string
                                    public getNodeNameX(arg0: int): string
                                    public getNamespaceName(arg0: int): string
                                    public getExpandedTypeID(arg0: int): int
                                    public getNamespaceType(arg0: int): int
                                    public getParent(arg0: int): int
                                    public getAttributeNode(arg0: int, arg1: int): int
                                    public getStringValueX(arg0: int): string
                                    public copy(arg0: int, arg1: com.sun.org.apache.xml.internal.serializer.SerializationHandler): void
                                    public copy(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg1: com.sun.org.apache.xml.internal.serializer.SerializationHandler): void
                                    public shallowCopy(arg0: int, arg1: com.sun.org.apache.xml.internal.serializer.SerializationHandler): string
                                    public lessThan(arg0: int, arg1: int): boolean
                                    public characters(arg0: int, arg1: com.sun.org.apache.xml.internal.serializer.SerializationHandler): void
                                    public makeNode(arg0: int): org.w3c.dom.Node
                                    public makeNode(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator): org.w3c.dom.Node
                                    public makeNodeList(arg0: int): org.w3c.dom.NodeList
                                    public makeNodeList(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator): org.w3c.dom.NodeList
                                    public getLanguage(arg0: int): string
                                    public getSize(): int
                                    public getDocumentURI(arg0: int): string
                                    public setFilter(arg0: com.sun.org.apache.xalan.internal.xsltc.StripFilter | com.sun.org.apache.xalan.internal.xsltc.StripFilter$$Lambda): void
                                    public setupMapping(arg0: java.lang.String[], arg1: java.lang.String[], arg2: int[], arg3: java.lang.String[]): void
                                    public isElement(arg0: int): boolean
                                    public isAttribute(arg0: int): boolean
                                    public lookupNamespace(arg0: int, arg1: java.lang.String | string): string
                                    public getNodeIdent(arg0: int): int
                                    public getNodeHandle(arg0: int): int
                                    public getResultTreeFrag(arg0: int, arg1: int): com.sun.org.apache.xalan.internal.xsltc.DOM
                                    public getOutputDomBuilder(): com.sun.org.apache.xml.internal.serializer.SerializationHandler
                                    public getNSType(arg0: int): int
                                    public getUnparsedEntityURI(arg0: java.lang.String | string): string
                                    public getElementsWithIDs(): java.util.Map<java.lang.String, java.lang.Integer>
                                    public startDocument(): void
                                    public endDocument(): void
                                    public characters(arg0: java.lang.String | string): void
                                    public characters(arg0: char[], arg1: int, arg2: int): void
                                    public setEscaping(arg0: boolean): boolean
                                    public startElement(arg0: java.lang.String | string): void
                                    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                                    public endElement(arg0: java.lang.String | string): void
                                    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public addUniqueAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int): void
                                    public addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): void
                                    public namespaceAfterStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public comment(arg0: java.lang.String | string): void
                                    public comment(arg0: char[], arg1: int, arg2: int): void
                                    public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                    public getAxisTraverser(arg0: int): com.sun.org.apache.xml.internal.dtm.DTMAxisTraverser
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
                                    public getOwnerDocument(arg0: int): int
                                    public getDocumentRoot(arg0: int): int
                                    public getStringValue(arg0: int): com.sun.org.apache.xml.internal.utils.XMLString
                                    public getStringValueChunkCount(arg0: int): int
                                    public getStringValueChunk(arg0: int, arg1: int, arg2: int[]): char[]
                                    public getExpandedTypeID(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int): int
                                    public getLocalNameFromExpandedNameID(arg0: int): string
                                    public getNamespaceFromExpandedNameID(arg0: int): string
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
                                    public supportsPreStripping(): boolean
                                    public isNodeAfter(arg0: int, arg1: int): boolean
                                    public isCharacterElementContentWhitespace(arg0: int): boolean
                                    public isDocumentAllDeclarationsProcessed(arg0: int): boolean
                                    public isAttributeSpecified(arg0: int): boolean
                                    public dispatchCharactersEvents(arg0: int, arg1: org.xml.sax.ContentHandler, arg2: boolean): void
                                    public dispatchToEvents(arg0: int, arg1: org.xml.sax.ContentHandler): void
                                    public getNode(arg0: int): org.w3c.dom.Node
                                    public needsTwoThreads(): boolean
                                    public getContentHandler(): org.xml.sax.ContentHandler
                                    public getLexicalHandler(): org.xml.sax.ext.LexicalHandler
                                    public getEntityResolver(): org.xml.sax.EntityResolver
                                    public getDTDHandler(): org.xml.sax.DTDHandler
                                    public getErrorHandler(): org.xml.sax.ErrorHandler
                                    public getDeclHandler(): org.xml.sax.ext.DeclHandler
                                    public appendChild(arg0: int, arg1: boolean, arg2: boolean): void
                                    public appendTextChild(arg0: java.lang.String | string): void
                                    public getSourceLocatorFor(arg0: int): javax.xml.transform.SourceLocator
                                    public documentRegistration(): void
                                    public documentRelease(): void
                                    public release(): void
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