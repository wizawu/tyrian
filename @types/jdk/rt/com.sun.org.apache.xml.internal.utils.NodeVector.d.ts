declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace utils {
class NodeVector implements java.io.Serializable , java.lang.Cloneable {
    protected m_firstFree: int
    public constructor()
    public constructor(arg0: int)
    public clone(): java.lang.Object
    public size(): int
    public addElement(arg0: int): void
    public push(arg0: int): void
    public pop(): int
    public popAndTop(): int
    public popQuick(): void
    public peepOrNull(): int
    public pushPair(arg0: int, arg1: int): void
    public popPair(): void
    public setTail(arg0: int): void
    public setTailSub1(arg0: int): void
    public peepTail(): int
    public peepTailSub1(): int
    public insertInOrder(arg0: int): void
    public insertElementAt(arg0: int, arg1: int): void
    public appendNodes(arg0: com.sun.org.apache.xml.internal.utils.NodeVector): void
    public removeAllElements(): void
    public RemoveAllNoClear(): void
    public removeElement(arg0: int): boolean
    public removeElementAt(arg0: int): void
    public setElementAt(arg0: int, arg1: int): void
    public elementAt(arg0: int): int
    public contains(arg0: int): boolean
    public indexOf(arg0: int, arg1: int): int
    public indexOf(arg0: int): int
    public sort(arg0: int[], arg1: int, arg2: int): void
    public sort(): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}