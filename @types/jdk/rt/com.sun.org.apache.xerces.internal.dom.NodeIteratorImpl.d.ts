declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
                            class NodeIteratorImpl implements org.w3c.dom.traversal.NodeIterator {
                                public constructor(arg0: com.sun.org.apache.xerces.internal.dom.DocumentImpl, arg1: org.w3c.dom.Node, arg2: int, arg3: org.w3c.dom.traversal.NodeFilter | org.w3c.dom.traversal.NodeFilter$$Lambda, arg4: boolean)
                                public getRoot(): org.w3c.dom.Node
                                public getWhatToShow(): int
                                public getFilter(): org.w3c.dom.traversal.NodeFilter
                                public getExpandEntityReferences(): boolean
                                public nextNode(): org.w3c.dom.Node
                                public previousNode(): org.w3c.dom.Node
                                public removeNode(arg0: org.w3c.dom.Node): void
                                public detach(): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}