declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace dtm {
                            namespace ref {
                                namespace sax2dtm {
class SAX2DTM extends com.sun.org.apache.xml.internal.dtm.ref.DTMDefaultBaseIterators implements org.xml.sax.EntityResolver , org.xml.sax.DTDHandler , org.xml.sax.ContentHandler , org.xml.sax.ErrorHandler , org.xml.sax.ext.DeclHandler , org.xml.sax.ext.LexicalHandler {
    protected m_chars: com.sun.org.apache.xml.internal.utils.FastStringBuffer
    protected m_data: com.sun.org.apache.xml.internal.utils.SuballocatedIntVector
    protected m_parents: com.sun.org.apache.xml.internal.utils.IntStack
    protected m_previous: int
    protected m_prefixMappings: java.util.Vector
    protected m_contextIndexes: com.sun.org.apache.xml.internal.utils.IntStack
    protected m_textType: int
    protected m_coalescedTextType: int
    protected m_locator: org.xml.sax.Locator
    protected m_insideDTD: boolean
    protected m_walker: com.sun.org.apache.xml.internal.dtm.ref.DTMTreeWalker
    protected m_valuesOrPrefixes: com.sun.org.apache.xml.internal.dtm.ref.DTMStringPool
    protected m_endDocumentOccured: boolean
    protected m_dataOrQName: com.sun.org.apache.xml.internal.utils.SuballocatedIntVector
    protected m_idAttributes: java.util.Map<java.lang.String, java.lang.Integer>
    protected m_textPendingStart: int
    protected m_useSourceLocationProperty: boolean
    protected m_sourceSystemId: com.sun.org.apache.xml.internal.utils.StringVector
    protected m_sourceLine: com.sun.org.apache.xml.internal.utils.IntVector
    protected m_sourceColumn: com.sun.org.apache.xml.internal.utils.IntVector
    public constructor(arg0: com.sun.org.apache.xml.internal.dtm.DTMManager, arg1: javax.xml.transform.Source, arg2: int, arg3: com.sun.org.apache.xml.internal.dtm.DTMWSFilter, arg4: com.sun.org.apache.xml.internal.utils.XMLStringFactory, arg5: boolean)
    public constructor(arg0: com.sun.org.apache.xml.internal.dtm.DTMManager, arg1: javax.xml.transform.Source, arg2: int, arg3: com.sun.org.apache.xml.internal.dtm.DTMWSFilter, arg4: com.sun.org.apache.xml.internal.utils.XMLStringFactory, arg5: boolean, arg6: int, arg7: boolean, arg8: boolean)
    public setUseSourceLocation(arg0: boolean): void
    protected _dataOrQName(arg0: int): int
    public clearCoRoutine(): void
    public clearCoRoutine(arg0: boolean): void
    public setIncrementalSAXSource(arg0: com.sun.org.apache.xml.internal.dtm.ref.IncrementalSAXSource): void
    public getContentHandler(): org.xml.sax.ContentHandler
    public getLexicalHandler(): org.xml.sax.ext.LexicalHandler
    public getEntityResolver(): org.xml.sax.EntityResolver
    public getDTDHandler(): org.xml.sax.DTDHandler
    public getErrorHandler(): org.xml.sax.ErrorHandler
    public getDeclHandler(): org.xml.sax.ext.DeclHandler
    public needsTwoThreads(): boolean
    public dispatchCharactersEvents(arg0: int, arg1: org.xml.sax.ContentHandler, arg2: boolean): void
    public getNodeName(arg0: int): string
    public getNodeNameX(arg0: int): string
    public isAttributeSpecified(arg0: int): boolean
    public getDocumentTypeDeclarationSystemIdentifier(): string
    protected getNextNodeIdentity(arg0: int): int
    public dispatchToEvents(arg0: int, arg1: org.xml.sax.ContentHandler): void
    public getNumberOfNodes(): int
    protected nextNode(): boolean
    protected addNode(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: boolean): int
    protected addNewDTMID(arg0: int): void
    public migrateTo(arg0: com.sun.org.apache.xml.internal.dtm.DTMManager): void
    protected setSourceLocation(): void
    public getNodeValue(arg0: int): string
    public getLocalName(arg0: int): string
    public getUnparsedEntityURI(arg0: java.lang.String | string): string
    public getPrefix(arg0: int): string
    public getAttributeNode(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string): int
    public getDocumentTypeDeclarationPublicIdentifier(): string
    public getNamespaceURI(arg0: int): string
    public getStringValue(arg0: int): com.sun.org.apache.xml.internal.utils.XMLString
    public isWhitespace(arg0: int): boolean
    public getElementById(arg0: java.lang.String | string): int
    public getPrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    public getIdForNamespace(arg0: java.lang.String | string): int
    public getNamespaceURI(arg0: java.lang.String | string): string
    public setIDAttribute(arg0: java.lang.String | string, arg1: int): void
    protected charactersFlush(): void
    public resolveEntity(arg0: java.lang.String | string, arg1: java.lang.String | string): org.xml.sax.InputSource
    public notationDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public unparsedEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
    public setDocumentLocator(arg0: org.xml.sax.Locator): void
    public startDocument(): void
    public endDocument(): void
    public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public endPrefixMapping(arg0: java.lang.String | string): void
    protected declAlreadyDeclared(arg0: java.lang.String | string): boolean
    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public characters(arg0: char[], arg1: int, arg2: int): void
    public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
    public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public skippedEntity(arg0: java.lang.String | string): void
    public warning(arg0: org.xml.sax.SAXParseException): void
    public error(arg0: org.xml.sax.SAXParseException): void
    public fatalError(arg0: org.xml.sax.SAXParseException): void
    public elementDecl(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public attributeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): void
    public internalEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public externalEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public startDTD(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public endDTD(): void
    public startEntity(arg0: java.lang.String | string): void
    public endEntity(arg0: java.lang.String | string): void
    public startCDATA(): void
    public endCDATA(): void
    public comment(arg0: char[], arg1: int, arg2: int): void
    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public getSourceLocatorFor(arg0: int): javax.xml.transform.SourceLocator
    public getFixedNames(arg0: int): string
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
}