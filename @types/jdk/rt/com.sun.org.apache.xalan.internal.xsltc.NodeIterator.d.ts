declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
interface NodeIterator extends java.lang.Cloneable {
    END: int
    next(): int
    reset(): com.sun.org.apache.xalan.internal.xsltc.NodeIterator
    getLast(): int
    getPosition(): int
    setMark(): void
    gotoMark(): void
    setStartNode(arg0: int): com.sun.org.apache.xalan.internal.xsltc.NodeIterator
    isReverse(): boolean
    cloneIterator(): com.sun.org.apache.xalan.internal.xsltc.NodeIterator
    setRestartable(arg0: boolean): void
}

                        }
                    }
                }
            }
        }
    }
}