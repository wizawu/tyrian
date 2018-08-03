declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace generic {
                            abstract class InvokeInstruction extends com.sun.org.apache.bcel.internal.generic.FieldOrMethod implements com.sun.org.apache.bcel.internal.generic.ExceptionThrower , com.sun.org.apache.bcel.internal.generic.TypedInstruction , com.sun.org.apache.bcel.internal.generic.StackConsumer , com.sun.org.apache.bcel.internal.generic.StackProducer {
                                protected constructor(arg0: short, arg1: int)
                                public toString(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantPool): string
                                public consumeStack(arg0: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen): int
                                public produceStack(arg0: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen): int
                                public getType(arg0: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen): com.sun.org.apache.bcel.internal.generic.Type
                                public getMethodName(arg0: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen): string
                                public getReturnType(arg0: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen): com.sun.org.apache.bcel.internal.generic.Type
                                public getArgumentTypes(arg0: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen): com.sun.org.apache.bcel.internal.generic.Type[]
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}