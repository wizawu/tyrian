declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace classfile {
                            class Code extends com.sun.org.apache.bcel.internal.classfile.Attribute {
                                public constructor(arg0: com.sun.org.apache.bcel.internal.classfile.Code)
                                public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: byte[], arg5: com.sun.org.apache.bcel.internal.classfile.CodeException[], arg6: com.sun.org.apache.bcel.internal.classfile.Attribute[], arg7: com.sun.org.apache.bcel.internal.classfile.ConstantPool)
                                public accept(arg0: com.sun.org.apache.bcel.internal.classfile.Visitor): void
                                public dump(arg0: java.io.DataOutputStream): void
                                public getAttributes(): com.sun.org.apache.bcel.internal.classfile.Attribute[]
                                public getLineNumberTable(): com.sun.org.apache.bcel.internal.classfile.LineNumberTable
                                public getLocalVariableTable(): com.sun.org.apache.bcel.internal.classfile.LocalVariableTable
                                public getCode(): byte[]
                                public getExceptionTable(): com.sun.org.apache.bcel.internal.classfile.CodeException[]
                                public getMaxLocals(): int
                                public getMaxStack(): int
                                public setAttributes(arg0: com.sun.org.apache.bcel.internal.classfile.Attribute[]): void
                                public setCode(arg0: byte[]): void
                                public setExceptionTable(arg0: com.sun.org.apache.bcel.internal.classfile.CodeException[]): void
                                public setMaxLocals(arg0: int): void
                                public setMaxStack(arg0: int): void
                                public toString(arg0: boolean): string
                                public toString(): string
                                public copy(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantPool): com.sun.org.apache.bcel.internal.classfile.Attribute
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}