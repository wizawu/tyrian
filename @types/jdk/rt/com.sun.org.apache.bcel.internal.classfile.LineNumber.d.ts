declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace classfile {
                            class LineNumber implements java.lang.Cloneable , com.sun.org.apache.bcel.internal.classfile.Node , java.io.Serializable {
                                public constructor(arg0: com.sun.org.apache.bcel.internal.classfile.LineNumber)
                                public constructor(arg0: int, arg1: int)
                                public accept(arg0: com.sun.org.apache.bcel.internal.classfile.Visitor): void
                                public dump(arg0: java.io.DataOutputStream): void
                                public getLineNumber(): int
                                public getStartPC(): int
                                public setLineNumber(arg0: int): void
                                public setStartPC(arg0: int): void
                                public toString(): string
                                public copy(): com.sun.org.apache.bcel.internal.classfile.LineNumber
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}