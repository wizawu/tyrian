declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace axes {
                            abstract class LocPathIterator extends com.sun.org.apache.xpath.internal.axes.PredicatedNodeTest implements java.lang.Cloneable , com.sun.org.apache.xml.internal.dtm.DTMIterator , java.io.Serializable , com.sun.org.apache.xpath.internal.axes.PathComponent {
                                protected m_allowDetach: boolean
                                protected m_clones: com.sun.org.apache.xpath.internal.axes.IteratorPool
                                protected m_cdtm: com.sun.org.apache.xml.internal.dtm.DTM
                                public m_lastFetched: int
                                protected m_context: int
                                protected m_currentContextNode: int
                                protected m_pos: int
                                protected m_length: int
                                protected m_execContext: com.sun.org.apache.xpath.internal.XPathContext
                                protected constructor()
                                protected constructor(arg0: com.sun.org.apache.xml.internal.utils.PrefixResolver)
                                protected constructor(arg0: com.sun.org.apache.xpath.internal.compiler.Compiler, arg1: int, arg2: int)
                                protected constructor(arg0: com.sun.org.apache.xpath.internal.compiler.Compiler, arg1: int, arg2: int, arg3: boolean)
                                public getAnalysisBits(): int
                                public setEnvironment(arg0: java.lang.Object): void
                                public getDTM(arg0: int): com.sun.org.apache.xml.internal.dtm.DTM
                                public getDTMManager(): com.sun.org.apache.xml.internal.dtm.DTMManager
                                public execute(arg0: com.sun.org.apache.xpath.internal.XPathContext): com.sun.org.apache.xpath.internal.objects.XObject
                                public executeCharsToContentHandler(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: org.xml.sax.ContentHandler): void
                                public asIterator(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: int): com.sun.org.apache.xml.internal.dtm.DTMIterator
                                public isNodesetExpr(): boolean
                                public asNode(arg0: com.sun.org.apache.xpath.internal.XPathContext): int
                                public bool(arg0: com.sun.org.apache.xpath.internal.XPathContext): boolean
                                public setIsTopLevel(arg0: boolean): void
                                public getIsTopLevel(): boolean
                                public setRoot(arg0: int, arg1: java.lang.Object): void
                                protected setNextPosition(arg0: int): void
                                public getCurrentPos(): int
                                public setShouldCacheNodes(arg0: boolean): void
                                public isMutable(): boolean
                                public setCurrentPos(arg0: int): void
                                public incrementCurrentPos(): void
                                public size(): int
                                public item(arg0: int): int
                                public setItem(arg0: int, arg1: int): void
                                public getLength(): int
                                public isFresh(): boolean
                                public previousNode(): int
                                public getWhatToShow(): int
                                public getFilter(): com.sun.org.apache.xml.internal.dtm.DTMFilter
                                public getRoot(): int
                                public getExpandEntityReferences(): boolean
                                public allowDetachToRelease(arg0: boolean): void
                                public detach(): void
                                public reset(): void
                                public cloneWithReset(): com.sun.org.apache.xml.internal.dtm.DTMIterator
                                public nextNode(): int
                                protected returnNextNode(arg0: int): int
                                public getCurrentNode(): int
                                public runTo(arg0: int): void
                                public getFoundLast(): boolean
                                public getXPathContext(): com.sun.org.apache.xpath.internal.XPathContext
                                public getContext(): int
                                public getCurrentContextNode(): int
                                public setCurrentContextNode(arg0: int): void
                                public getPrefixResolver(): com.sun.org.apache.xml.internal.utils.PrefixResolver
                                public callVisitors(arg0: com.sun.org.apache.xpath.internal.ExpressionOwner, arg1: com.sun.org.apache.xpath.internal.XPathVisitor): void
                                public isDocOrdered(): boolean
                                public getAxis(): int
                                public getLastPos(arg0: com.sun.org.apache.xpath.internal.XPathContext): int
                                public static class: java.lang.Class<any>
                            }
                            abstract class LocPathIterator$$Lambda extends com.sun.org.apache.xpath.internal.axes.PredicatedNodeTest implements java.lang.Cloneable , com.sun.org.apache.xml.internal.dtm.DTMIterator , java.io.Serializable , com.sun.org.apache.xpath.internal.axes.PathComponent {
                                protected m_allowDetach: boolean
                            }
                        }
                    }
                }
            }
        }
    }
}