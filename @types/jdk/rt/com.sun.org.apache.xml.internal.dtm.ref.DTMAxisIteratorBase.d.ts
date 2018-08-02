declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace dtm {
                            namespace ref {
abstract class DTMAxisIteratorBase implements com.sun.org.apache.xml.internal.dtm.DTMAxisIterator {
    protected _last: int
    protected _position: int
    protected _markedNode: int
    protected _startNode: int
    protected _includeSelf: boolean
    protected _isRestartable: boolean
    public constructor()
    public getStartNode(): int
    public reset(): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
    public includeSelf(): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
    public getLast(): int
    public getPosition(): int
    public isReverse(): boolean
    public cloneIterator(): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
    protected returnNode(arg0: int): int
    protected resetPosition(): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
    public isDocOrdered(): boolean
    public getAxis(): int
    public setRestartable(arg0: boolean): void
    public getNodeByPosition(arg0: int): int
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