declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
                            class TreeWalkerImpl implements org.w3c.dom.traversal.TreeWalker {
                                public constructor(arg0: org.w3c.dom.Node, arg1: int, arg2: org.w3c.dom.traversal.NodeFilter, arg3: boolean)
                                public getRoot(): org.w3c.dom.Node
                                public getWhatToShow(): int
                                public setWhatShow(arg0: int): void
                                public getFilter(): org.w3c.dom.traversal.NodeFilter
                                public getExpandEntityReferences(): boolean
                                public getCurrentNode(): org.w3c.dom.Node
                                public setCurrentNode(arg0: org.w3c.dom.Node): void
                                public parentNode(): org.w3c.dom.Node
                                public firstChild(): org.w3c.dom.Node
                                public lastChild(): org.w3c.dom.Node
                                public previousSibling(): org.w3c.dom.Node
                                public nextSibling(): org.w3c.dom.Node
                                public previousNode(): org.w3c.dom.Node
                                public nextNode(): org.w3c.dom.Node
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}