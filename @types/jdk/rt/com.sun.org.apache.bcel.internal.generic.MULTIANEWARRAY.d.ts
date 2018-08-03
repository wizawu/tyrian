declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace generic {
                            class MULTIANEWARRAY extends com.sun.org.apache.bcel.internal.generic.CPInstruction implements com.sun.org.apache.bcel.internal.generic.LoadClass , com.sun.org.apache.bcel.internal.generic.AllocationInstruction , com.sun.org.apache.bcel.internal.generic.ExceptionThrower {
                                public constructor(arg0: int, arg1: short)
                                public dump(arg0: java.io.DataOutputStream): void
                                protected initFromFile(arg0: com.sun.org.apache.bcel.internal.util.ByteSequence, arg1: boolean): void
                                public getDimensions(): short
                                public toString(arg0: boolean): string
                                public toString(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantPool): string
                                public consumeStack(arg0: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen): int
                                public getExceptions(): java.lang.Class[]
                                public getLoadClassType(arg0: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen): com.sun.org.apache.bcel.internal.generic.ObjectType
                                public accept(arg0: com.sun.org.apache.bcel.internal.generic.Visitor): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}