declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace dom {
abstract class NodeIteratorBase implements com.sun.org.apache.xalan.internal.xsltc.NodeIterator {
    protected _last: int
    protected _position: int
    protected _markedNode: int
    protected _startNode: int
    protected _includeSelf: boolean
    protected _isRestartable: boolean
    public constructor()
    public setRestartable(arg0: boolean): void
    public setStartNode(arg0: int): com.sun.org.apache.xalan.internal.xsltc.NodeIterator
    public reset(): com.sun.org.apache.xalan.internal.xsltc.NodeIterator
    public includeSelf(): com.sun.org.apache.xalan.internal.xsltc.NodeIterator
    public getLast(): int
    public getPosition(): int
    public isReverse(): boolean
    public cloneIterator(): com.sun.org.apache.xalan.internal.xsltc.NodeIterator
    protected returnNode(arg0: int): int
    protected resetPosition(): com.sun.org.apache.xalan.internal.xsltc.NodeIterator
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