declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace classfile {
                            class StackMapEntry implements java.lang.Cloneable {
                                public constructor(arg0: int, arg1: int, arg2: com.sun.org.apache.bcel.internal.classfile.StackMapType[], arg3: int, arg4: com.sun.org.apache.bcel.internal.classfile.StackMapType[], arg5: com.sun.org.apache.bcel.internal.classfile.ConstantPool)
                                public dump(arg0: java.io.DataOutputStream): void
                                public toString(): string
                                public setByteCodeOffset(arg0: int): void
                                public getByteCodeOffset(): int
                                public setNumberOfLocals(arg0: int): void
                                public getNumberOfLocals(): int
                                public setTypesOfLocals(arg0: com.sun.org.apache.bcel.internal.classfile.StackMapType[]): void
                                public getTypesOfLocals(): com.sun.org.apache.bcel.internal.classfile.StackMapType[]
                                public setNumberOfStackItems(arg0: int): void
                                public getNumberOfStackItems(): int
                                public setTypesOfStackItems(arg0: com.sun.org.apache.bcel.internal.classfile.StackMapType[]): void
                                public getTypesOfStackItems(): com.sun.org.apache.bcel.internal.classfile.StackMapType[]
                                public copy(): com.sun.org.apache.bcel.internal.classfile.StackMapEntry
                                public accept(arg0: com.sun.org.apache.bcel.internal.classfile.Visitor): void
                                public getConstantPool(): com.sun.org.apache.bcel.internal.classfile.ConstantPool
                                public setConstantPool(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantPool): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}