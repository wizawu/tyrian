declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace classfile {
                            class LocalVariableTable extends com.sun.org.apache.bcel.internal.classfile.Attribute {
                                public constructor(arg0: com.sun.org.apache.bcel.internal.classfile.LocalVariableTable)
                                public constructor(arg0: int, arg1: int, arg2: com.sun.org.apache.bcel.internal.classfile.LocalVariable[], arg3: com.sun.org.apache.bcel.internal.classfile.ConstantPool)
                                public accept(arg0: com.sun.org.apache.bcel.internal.classfile.Visitor): void
                                public dump(arg0: java.io.DataOutputStream): void
                                public getLocalVariableTable(): com.sun.org.apache.bcel.internal.classfile.LocalVariable[]
                                public getLocalVariable(arg0: int): com.sun.org.apache.bcel.internal.classfile.LocalVariable
                                public setLocalVariableTable(arg0: com.sun.org.apache.bcel.internal.classfile.LocalVariable[]): void
                                public toString(): string
                                public copy(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantPool): com.sun.org.apache.bcel.internal.classfile.Attribute
                                public getTableLength(): int
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}