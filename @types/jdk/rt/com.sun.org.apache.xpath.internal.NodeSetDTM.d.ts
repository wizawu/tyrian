declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
class NodeSetDTM extends com.sun.org.apache.xml.internal.utils.NodeVector implements com.sun.org.apache.xml.internal.dtm.DTMIterator , java.lang.Cloneable {
    protected m_next: int
    protected m_mutable: boolean
    protected m_cacheNodes: boolean
    protected m_root: int
    public constructor(arg0: com.sun.org.apache.xml.internal.dtm.DTMManager)
    public constructor(arg0: int, arg1: int, arg2: com.sun.org.apache.xml.internal.dtm.DTMManager)
    public constructor(arg0: com.sun.org.apache.xpath.internal.NodeSetDTM)
    public constructor(arg0: com.sun.org.apache.xml.internal.dtm.DTMIterator)
    public constructor(arg0: org.w3c.dom.traversal.NodeIterator, arg1: com.sun.org.apache.xpath.internal.XPathContext)
    public constructor(arg0: org.w3c.dom.NodeList, arg1: com.sun.org.apache.xpath.internal.XPathContext)
    public constructor(arg0: int, arg1: com.sun.org.apache.xml.internal.dtm.DTMManager)
    public setEnvironment(arg0: java.lang.Object): void
    public getRoot(): int
    public setRoot(arg0: int, arg1: java.lang.Object): void
    public clone(): java.lang.Object
    public cloneWithReset(): com.sun.org.apache.xml.internal.dtm.DTMIterator
    public reset(): void
    public getWhatToShow(): int
    public getFilter(): com.sun.org.apache.xml.internal.dtm.DTMFilter
    public getExpandEntityReferences(): boolean
    public getDTM(arg0: int): com.sun.org.apache.xml.internal.dtm.DTM
    public getDTMManager(): com.sun.org.apache.xml.internal.dtm.DTMManager
    public nextNode(): int
    public previousNode(): int
    public detach(): void
    public allowDetachToRelease(arg0: boolean): void
    public isFresh(): boolean
    public runTo(arg0: int): void
    public item(arg0: int): int
    public getLength(): int
    public addNode(arg0: int): void
    public insertNode(arg0: int, arg1: int): void
    public removeNode(arg0: int): void
    public addNodes(arg0: com.sun.org.apache.xml.internal.dtm.DTMIterator): void
    public addNodesInDocOrder(arg0: com.sun.org.apache.xml.internal.dtm.DTMIterator, arg1: com.sun.org.apache.xpath.internal.XPathContext): void
    public addNodeInDocOrder(arg0: int, arg1: boolean, arg2: com.sun.org.apache.xpath.internal.XPathContext): int
    public addNodeInDocOrder(arg0: int, arg1: com.sun.org.apache.xpath.internal.XPathContext): int
    public size(): int
    public addElement(arg0: int): void
    public insertElementAt(arg0: int, arg1: int): void
    public appendNodes(arg0: com.sun.org.apache.xml.internal.utils.NodeVector): void
    public removeAllElements(): void
    public removeElement(arg0: int): boolean
    public removeElementAt(arg0: int): void
    public setElementAt(arg0: int, arg1: int): void
    public setItem(arg0: int, arg1: int): void
    public elementAt(arg0: int): int
    public contains(arg0: int): boolean
    public indexOf(arg0: int, arg1: int): int
    public indexOf(arg0: int): int
    public getCurrentPos(): int
    public setCurrentPos(arg0: int): void
    public getCurrentNode(): int
    public getShouldCacheNodes(): boolean
    public setShouldCacheNodes(arg0: boolean): void
    public isMutable(): boolean
    public getLast(): int
    public setLast(arg0: int): void
    public isDocOrdered(): boolean
    public getAxis(): int
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}