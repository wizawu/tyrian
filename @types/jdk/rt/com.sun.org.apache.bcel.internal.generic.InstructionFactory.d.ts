declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace generic {
                            class InstructionFactory implements com.sun.org.apache.bcel.internal.generic.InstructionConstants , java.io.Serializable {
                                protected cg: com.sun.org.apache.bcel.internal.generic.ClassGen
                                protected cp: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen
                                public constructor(arg0: com.sun.org.apache.bcel.internal.generic.ClassGen, arg1: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen)
                                public constructor(arg0: com.sun.org.apache.bcel.internal.generic.ClassGen)
                                public constructor(arg0: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen)
                                public createInvoke(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.bcel.internal.generic.Type, arg3: com.sun.org.apache.bcel.internal.generic.Type[], arg4: short): com.sun.org.apache.bcel.internal.generic.InvokeInstruction
                                public createPrintln(arg0: java.lang.String | string): com.sun.org.apache.bcel.internal.generic.InstructionList
                                public createConstant(arg0: java.lang.Object): com.sun.org.apache.bcel.internal.generic.Instruction
                                public createAppend(arg0: com.sun.org.apache.bcel.internal.generic.Type): com.sun.org.apache.bcel.internal.generic.Instruction
                                public createFieldAccess(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.bcel.internal.generic.Type, arg3: short): com.sun.org.apache.bcel.internal.generic.FieldInstruction
                                public static createThis(): com.sun.org.apache.bcel.internal.generic.Instruction
                                public static createReturn(arg0: com.sun.org.apache.bcel.internal.generic.Type): com.sun.org.apache.bcel.internal.generic.ReturnInstruction
                                public static createBinaryOperation(arg0: java.lang.String | string, arg1: com.sun.org.apache.bcel.internal.generic.Type): com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
                                public static createPop(arg0: int): com.sun.org.apache.bcel.internal.generic.StackInstruction
                                public static createDup(arg0: int): com.sun.org.apache.bcel.internal.generic.StackInstruction
                                public static createDup_2(arg0: int): com.sun.org.apache.bcel.internal.generic.StackInstruction
                                public static createDup_1(arg0: int): com.sun.org.apache.bcel.internal.generic.StackInstruction
                                public static createStore(arg0: com.sun.org.apache.bcel.internal.generic.Type, arg1: int): com.sun.org.apache.bcel.internal.generic.LocalVariableInstruction
                                public static createLoad(arg0: com.sun.org.apache.bcel.internal.generic.Type, arg1: int): com.sun.org.apache.bcel.internal.generic.LocalVariableInstruction
                                public static createArrayLoad(arg0: com.sun.org.apache.bcel.internal.generic.Type): com.sun.org.apache.bcel.internal.generic.ArrayInstruction
                                public static createArrayStore(arg0: com.sun.org.apache.bcel.internal.generic.Type): com.sun.org.apache.bcel.internal.generic.ArrayInstruction
                                public createCast(arg0: com.sun.org.apache.bcel.internal.generic.Type, arg1: com.sun.org.apache.bcel.internal.generic.Type): com.sun.org.apache.bcel.internal.generic.Instruction
                                public createGetField(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.bcel.internal.generic.Type): com.sun.org.apache.bcel.internal.generic.GETFIELD
                                public createGetStatic(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.bcel.internal.generic.Type): com.sun.org.apache.bcel.internal.generic.GETSTATIC
                                public createPutField(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.bcel.internal.generic.Type): com.sun.org.apache.bcel.internal.generic.PUTFIELD
                                public createPutStatic(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.bcel.internal.generic.Type): com.sun.org.apache.bcel.internal.generic.PUTSTATIC
                                public createCheckCast(arg0: com.sun.org.apache.bcel.internal.generic.ReferenceType): com.sun.org.apache.bcel.internal.generic.CHECKCAST
                                public createInstanceOf(arg0: com.sun.org.apache.bcel.internal.generic.ReferenceType): com.sun.org.apache.bcel.internal.generic.INSTANCEOF
                                public createNew(arg0: com.sun.org.apache.bcel.internal.generic.ObjectType): com.sun.org.apache.bcel.internal.generic.NEW
                                public createNew(arg0: java.lang.String | string): com.sun.org.apache.bcel.internal.generic.NEW
                                public createNewArray(arg0: com.sun.org.apache.bcel.internal.generic.Type, arg1: short): com.sun.org.apache.bcel.internal.generic.Instruction
                                public static createNull(arg0: com.sun.org.apache.bcel.internal.generic.Type): com.sun.org.apache.bcel.internal.generic.Instruction
                                public static createBranchInstruction(arg0: short, arg1: com.sun.org.apache.bcel.internal.generic.InstructionHandle): com.sun.org.apache.bcel.internal.generic.BranchInstruction
                                public setClassGen(arg0: com.sun.org.apache.bcel.internal.generic.ClassGen): void
                                public getClassGen(): com.sun.org.apache.bcel.internal.generic.ClassGen
                                public setConstantPool(arg0: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen): void
                                public getConstantPool(): com.sun.org.apache.bcel.internal.generic.ConstantPoolGen
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}