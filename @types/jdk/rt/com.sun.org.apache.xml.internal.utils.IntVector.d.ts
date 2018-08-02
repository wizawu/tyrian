declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace utils {
class IntVector implements java.lang.Cloneable {
    protected m_blocksize: int
    protected m_map: int[]
    protected m_firstFree: int
    protected m_mapSize: int
    public constructor()
    public constructor(arg0: int)
    public constructor(arg0: int, arg1: int)
    public constructor(arg0: com.sun.org.apache.xml.internal.utils.IntVector)
    public size(): int
    public setSize(arg0: int): void
    public addElement(arg0: int): void
    public addElements(arg0: int, arg1: int): void
    public addElements(arg0: int): void
    public insertElementAt(arg0: int, arg1: int): void
    public removeAllElements(): void
    public removeElement(arg0: int): boolean
    public removeElementAt(arg0: int): void
    public setElementAt(arg0: int, arg1: int): void
    public elementAt(arg0: int): int
    public contains(arg0: int): boolean
    public indexOf(arg0: int, arg1: int): int
    public indexOf(arg0: int): int
    public lastIndexOf(arg0: int): int
    public clone(): java.lang.Object
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}