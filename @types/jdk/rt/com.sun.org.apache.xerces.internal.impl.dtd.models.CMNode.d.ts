declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace dtd {
                                namespace models {
abstract class CMNode {
    public constructor(arg0: int)
    public isNullable(): boolean
    public type(): int
    public firstPos(): com.sun.org.apache.xerces.internal.impl.dtd.models.CMStateSet
    public lastPos(): com.sun.org.apache.xerces.internal.impl.dtd.models.CMStateSet
    public setMaxStates(arg0: int): void
    public setUserData(arg0: java.lang.Object): void
    public getUserData(): java.lang.Object
    protected calcFirstPos(arg0: com.sun.org.apache.xerces.internal.impl.dtd.models.CMStateSet): void
    protected calcLastPos(arg0: com.sun.org.apache.xerces.internal.impl.dtd.models.CMStateSet): void
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
}