declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace classfile {
                            abstract class FieldOrMethod extends com.sun.org.apache.bcel.internal.classfile.AccessFlags implements java.lang.Cloneable , com.sun.org.apache.bcel.internal.classfile.Node {
                                protected name_index: int
                                protected signature_index: int
                                protected attributes_count: int
                                protected attributes: com.sun.org.apache.bcel.internal.classfile.Attribute[]
                                protected constant_pool: com.sun.org.apache.bcel.internal.classfile.ConstantPool
                                protected constructor(arg0: com.sun.org.apache.bcel.internal.classfile.FieldOrMethod)
                                protected constructor(arg0: java.io.DataInputStream, arg1: com.sun.org.apache.bcel.internal.classfile.ConstantPool)
                                protected constructor(arg0: int, arg1: int, arg2: int, arg3: com.sun.org.apache.bcel.internal.classfile.Attribute[], arg4: com.sun.org.apache.bcel.internal.classfile.ConstantPool)
                                public dump(arg0: java.io.DataOutputStream): void
                                public getAttributes(): com.sun.org.apache.bcel.internal.classfile.Attribute[]
                                public setAttributes(arg0: com.sun.org.apache.bcel.internal.classfile.Attribute[]): void
                                public getConstantPool(): com.sun.org.apache.bcel.internal.classfile.ConstantPool
                                public setConstantPool(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantPool): void
                                public getNameIndex(): int
                                public setNameIndex(arg0: int): void
                                public getSignatureIndex(): int
                                public setSignatureIndex(arg0: int): void
                                public getName(): string
                                public getSignature(): string
                                protected copy_(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantPool): com.sun.org.apache.bcel.internal.classfile.FieldOrMethod
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}