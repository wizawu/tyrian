declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        class XPathContext extends com.sun.org.apache.xml.internal.dtm.DTMManager {
                            protected m_dtmManager: com.sun.org.apache.xml.internal.dtm.DTMManager
                            public m_primaryReader: org.xml.sax.XMLReader
                            public static readonly RECURSIONLIMIT: int
                            public getDTMManager(): com.sun.org.apache.xml.internal.dtm.DTMManager
                            public setSecureProcessing(arg0: boolean): void
                            public isSecureProcessing(): boolean
                            public getDTM(arg0: javax.xml.transform.Source, arg1: boolean, arg2: com.sun.org.apache.xml.internal.dtm.DTMWSFilter | com.sun.org.apache.xml.internal.dtm.DTMWSFilter$$Lambda, arg3: boolean, arg4: boolean): com.sun.org.apache.xml.internal.dtm.DTM
                            public getDTM(arg0: int): com.sun.org.apache.xml.internal.dtm.DTM
                            public getDTMHandleFromNode(arg0: org.w3c.dom.Node): int
                            public getDTMIdentity(arg0: com.sun.org.apache.xml.internal.dtm.DTM): int
                            public createDocumentFragment(): com.sun.org.apache.xml.internal.dtm.DTM
                            public release(arg0: com.sun.org.apache.xml.internal.dtm.DTM, arg1: boolean): boolean
                            public createDTMIterator(arg0: java.lang.Object, arg1: int): com.sun.org.apache.xml.internal.dtm.DTMIterator
                            public createDTMIterator(arg0: java.lang.String | string, arg1: com.sun.org.apache.xml.internal.utils.PrefixResolver): com.sun.org.apache.xml.internal.dtm.DTMIterator
                            public createDTMIterator(arg0: int, arg1: com.sun.org.apache.xml.internal.dtm.DTMFilter, arg2: boolean): com.sun.org.apache.xml.internal.dtm.DTMIterator
                            public createDTMIterator(arg0: int): com.sun.org.apache.xml.internal.dtm.DTMIterator
                            public constructor()
                            public constructor(arg0: boolean)
                            public constructor(arg0: java.lang.Object)
                            public reset(): void
                            public setSAXLocator(arg0: javax.xml.transform.SourceLocator): void
                            public pushSAXLocator(arg0: javax.xml.transform.SourceLocator): void
                            public pushSAXLocatorNull(): void
                            public popSAXLocator(): void
                            public getSAXLocator(): javax.xml.transform.SourceLocator
                            public getOwnerObject(): java.lang.Object
                            public getVarStack(): com.sun.org.apache.xpath.internal.VariableStack
                            public setVarStack(arg0: com.sun.org.apache.xpath.internal.VariableStack): void
                            public getSourceTreeManager(): com.sun.org.apache.xpath.internal.SourceTreeManager
                            public setSourceTreeManager(arg0: com.sun.org.apache.xpath.internal.SourceTreeManager): void
                            public getErrorListener(): javax.xml.transform.ErrorListener
                            public setErrorListener(arg0: javax.xml.transform.ErrorListener): void
                            public getURIResolver(): javax.xml.transform.URIResolver
                            public setURIResolver(arg0: javax.xml.transform.URIResolver | javax.xml.transform.URIResolver$$Lambda): void
                            public getPrimaryReader(): org.xml.sax.XMLReader
                            public setPrimaryReader(arg0: org.xml.sax.XMLReader): void
                            public getContextNodeListsStack(): java.util.Stack
                            public setContextNodeListsStack(arg0: java.util.Stack): void
                            public getContextNodeList(): com.sun.org.apache.xml.internal.dtm.DTMIterator
                            public pushContextNodeList(arg0: com.sun.org.apache.xml.internal.dtm.DTMIterator): void
                            public popContextNodeList(): void
                            public getCurrentNodeStack(): com.sun.org.apache.xml.internal.utils.IntStack
                            public setCurrentNodeStack(arg0: com.sun.org.apache.xml.internal.utils.IntStack): void
                            public getCurrentNode(): int
                            public pushCurrentNodeAndExpression(arg0: int, arg1: int): void
                            public popCurrentNodeAndExpression(): void
                            public pushExpressionState(arg0: int, arg1: int, arg2: com.sun.org.apache.xml.internal.utils.PrefixResolver): void
                            public popExpressionState(): void
                            public pushCurrentNode(arg0: int): void
                            public popCurrentNode(): void
                            public pushPredicateRoot(arg0: int): void
                            public popPredicateRoot(): void
                            public getPredicateRoot(): int
                            public pushIteratorRoot(arg0: int): void
                            public popIteratorRoot(): void
                            public getIteratorRoot(): int
                            public getCurrentExpressionNodeStack(): com.sun.org.apache.xml.internal.utils.IntStack
                            public setCurrentExpressionNodeStack(arg0: com.sun.org.apache.xml.internal.utils.IntStack): void
                            public getPredicatePos(): int
                            public pushPredicatePos(arg0: int): void
                            public popPredicatePos(): void
                            public getCurrentExpressionNode(): int
                            public pushCurrentExpressionNode(arg0: int): void
                            public popCurrentExpressionNode(): void
                            public getNamespaceContext(): com.sun.org.apache.xml.internal.utils.PrefixResolver
                            public setNamespaceContext(arg0: com.sun.org.apache.xml.internal.utils.PrefixResolver): void
                            public pushNamespaceContext(arg0: com.sun.org.apache.xml.internal.utils.PrefixResolver): void
                            public pushNamespaceContextNull(): void
                            public popNamespaceContext(): void
                            public getAxesIteratorStackStacks(): java.util.Stack
                            public setAxesIteratorStackStacks(arg0: java.util.Stack): void
                            public pushSubContextList(arg0: com.sun.org.apache.xpath.internal.axes.SubContextList): void
                            public popSubContextList(): void
                            public getSubContextList(): com.sun.org.apache.xpath.internal.axes.SubContextList
                            public getCurrentNodeList(): com.sun.org.apache.xpath.internal.axes.SubContextList
                            public getContextNode(): int
                            public getContextNodes(): com.sun.org.apache.xml.internal.dtm.DTMIterator
                            public getExpressionContext(): com.sun.org.apache.xalan.internal.extensions.ExpressionContext
                            public getGlobalRTFDTM(): com.sun.org.apache.xml.internal.dtm.DTM
                            public getRTFDTM(): com.sun.org.apache.xml.internal.dtm.DTM
                            public pushRTFContext(): void
                            public popRTFContext(): void
                            public getDTMXRTreeFrag(arg0: int): com.sun.org.apache.xpath.internal.objects.DTMXRTreeFrag
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}