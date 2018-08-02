declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace classfile {
                            class Method extends com.sun.org.apache.bcel.internal.classfile.FieldOrMethod {
                                public constructor()
                                public constructor(arg0: com.sun.org.apache.bcel.internal.classfile.Method)
                                public constructor(arg0: int, arg1: int, arg2: int, arg3: com.sun.org.apache.bcel.internal.classfile.Attribute[], arg4: com.sun.org.apache.bcel.internal.classfile.ConstantPool)
                                public accept(arg0: com.sun.org.apache.bcel.internal.classfile.Visitor): void
                                public getCode(): com.sun.org.apache.bcel.internal.classfile.Code
                                public getExceptionTable(): com.sun.org.apache.bcel.internal.classfile.ExceptionTable
                                public getLocalVariableTable(): com.sun.org.apache.bcel.internal.classfile.LocalVariableTable
                                public getLineNumberTable(): com.sun.org.apache.bcel.internal.classfile.LineNumberTable
                                public toString(): string
                                public copy(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantPool): com.sun.org.apache.bcel.internal.classfile.Method
                                public getReturnType(): com.sun.org.apache.bcel.internal.generic.Type
                                public getArgumentTypes(): com.sun.org.apache.bcel.internal.generic.Type[]
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}