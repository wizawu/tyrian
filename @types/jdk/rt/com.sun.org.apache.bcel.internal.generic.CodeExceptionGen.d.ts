declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace generic {
                            class CodeExceptionGen implements com.sun.org.apache.bcel.internal.generic.InstructionTargeter , java.lang.Cloneable , java.io.Serializable {
                                public constructor(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg1: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg2: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg3: com.sun.org.apache.bcel.internal.generic.ObjectType)
                                public getCodeException(arg0: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen): com.sun.org.apache.bcel.internal.classfile.CodeException
                                public setStartPC(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle): void
                                public setEndPC(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle): void
                                public setHandlerPC(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle): void
                                public updateTarget(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg1: com.sun.org.apache.bcel.internal.generic.InstructionHandle): void
                                public containsTarget(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle): boolean
                                public setCatchType(arg0: com.sun.org.apache.bcel.internal.generic.ObjectType): void
                                public getCatchType(): com.sun.org.apache.bcel.internal.generic.ObjectType
                                public getStartPC(): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public getEndPC(): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public getHandlerPC(): com.sun.org.apache.bcel.internal.generic.InstructionHandle
                                public toString(): string
                                public clone(): java.lang.Object
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}