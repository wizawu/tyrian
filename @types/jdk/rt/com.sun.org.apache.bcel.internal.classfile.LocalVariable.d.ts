declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace classfile {
                            class LocalVariable implements com.sun.org.apache.bcel.internal.Constants , java.lang.Cloneable , com.sun.org.apache.bcel.internal.classfile.Node , java.io.Serializable {
                                public constructor(arg0: com.sun.org.apache.bcel.internal.classfile.LocalVariable)
                                public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: com.sun.org.apache.bcel.internal.classfile.ConstantPool)
                                public accept(arg0: com.sun.org.apache.bcel.internal.classfile.Visitor): void
                                public dump(arg0: java.io.DataOutputStream): void
                                public getConstantPool(): com.sun.org.apache.bcel.internal.classfile.ConstantPool
                                public getLength(): int
                                public getName(): string
                                public getNameIndex(): int
                                public getSignature(): string
                                public getSignatureIndex(): int
                                public getIndex(): int
                                public getStartPC(): int
                                public setConstantPool(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantPool): void
                                public setLength(arg0: int): void
                                public setNameIndex(arg0: int): void
                                public setSignatureIndex(arg0: int): void
                                public setIndex(arg0: int): void
                                public setStartPC(arg0: int): void
                                public toString(): string
                                public copy(): com.sun.org.apache.bcel.internal.classfile.LocalVariable
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}