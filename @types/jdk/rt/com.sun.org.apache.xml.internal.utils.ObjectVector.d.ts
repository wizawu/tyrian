declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace utils {
class ObjectVector implements java.lang.Cloneable {
    protected m_blocksize: int
    protected m_map: java.lang.Object[]
    protected m_firstFree: int
    protected m_mapSize: int
    public constructor()
    public constructor(arg0: int)
    public constructor(arg0: int, arg1: int)
    public constructor(arg0: com.sun.org.apache.xml.internal.utils.ObjectVector)
    public size(): int
    public setSize(arg0: int): void
    public addElement(arg0: java.lang.Object): void
    public addElements(arg0: java.lang.Object, arg1: int): void
    public addElements(arg0: int): void
    public insertElementAt(arg0: java.lang.Object, arg1: int): void
    public removeAllElements(): void
    public removeElement(arg0: java.lang.Object): boolean
    public removeElementAt(arg0: int): void
    public setElementAt(arg0: java.lang.Object, arg1: int): void
    public elementAt(arg0: int): java.lang.Object
    public contains(arg0: java.lang.Object): boolean
    public indexOf(arg0: java.lang.Object, arg1: int): int
    public indexOf(arg0: java.lang.Object): int
    public lastIndexOf(arg0: java.lang.Object): int
    public setToSize(arg0: int): void
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