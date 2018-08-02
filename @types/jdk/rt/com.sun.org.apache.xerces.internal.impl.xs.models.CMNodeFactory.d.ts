declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                namespace models {
class CMNodeFactory {
    public constructor()
    public reset(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager): void
    public getCMLeafNode(arg0: int, arg1: java.lang.Object, arg2: int, arg3: int): com.sun.org.apache.xerces.internal.impl.dtd.models.CMNode
    public getCMRepeatingLeafNode(arg0: int, arg1: java.lang.Object, arg2: int, arg3: int, arg4: int, arg5: int): com.sun.org.apache.xerces.internal.impl.dtd.models.CMNode
    public getCMUniOpNode(arg0: int, arg1: com.sun.org.apache.xerces.internal.impl.dtd.models.CMNode): com.sun.org.apache.xerces.internal.impl.dtd.models.CMNode
    public getCMBinOpNode(arg0: int, arg1: com.sun.org.apache.xerces.internal.impl.dtd.models.CMNode, arg2: com.sun.org.apache.xerces.internal.impl.dtd.models.CMNode): com.sun.org.apache.xerces.internal.impl.dtd.models.CMNode
    public nodeCountCheck(): void
    public resetNodeCount(): void
    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
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