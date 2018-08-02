declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        class NodeSet implements org.w3c.dom.NodeList , org.w3c.dom.traversal.NodeIterator , java.lang.Cloneable , com.sun.org.apache.xpath.internal.axes.ContextNodeList {
                            protected m_next: int
                            protected m_mutable: boolean
                            protected m_cacheNodes: boolean
                            protected m_firstFree: int
                            public constructor()
                            public constructor(arg0: int)
                            public constructor(arg0: org.w3c.dom.NodeList)
                            public constructor(arg0: com.sun.org.apache.xpath.internal.NodeSet)
                            public constructor(arg0: org.w3c.dom.traversal.NodeIterator)
                            public constructor(arg0: org.w3c.dom.Node)
                            public getRoot(): org.w3c.dom.Node
                            public cloneWithReset(): org.w3c.dom.traversal.NodeIterator
                            public reset(): void
                            public getWhatToShow(): int
                            public getFilter(): org.w3c.dom.traversal.NodeFilter
                            public getExpandEntityReferences(): boolean
                            public nextNode(): org.w3c.dom.Node
                            public previousNode(): org.w3c.dom.Node
                            public detach(): void
                            public isFresh(): boolean
                            public runTo(arg0: int): void
                            public item(arg0: int): org.w3c.dom.Node
                            public getLength(): int
                            public addNode(arg0: org.w3c.dom.Node): void
                            public insertNode(arg0: org.w3c.dom.Node, arg1: int): void
                            public removeNode(arg0: org.w3c.dom.Node): void
                            public addNodes(arg0: org.w3c.dom.NodeList): void
                            public addNodes(arg0: com.sun.org.apache.xpath.internal.NodeSet): void
                            public addNodes(arg0: org.w3c.dom.traversal.NodeIterator): void
                            public addNodesInDocOrder(arg0: org.w3c.dom.NodeList, arg1: com.sun.org.apache.xpath.internal.XPathContext): void
                            public addNodesInDocOrder(arg0: org.w3c.dom.traversal.NodeIterator, arg1: com.sun.org.apache.xpath.internal.XPathContext): void
                            public addNodeInDocOrder(arg0: org.w3c.dom.Node, arg1: boolean, arg2: com.sun.org.apache.xpath.internal.XPathContext): int
                            public addNodeInDocOrder(arg0: org.w3c.dom.Node, arg1: com.sun.org.apache.xpath.internal.XPathContext): int
                            public getCurrentPos(): int
                            public setCurrentPos(arg0: int): void
                            public getCurrentNode(): org.w3c.dom.Node
                            public getShouldCacheNodes(): boolean
                            public setShouldCacheNodes(arg0: boolean): void
                            public getLast(): int
                            public setLast(arg0: int): void
                            public clone(): java.lang.Object
                            public size(): int
                            public addElement(arg0: org.w3c.dom.Node): void
                            public push(arg0: org.w3c.dom.Node): void
                            public pop(): org.w3c.dom.Node
                            public popAndTop(): org.w3c.dom.Node
                            public popQuick(): void
                            public peepOrNull(): org.w3c.dom.Node
                            public pushPair(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): void
                            public popPair(): void
                            public setTail(arg0: org.w3c.dom.Node): void
                            public setTailSub1(arg0: org.w3c.dom.Node): void
                            public peepTail(): org.w3c.dom.Node
                            public peepTailSub1(): org.w3c.dom.Node
                            public insertElementAt(arg0: org.w3c.dom.Node, arg1: int): void
                            public appendNodes(arg0: com.sun.org.apache.xpath.internal.NodeSet): void
                            public removeAllElements(): void
                            public removeElement(arg0: org.w3c.dom.Node): boolean
                            public removeElementAt(arg0: int): void
                            public setElementAt(arg0: org.w3c.dom.Node, arg1: int): void
                            public elementAt(arg0: int): org.w3c.dom.Node
                            public contains(arg0: org.w3c.dom.Node): boolean
                            public indexOf(arg0: org.w3c.dom.Node, arg1: int): int
                            public indexOf(arg0: org.w3c.dom.Node): int
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}