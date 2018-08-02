declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace classfile {
                            class ConstantString extends com.sun.org.apache.bcel.internal.classfile.Constant implements com.sun.org.apache.bcel.internal.classfile.ConstantObject {
                                public constructor(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantString | com.sun.org.apache.bcel.internal.classfile.ConstantString$$Lambda)
                                public constructor(arg0: int)
                                public accept(arg0: com.sun.org.apache.bcel.internal.classfile.Visitor): void
                                public dump(arg0: java.io.DataOutputStream): void
                                public getStringIndex(): int
                                public setStringIndex(arg0: int): void
                                public toString(): string
                                public getConstantValue(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantPool): java.lang.Object
                                public getBytes(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantPool): string
                                public static class: java.lang.Class<any>
                            }
                            class ConstantString$$Lambda extends com.sun.org.apache.bcel.internal.classfile.Constant implements com.sun.org.apache.bcel.internal.classfile.ConstantObject {
                                public constructor(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantString | com.sun.org.apache.bcel.internal.classfile.ConstantString$$Lambda)
                            }
                        }
                    }
                }
            }
        }
    }
}