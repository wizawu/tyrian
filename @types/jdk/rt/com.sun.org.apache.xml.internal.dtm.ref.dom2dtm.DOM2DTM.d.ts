declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace dtm {
                            namespace ref {
                                namespace dom2dtm {
                                    class DOM2DTM extends com.sun.org.apache.xml.internal.dtm.ref.DTMDefaultBaseIterators {
                                        protected m_nodes: java.util.Vector
                                        public constructor(arg0: com.sun.org.apache.xml.internal.dtm.DTMManager, arg1: javax.xml.transform.dom.DOMSource, arg2: int, arg3: com.sun.org.apache.xml.internal.dtm.DTMWSFilter | com.sun.org.apache.xml.internal.dtm.DTMWSFilter$$Lambda, arg4: com.sun.org.apache.xml.internal.utils.XMLStringFactory, arg5: boolean)
                                        protected addNode(arg0: org.w3c.dom.Node, arg1: int, arg2: int, arg3: int): int
                                        public getNumberOfNodes(): int
                                        protected nextNode(): boolean
                                        public getNode(arg0: int): org.w3c.dom.Node
                                        protected lookupNode(arg0: int): org.w3c.dom.Node
                                        protected getNextNodeIdentity(arg0: int): int
                                        public getHandleOfNode(arg0: org.w3c.dom.Node): int
                                        public getAttributeNode(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string): int
                                        public getStringValue(arg0: int): com.sun.org.apache.xml.internal.utils.XMLString
                                        public isWhitespace(arg0: int): boolean
                                        protected static getNodeData(arg0: org.w3c.dom.Node, arg1: com.sun.org.apache.xml.internal.utils.FastStringBuffer): void
                                        public getNodeName(arg0: int): string
                                        public getNodeNameX(arg0: int): string
                                        public getLocalName(arg0: int): string
                                        public getPrefix(arg0: int): string
                                        public getNamespaceURI(arg0: int): string
                                        public getNodeValue(arg0: int): string
                                        public getDocumentTypeDeclarationSystemIdentifier(): string
                                        public getDocumentTypeDeclarationPublicIdentifier(): string
                                        public getElementById(arg0: java.lang.String | string): int
                                        public getUnparsedEntityURI(arg0: java.lang.String | string): string
                                        public isAttributeSpecified(arg0: int): boolean
                                        public setIncrementalSAXSource(arg0: com.sun.org.apache.xml.internal.dtm.ref.IncrementalSAXSource): void
                                        public getContentHandler(): org.xml.sax.ContentHandler
                                        public getLexicalHandler(): org.xml.sax.ext.LexicalHandler
                                        public getEntityResolver(): org.xml.sax.EntityResolver
                                        public getDTDHandler(): org.xml.sax.DTDHandler
                                        public getErrorHandler(): org.xml.sax.ErrorHandler
                                        public getDeclHandler(): org.xml.sax.ext.DeclHandler
                                        public needsTwoThreads(): boolean
                                        public dispatchCharactersEvents(arg0: int, arg1: org.xml.sax.ContentHandler, arg2: boolean): void
                                        protected static dispatchNodeData(arg0: org.w3c.dom.Node, arg1: org.xml.sax.ContentHandler, arg2: int): void
                                        public dispatchToEvents(arg0: int, arg1: org.xml.sax.ContentHandler): void
                                        public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                        public getSourceLocatorFor(arg0: int): javax.xml.transform.SourceLocator
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