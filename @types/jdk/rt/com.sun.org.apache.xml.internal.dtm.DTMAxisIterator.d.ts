declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace dtm {
                            interface DTMAxisIterator extends java.lang.Cloneable {
                                END: int
                                next(): int
                                reset(): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                getLast(): int
                                getPosition(): int
                                setMark(): void
                                gotoMark(): void
                                setStartNode(arg0: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                getStartNode(): int
                                isReverse(): boolean
                                cloneIterator(): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                setRestartable(arg0: boolean): void
                                getNodeByPosition(arg0: int): int
                            }
                        }
                    }
                }
            }
        }
    }
}