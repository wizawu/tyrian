declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace dtm {
interface DTMIterator {
    FILTER_ACCEPT: short
    FILTER_REJECT: short
    FILTER_SKIP: short
    getDTM(arg0: int): com.sun.org.apache.xml.internal.dtm.DTM
    getDTMManager(): com.sun.org.apache.xml.internal.dtm.DTMManager
    getRoot(): int
    setRoot(arg0: int, arg1: java.lang.Object): void
    reset(): void
    getWhatToShow(): int
    getExpandEntityReferences(): boolean
    nextNode(): int
    previousNode(): int
    detach(): void
    allowDetachToRelease(arg0: boolean): void
    getCurrentNode(): int
    isFresh(): boolean
    setShouldCacheNodes(arg0: boolean): void
    isMutable(): boolean
    getCurrentPos(): int
    runTo(arg0: int): void
    setCurrentPos(arg0: int): void
    item(arg0: int): int
    setItem(arg0: int, arg1: int): void
    getLength(): int
    cloneWithReset(): com.sun.org.apache.xml.internal.dtm.DTMIterator
    clone(): java.lang.Object
    isDocOrdered(): boolean
    getAxis(): int
}

                        }
                    }
                }
            }
        }
    }
}