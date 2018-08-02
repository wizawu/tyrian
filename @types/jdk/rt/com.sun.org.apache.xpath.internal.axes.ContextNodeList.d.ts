declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace axes {
                            interface ContextNodeList {
                                getCurrentNode(): org.w3c.dom.Node
                                getCurrentPos(): int
                                reset(): void
                                setShouldCacheNodes(arg0: boolean): void
                                runTo(arg0: int): void
                                setCurrentPos(arg0: int): void
                                size(): int
                                isFresh(): boolean
                                cloneWithReset(): org.w3c.dom.traversal.NodeIterator
                                clone(): java.lang.Object
                                getLast(): int
                                setLast(arg0: int): void
                            }
                        }
                    }
                }
            }
        }
    }
}