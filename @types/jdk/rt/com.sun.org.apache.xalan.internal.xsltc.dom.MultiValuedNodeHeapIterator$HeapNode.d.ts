declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace dom {
                                abstract class MultiValuedNodeHeapIterator$HeapNode implements java.lang.Cloneable {
                                    protected _node: int
                                    protected _markedNode: int
                                    protected _isStartSet: boolean
                                    public constructor(arg0: com.sun.org.apache.xalan.internal.xsltc.dom.MultiValuedNodeHeapIterator)
                                    public abstract step(): int
                                    public cloneHeapNode(): com.sun.org.apache.xalan.internal.xsltc.dom.MultiValuedNodeHeapIterator$HeapNode
                                    public setMark(): void
                                    public gotoMark(): void
                                    public abstract isLessThan(arg0: com.sun.org.apache.xalan.internal.xsltc.dom.MultiValuedNodeHeapIterator$HeapNode): boolean
                                    public abstract setStartNode(arg0: int): com.sun.org.apache.xalan.internal.xsltc.dom.MultiValuedNodeHeapIterator$HeapNode
                                    public abstract reset(): com.sun.org.apache.xalan.internal.xsltc.dom.MultiValuedNodeHeapIterator$HeapNode
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