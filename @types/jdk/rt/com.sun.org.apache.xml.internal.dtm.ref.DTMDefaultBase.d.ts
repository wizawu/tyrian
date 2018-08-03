declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace dtm {
                            namespace ref {
                                abstract class DTMDefaultBase implements com.sun.org.apache.xml.internal.dtm.DTM {
                                    public static readonly ROOTNODE: int
                                    protected m_size: int
                                    protected m_exptype: com.sun.org.apache.xml.internal.utils.SuballocatedIntVector
                                    protected m_firstch: com.sun.org.apache.xml.internal.utils.SuballocatedIntVector
                                    protected m_nextsib: com.sun.org.apache.xml.internal.utils.SuballocatedIntVector
                                    protected m_prevsib: com.sun.org.apache.xml.internal.utils.SuballocatedIntVector
                                    protected m_parent: com.sun.org.apache.xml.internal.utils.SuballocatedIntVector
                                    protected m_namespaceDeclSets: java.util.Vector
                                    protected m_namespaceDeclSetElements: com.sun.org.apache.xml.internal.utils.SuballocatedIntVector
                                    protected m_elemIndexes: int[][][]
                                    public static readonly DEFAULT_BLOCKSIZE: int
                                    public static readonly DEFAULT_NUMBLOCKS: int
                                    public static readonly DEFAULT_NUMBLOCKS_SMALL: int
                                    protected static readonly NOTPROCESSED: int
                                    public m_mgr: com.sun.org.apache.xml.internal.dtm.DTMManager
                                    protected m_mgrDefault: com.sun.org.apache.xml.internal.dtm.ref.DTMManagerDefault
                                    protected m_dtmIdent: com.sun.org.apache.xml.internal.utils.SuballocatedIntVector
                                    protected m_documentBaseURI: string
                                    protected m_wsfilter: com.sun.org.apache.xml.internal.dtm.DTMWSFilter
                                    protected m_shouldStripWS: boolean
                                    protected m_shouldStripWhitespaceStack: com.sun.org.apache.xml.internal.utils.BoolStack
                                    protected m_xstrf: com.sun.org.apache.xml.internal.utils.XMLStringFactory
                                    protected m_expandedNameTable: com.sun.org.apache.xml.internal.dtm.ref.ExpandedNameTable
                                    protected m_indexing: boolean
                                    protected m_traversers: com.sun.org.apache.xml.internal.dtm.DTMAxisTraverser[]
                                    public constructor(arg0: com.sun.org.apache.xml.internal.dtm.DTMManager, arg1: javax.xml.transform.Source, arg2: int, arg3: com.sun.org.apache.xml.internal.dtm.DTMWSFilter | com.sun.org.apache.xml.internal.dtm.DTMWSFilter$$Lambda, arg4: com.sun.org.apache.xml.internal.utils.XMLStringFactory, arg5: boolean)
                                    public constructor(arg0: com.sun.org.apache.xml.internal.dtm.DTMManager, arg1: javax.xml.transform.Source, arg2: int, arg3: com.sun.org.apache.xml.internal.dtm.DTMWSFilter | com.sun.org.apache.xml.internal.dtm.DTMWSFilter$$Lambda, arg4: com.sun.org.apache.xml.internal.utils.XMLStringFactory, arg5: boolean, arg6: int, arg7: boolean, arg8: boolean)
                                    protected ensureSizeOfIndex(arg0: int, arg1: int): void
                                    protected indexNode(arg0: int, arg1: int): void
                                    protected findGTE(arg0: int[], arg1: int, arg2: int, arg3: int): int
                                    protected abstract getNextNodeIdentity(arg0: int): int
                                    protected abstract nextNode(): boolean
                                    protected abstract getNumberOfNodes(): int
                                    protected _type(arg0: int): short
                                    protected _exptype(arg0: int): int
                                    protected _level(arg0: int): int
                                    protected _firstch(arg0: int): int
                                    protected _nextsib(arg0: int): int
                                    protected _prevsib(arg0: int): int
                                    protected _parent(arg0: int): int
                                    public dumpDTM(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                    public dumpNode(arg0: int): string
                                    public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                    public hasChildNodes(arg0: int): boolean
                                    public makeNodeHandle(arg0: int): int
                                    public makeNodeIdentity(arg0: int): int
                                    public getFirstChild(arg0: int): int
                                    public getTypedFirstChild(arg0: int, arg1: int): int
                                    public getLastChild(arg0: int): int
                                    public abstract getAttributeNode(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string): int
                                    public getFirstAttribute(arg0: int): int
                                    protected getFirstAttributeIdentity(arg0: int): int
                                    protected getTypedAttribute(arg0: int, arg1: int): int
                                    public getNextSibling(arg0: int): int
                                    public getTypedNextSibling(arg0: int, arg1: int): int
                                    public getPreviousSibling(arg0: int): int
                                    public getNextAttribute(arg0: int): int
                                    protected getNextAttributeIdentity(arg0: int): int
                                    protected declareNamespaceInContext(arg0: int, arg1: int): void
                                    protected findNamespaceContext(arg0: int): com.sun.org.apache.xml.internal.utils.SuballocatedIntVector
                                    protected findInSortedSuballocatedIntVector(arg0: com.sun.org.apache.xml.internal.utils.SuballocatedIntVector, arg1: int): int
                                    public getFirstNamespaceNode(arg0: int, arg1: boolean): int
                                    public getNextNamespaceNode(arg0: int, arg1: int, arg2: boolean): int
                                    public getParent(arg0: int): int
                                    public getDocument(): int
                                    public getOwnerDocument(arg0: int): int
                                    public getDocumentRoot(arg0: int): int
                                    public abstract getStringValue(arg0: int): com.sun.org.apache.xml.internal.utils.XMLString
                                    public getStringValueChunkCount(arg0: int): int
                                    public getStringValueChunk(arg0: int, arg1: int, arg2: int[]): char[]
                                    public getExpandedTypeID(arg0: int): int
                                    public getExpandedTypeID(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int): int
                                    public getLocalNameFromExpandedNameID(arg0: int): string
                                    public getNamespaceFromExpandedNameID(arg0: int): string
                                    public getNamespaceType(arg0: int): int
                                    public abstract getNodeName(arg0: int): string
                                    public getNodeNameX(arg0: int): string
                                    public abstract getLocalName(arg0: int): string
                                    public abstract getPrefix(arg0: int): string
                                    public abstract getNamespaceURI(arg0: int): string
                                    public abstract getNodeValue(arg0: int): string
                                    public getNodeType(arg0: int): short
                                    public getLevel(arg0: int): short
                                    public getNodeIdent(arg0: int): int
                                    public getNodeHandle(arg0: int): int
                                    public isSupported(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                                    public getDocumentBaseURI(): string
                                    public setDocumentBaseURI(arg0: java.lang.String | string): void
                                    public getDocumentSystemIdentifier(arg0: int): string
                                    public getDocumentEncoding(arg0: int): string
                                    public getDocumentStandalone(arg0: int): string
                                    public getDocumentVersion(arg0: int): string
                                    public getDocumentAllDeclarationsProcessed(): boolean
                                    public abstract getDocumentTypeDeclarationSystemIdentifier(): string
                                    public abstract getDocumentTypeDeclarationPublicIdentifier(): string
                                    public abstract getElementById(arg0: java.lang.String | string): int
                                    public abstract getUnparsedEntityURI(arg0: java.lang.String | string): string
                                    public supportsPreStripping(): boolean
                                    public isNodeAfter(arg0: int, arg1: int): boolean
                                    public isCharacterElementContentWhitespace(arg0: int): boolean
                                    public isDocumentAllDeclarationsProcessed(arg0: int): boolean
                                    public abstract isAttributeSpecified(arg0: int): boolean
                                    public abstract dispatchCharactersEvents(arg0: int, arg1: org.xml.sax.ContentHandler, arg2: boolean): void
                                    public abstract dispatchToEvents(arg0: int, arg1: org.xml.sax.ContentHandler): void
                                    public getNode(arg0: int): org.w3c.dom.Node
                                    public appendChild(arg0: int, arg1: boolean, arg2: boolean): void
                                    public appendTextChild(arg0: java.lang.String | string): void
                                    protected error(arg0: java.lang.String | string): void
                                    protected getShouldStripWhitespace(): boolean
                                    protected pushShouldStripWhitespace(arg0: boolean): void
                                    protected popShouldStripWhitespace(): void
                                    protected setShouldStripWhitespace(arg0: boolean): void
                                    public documentRegistration(): void
                                    public documentRelease(): void
                                    public migrateTo(arg0: com.sun.org.apache.xml.internal.dtm.DTMManager): void
                                    public getManager(): com.sun.org.apache.xml.internal.dtm.DTMManager
                                    public getDTMIDs(): com.sun.org.apache.xml.internal.utils.SuballocatedIntVector
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