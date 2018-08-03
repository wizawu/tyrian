declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace axes {
                            class NodeSequence extends com.sun.org.apache.xpath.internal.objects.XObject implements com.sun.org.apache.xml.internal.dtm.DTMIterator , java.lang.Cloneable , com.sun.org.apache.xpath.internal.axes.PathComponent {
                                protected m_last: int
                                protected m_next: int
                                protected m_iter: com.sun.org.apache.xml.internal.dtm.DTMIterator
                                protected m_dtmMgr: com.sun.org.apache.xml.internal.dtm.DTMManager
                                protected getVector(): com.sun.org.apache.xml.internal.utils.NodeVector
                                protected SetVector(arg0: com.sun.org.apache.xml.internal.utils.NodeVector): void
                                public hasCache(): boolean
                                public setIter(arg0: com.sun.org.apache.xml.internal.dtm.DTMIterator): void
                                public getContainedIter(): com.sun.org.apache.xml.internal.dtm.DTMIterator
                                public constructor(arg0: java.lang.Object)
                                public constructor()
                                public getDTM(arg0: int): com.sun.org.apache.xml.internal.dtm.DTM
                                public getDTMManager(): com.sun.org.apache.xml.internal.dtm.DTMManager
                                public getRoot(): int
                                public setRoot(arg0: int, arg1: java.lang.Object): void
                                public reset(): void
                                public getWhatToShow(): int
                                public getExpandEntityReferences(): boolean
                                public nextNode(): int
                                public previousNode(): int
                                public detach(): void
                                public allowDetachToRelease(arg0: boolean): void
                                public getCurrentNode(): int
                                public isFresh(): boolean
                                public setShouldCacheNodes(arg0: boolean): void
                                public isMutable(): boolean
                                public getCurrentPos(): int
                                public runTo(arg0: int): void
                                public setCurrentPos(arg0: int): void
                                public item(arg0: int): int
                                public setItem(arg0: int, arg1: int): void
                                public getLength(): int
                                public cloneWithReset(): com.sun.org.apache.xml.internal.dtm.DTMIterator
                                public clone(): java.lang.Object
                                public isDocOrdered(): boolean
                                public getAxis(): int
                                public getAnalysisBits(): int
                                public fixupVariables(arg0: java.util.Vector, arg1: int): void
                                protected addNodeInDocOrder(arg0: int): int
                                protected setObject(arg0: java.lang.Object): void
                                protected getIteratorCache(): com.sun.org.apache.xpath.internal.axes.NodeSequence$IteratorCache
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}