declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace generic {
interface InstructionConstants {
    NOP: com.sun.org.apache.bcel.internal.generic.Instruction
    ACONST_NULL: com.sun.org.apache.bcel.internal.generic.Instruction
    ICONST_M1: com.sun.org.apache.bcel.internal.generic.Instruction
    ICONST_0: com.sun.org.apache.bcel.internal.generic.Instruction
    ICONST_1: com.sun.org.apache.bcel.internal.generic.Instruction
    ICONST_2: com.sun.org.apache.bcel.internal.generic.Instruction
    ICONST_3: com.sun.org.apache.bcel.internal.generic.Instruction
    ICONST_4: com.sun.org.apache.bcel.internal.generic.Instruction
    ICONST_5: com.sun.org.apache.bcel.internal.generic.Instruction
    LCONST_0: com.sun.org.apache.bcel.internal.generic.Instruction
    LCONST_1: com.sun.org.apache.bcel.internal.generic.Instruction
    FCONST_0: com.sun.org.apache.bcel.internal.generic.Instruction
    FCONST_1: com.sun.org.apache.bcel.internal.generic.Instruction
    FCONST_2: com.sun.org.apache.bcel.internal.generic.Instruction
    DCONST_0: com.sun.org.apache.bcel.internal.generic.Instruction
    DCONST_1: com.sun.org.apache.bcel.internal.generic.Instruction
    IALOAD: com.sun.org.apache.bcel.internal.generic.ArrayInstruction
    LALOAD: com.sun.org.apache.bcel.internal.generic.ArrayInstruction
    FALOAD: com.sun.org.apache.bcel.internal.generic.ArrayInstruction
    DALOAD: com.sun.org.apache.bcel.internal.generic.ArrayInstruction
    AALOAD: com.sun.org.apache.bcel.internal.generic.ArrayInstruction
    BALOAD: com.sun.org.apache.bcel.internal.generic.ArrayInstruction
    CALOAD: com.sun.org.apache.bcel.internal.generic.ArrayInstruction
    SALOAD: com.sun.org.apache.bcel.internal.generic.ArrayInstruction
    IASTORE: com.sun.org.apache.bcel.internal.generic.ArrayInstruction
    LASTORE: com.sun.org.apache.bcel.internal.generic.ArrayInstruction
    FASTORE: com.sun.org.apache.bcel.internal.generic.ArrayInstruction
    DASTORE: com.sun.org.apache.bcel.internal.generic.ArrayInstruction
    AASTORE: com.sun.org.apache.bcel.internal.generic.ArrayInstruction
    BASTORE: com.sun.org.apache.bcel.internal.generic.ArrayInstruction
    CASTORE: com.sun.org.apache.bcel.internal.generic.ArrayInstruction
    SASTORE: com.sun.org.apache.bcel.internal.generic.ArrayInstruction
    POP: com.sun.org.apache.bcel.internal.generic.StackInstruction
    POP2: com.sun.org.apache.bcel.internal.generic.StackInstruction
    DUP: com.sun.org.apache.bcel.internal.generic.StackInstruction
    DUP_X1: com.sun.org.apache.bcel.internal.generic.StackInstruction
    DUP_X2: com.sun.org.apache.bcel.internal.generic.StackInstruction
    DUP2: com.sun.org.apache.bcel.internal.generic.StackInstruction
    DUP2_X1: com.sun.org.apache.bcel.internal.generic.StackInstruction
    DUP2_X2: com.sun.org.apache.bcel.internal.generic.StackInstruction
    SWAP: com.sun.org.apache.bcel.internal.generic.StackInstruction
    IADD: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    LADD: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    FADD: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    DADD: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    ISUB: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    LSUB: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    FSUB: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    DSUB: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    IMUL: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    LMUL: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    FMUL: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    DMUL: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    IDIV: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    LDIV: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    FDIV: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    DDIV: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    IREM: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    LREM: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    FREM: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    DREM: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    INEG: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    LNEG: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    FNEG: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    DNEG: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    ISHL: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    LSHL: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    ISHR: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    LSHR: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    IUSHR: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    LUSHR: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    IAND: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    LAND: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    IOR: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    LOR: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    IXOR: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    LXOR: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction
    I2L: com.sun.org.apache.bcel.internal.generic.ConversionInstruction
    I2F: com.sun.org.apache.bcel.internal.generic.ConversionInstruction
    I2D: com.sun.org.apache.bcel.internal.generic.ConversionInstruction
    L2I: com.sun.org.apache.bcel.internal.generic.ConversionInstruction
    L2F: com.sun.org.apache.bcel.internal.generic.ConversionInstruction
    L2D: com.sun.org.apache.bcel.internal.generic.ConversionInstruction
    F2I: com.sun.org.apache.bcel.internal.generic.ConversionInstruction
    F2L: com.sun.org.apache.bcel.internal.generic.ConversionInstruction
    F2D: com.sun.org.apache.bcel.internal.generic.ConversionInstruction
    D2I: com.sun.org.apache.bcel.internal.generic.ConversionInstruction
    D2L: com.sun.org.apache.bcel.internal.generic.ConversionInstruction
    D2F: com.sun.org.apache.bcel.internal.generic.ConversionInstruction
    I2B: com.sun.org.apache.bcel.internal.generic.ConversionInstruction
    I2C: com.sun.org.apache.bcel.internal.generic.ConversionInstruction
    I2S: com.sun.org.apache.bcel.internal.generic.ConversionInstruction
    LCMP: com.sun.org.apache.bcel.internal.generic.Instruction
    FCMPL: com.sun.org.apache.bcel.internal.generic.Instruction
    FCMPG: com.sun.org.apache.bcel.internal.generic.Instruction
    DCMPL: com.sun.org.apache.bcel.internal.generic.Instruction
    DCMPG: com.sun.org.apache.bcel.internal.generic.Instruction
    IRETURN: com.sun.org.apache.bcel.internal.generic.ReturnInstruction
    LRETURN: com.sun.org.apache.bcel.internal.generic.ReturnInstruction
    FRETURN: com.sun.org.apache.bcel.internal.generic.ReturnInstruction
    DRETURN: com.sun.org.apache.bcel.internal.generic.ReturnInstruction
    ARETURN: com.sun.org.apache.bcel.internal.generic.ReturnInstruction
    RETURN: com.sun.org.apache.bcel.internal.generic.ReturnInstruction
    ARRAYLENGTH: com.sun.org.apache.bcel.internal.generic.Instruction
    ATHROW: com.sun.org.apache.bcel.internal.generic.Instruction
    MONITORENTER: com.sun.org.apache.bcel.internal.generic.Instruction
    MONITOREXIT: com.sun.org.apache.bcel.internal.generic.Instruction
    THIS: com.sun.org.apache.bcel.internal.generic.LocalVariableInstruction
    ALOAD_0: com.sun.org.apache.bcel.internal.generic.LocalVariableInstruction
    ALOAD_1: com.sun.org.apache.bcel.internal.generic.LocalVariableInstruction
    ALOAD_2: com.sun.org.apache.bcel.internal.generic.LocalVariableInstruction
    ILOAD_0: com.sun.org.apache.bcel.internal.generic.LocalVariableInstruction
    ILOAD_1: com.sun.org.apache.bcel.internal.generic.LocalVariableInstruction
    ILOAD_2: com.sun.org.apache.bcel.internal.generic.LocalVariableInstruction
    ASTORE_0: com.sun.org.apache.bcel.internal.generic.LocalVariableInstruction
    ASTORE_1: com.sun.org.apache.bcel.internal.generic.LocalVariableInstruction
    ASTORE_2: com.sun.org.apache.bcel.internal.generic.LocalVariableInstruction
    ISTORE_0: com.sun.org.apache.bcel.internal.generic.LocalVariableInstruction
    ISTORE_1: com.sun.org.apache.bcel.internal.generic.LocalVariableInstruction
    ISTORE_2: com.sun.org.apache.bcel.internal.generic.LocalVariableInstruction
    INSTRUCTIONS: com.sun.org.apache.bcel.internal.generic.Instruction[]
    bla: com.sun.org.apache.bcel.internal.generic.InstructionConstants$Clinit
}

                        }
                    }
                }
            }
        }
    }
}