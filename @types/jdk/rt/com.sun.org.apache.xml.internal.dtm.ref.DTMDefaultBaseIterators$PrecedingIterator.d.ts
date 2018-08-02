declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace dtm {
                            namespace ref {
class DTMDefaultBaseIterators$PrecedingIterator extends com.sun.org.apache.xml.internal.dtm.ref.DTMDefaultBaseIterators$InternalAxisIteratorBase {
    protected _stack: int[]
    protected _sp: int
    protected _oldsp: int
    protected _markedsp: int
    protected _markedNode: int
    protected _markedDescendant: int
    public constructor(arg0: com.sun.org.apache.xml.internal.dtm.ref.DTMDefaultBaseIterators)
    public isReverse(): boolean
    public cloneIterator(): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
    public setStartNode(arg0: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
    public next(): int
    public reset(): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
    public setMark(): void
    public gotoMark(): void
    public static class: java.lang.Class<any>
}

                            }
                        }
                    }
                }
            }
        }
    }
}