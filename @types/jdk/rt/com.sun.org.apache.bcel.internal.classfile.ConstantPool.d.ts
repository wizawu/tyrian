declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace classfile {
                            class ConstantPool implements java.lang.Cloneable , com.sun.org.apache.bcel.internal.classfile.Node , java.io.Serializable {
                                public constructor(arg0: com.sun.org.apache.bcel.internal.classfile.Constant[])
                                public accept(arg0: com.sun.org.apache.bcel.internal.classfile.Visitor): void
                                public constantToString(arg0: com.sun.org.apache.bcel.internal.classfile.Constant): string
                                public constantToString(arg0: int, arg1: byte): string
                                public dump(arg0: java.io.DataOutputStream): void
                                public getConstant(arg0: int): com.sun.org.apache.bcel.internal.classfile.Constant
                                public getConstant(arg0: int, arg1: byte): com.sun.org.apache.bcel.internal.classfile.Constant
                                public getConstantPool(): com.sun.org.apache.bcel.internal.classfile.Constant[]
                                public getConstantString(arg0: int, arg1: byte): string
                                public getLength(): int
                                public setConstant(arg0: int, arg1: com.sun.org.apache.bcel.internal.classfile.Constant): void
                                public setConstantPool(arg0: com.sun.org.apache.bcel.internal.classfile.Constant[]): void
                                public toString(): string
                                public copy(): com.sun.org.apache.bcel.internal.classfile.ConstantPool
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}