declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace generic {
                            abstract class EmptyVisitor implements com.sun.org.apache.bcel.internal.generic.Visitor {
                                public constructor()
                                public visitStackInstruction(arg0: com.sun.org.apache.bcel.internal.generic.StackInstruction): void
                                public visitLocalVariableInstruction(arg0: com.sun.org.apache.bcel.internal.generic.LocalVariableInstruction): void
                                public visitBranchInstruction(arg0: com.sun.org.apache.bcel.internal.generic.BranchInstruction): void
                                public visitLoadClass(arg0: com.sun.org.apache.bcel.internal.generic.LoadClass): void
                                public visitFieldInstruction(arg0: com.sun.org.apache.bcel.internal.generic.FieldInstruction): void
                                public visitIfInstruction(arg0: com.sun.org.apache.bcel.internal.generic.IfInstruction): void
                                public visitConversionInstruction(arg0: com.sun.org.apache.bcel.internal.generic.ConversionInstruction): void
                                public visitPopInstruction(arg0: com.sun.org.apache.bcel.internal.generic.PopInstruction): void
                                public visitJsrInstruction(arg0: com.sun.org.apache.bcel.internal.generic.JsrInstruction): void
                                public visitGotoInstruction(arg0: com.sun.org.apache.bcel.internal.generic.GotoInstruction): void
                                public visitStoreInstruction(arg0: com.sun.org.apache.bcel.internal.generic.StoreInstruction): void
                                public visitTypedInstruction(arg0: com.sun.org.apache.bcel.internal.generic.TypedInstruction | com.sun.org.apache.bcel.internal.generic.TypedInstruction$$Lambda): void
                                public visitSelect(arg0: com.sun.org.apache.bcel.internal.generic.Select): void
                                public visitUnconditionalBranch(arg0: com.sun.org.apache.bcel.internal.generic.UnconditionalBranch): void
                                public visitPushInstruction(arg0: com.sun.org.apache.bcel.internal.generic.PushInstruction): void
                                public visitArithmeticInstruction(arg0: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction): void
                                public visitCPInstruction(arg0: com.sun.org.apache.bcel.internal.generic.CPInstruction): void
                                public visitInvokeInstruction(arg0: com.sun.org.apache.bcel.internal.generic.InvokeInstruction): void
                                public visitArrayInstruction(arg0: com.sun.org.apache.bcel.internal.generic.ArrayInstruction): void
                                public visitAllocationInstruction(arg0: com.sun.org.apache.bcel.internal.generic.AllocationInstruction): void
                                public visitReturnInstruction(arg0: com.sun.org.apache.bcel.internal.generic.ReturnInstruction): void
                                public visitFieldOrMethod(arg0: com.sun.org.apache.bcel.internal.generic.FieldOrMethod): void
                                public visitConstantPushInstruction(arg0: com.sun.org.apache.bcel.internal.generic.ConstantPushInstruction | com.sun.org.apache.bcel.internal.generic.ConstantPushInstruction$$Lambda): void
                                public visitExceptionThrower(arg0: com.sun.org.apache.bcel.internal.generic.ExceptionThrower | com.sun.org.apache.bcel.internal.generic.ExceptionThrower$$Lambda): void
                                public visitLoadInstruction(arg0: com.sun.org.apache.bcel.internal.generic.LoadInstruction): void
                                public visitVariableLengthInstruction(arg0: com.sun.org.apache.bcel.internal.generic.VariableLengthInstruction): void
                                public visitStackProducer(arg0: com.sun.org.apache.bcel.internal.generic.StackProducer | com.sun.org.apache.bcel.internal.generic.StackProducer$$Lambda): void
                                public visitStackConsumer(arg0: com.sun.org.apache.bcel.internal.generic.StackConsumer | com.sun.org.apache.bcel.internal.generic.StackConsumer$$Lambda): void
                                public visitACONST_NULL(arg0: com.sun.org.apache.bcel.internal.generic.ACONST_NULL): void
                                public visitGETSTATIC(arg0: com.sun.org.apache.bcel.internal.generic.GETSTATIC): void
                                public visitIF_ICMPLT(arg0: com.sun.org.apache.bcel.internal.generic.IF_ICMPLT): void
                                public visitMONITOREXIT(arg0: com.sun.org.apache.bcel.internal.generic.MONITOREXIT): void
                                public visitIFLT(arg0: com.sun.org.apache.bcel.internal.generic.IFLT): void
                                public visitLSTORE(arg0: com.sun.org.apache.bcel.internal.generic.LSTORE): void
                                public visitPOP2(arg0: com.sun.org.apache.bcel.internal.generic.POP2): void
                                public visitBASTORE(arg0: com.sun.org.apache.bcel.internal.generic.BASTORE): void
                                public visitISTORE(arg0: com.sun.org.apache.bcel.internal.generic.ISTORE): void
                                public visitCHECKCAST(arg0: com.sun.org.apache.bcel.internal.generic.CHECKCAST): void
                                public visitFCMPG(arg0: com.sun.org.apache.bcel.internal.generic.FCMPG): void
                                public visitI2F(arg0: com.sun.org.apache.bcel.internal.generic.I2F): void
                                public visitATHROW(arg0: com.sun.org.apache.bcel.internal.generic.ATHROW): void
                                public visitDCMPL(arg0: com.sun.org.apache.bcel.internal.generic.DCMPL): void
                                public visitARRAYLENGTH(arg0: com.sun.org.apache.bcel.internal.generic.ARRAYLENGTH): void
                                public visitDUP(arg0: com.sun.org.apache.bcel.internal.generic.DUP): void
                                public visitINVOKESTATIC(arg0: com.sun.org.apache.bcel.internal.generic.INVOKESTATIC): void
                                public visitLCONST(arg0: com.sun.org.apache.bcel.internal.generic.LCONST): void
                                public visitDREM(arg0: com.sun.org.apache.bcel.internal.generic.DREM): void
                                public visitIFGE(arg0: com.sun.org.apache.bcel.internal.generic.IFGE): void
                                public visitCALOAD(arg0: com.sun.org.apache.bcel.internal.generic.CALOAD): void
                                public visitLASTORE(arg0: com.sun.org.apache.bcel.internal.generic.LASTORE): void
                                public visitI2D(arg0: com.sun.org.apache.bcel.internal.generic.I2D): void
                                public visitDADD(arg0: com.sun.org.apache.bcel.internal.generic.DADD): void
                                public visitINVOKESPECIAL(arg0: com.sun.org.apache.bcel.internal.generic.INVOKESPECIAL): void
                                public visitIAND(arg0: com.sun.org.apache.bcel.internal.generic.IAND): void
                                public visitPUTFIELD(arg0: com.sun.org.apache.bcel.internal.generic.PUTFIELD): void
                                public visitILOAD(arg0: com.sun.org.apache.bcel.internal.generic.ILOAD): void
                                public visitDLOAD(arg0: com.sun.org.apache.bcel.internal.generic.DLOAD): void
                                public visitDCONST(arg0: com.sun.org.apache.bcel.internal.generic.DCONST): void
                                public visitNEW(arg0: com.sun.org.apache.bcel.internal.generic.NEW): void
                                public visitIFNULL(arg0: com.sun.org.apache.bcel.internal.generic.IFNULL): void
                                public visitLSUB(arg0: com.sun.org.apache.bcel.internal.generic.LSUB): void
                                public visitL2I(arg0: com.sun.org.apache.bcel.internal.generic.L2I): void
                                public visitISHR(arg0: com.sun.org.apache.bcel.internal.generic.ISHR): void
                                public visitTABLESWITCH(arg0: com.sun.org.apache.bcel.internal.generic.TABLESWITCH): void
                                public visitIINC(arg0: com.sun.org.apache.bcel.internal.generic.IINC): void
                                public visitDRETURN(arg0: com.sun.org.apache.bcel.internal.generic.DRETURN): void
                                public visitFSTORE(arg0: com.sun.org.apache.bcel.internal.generic.FSTORE): void
                                public visitDASTORE(arg0: com.sun.org.apache.bcel.internal.generic.DASTORE): void
                                public visitIALOAD(arg0: com.sun.org.apache.bcel.internal.generic.IALOAD): void
                                public visitDDIV(arg0: com.sun.org.apache.bcel.internal.generic.DDIV): void
                                public visitIF_ICMPGE(arg0: com.sun.org.apache.bcel.internal.generic.IF_ICMPGE): void
                                public visitLAND(arg0: com.sun.org.apache.bcel.internal.generic.LAND): void
                                public visitIDIV(arg0: com.sun.org.apache.bcel.internal.generic.IDIV): void
                                public visitLOR(arg0: com.sun.org.apache.bcel.internal.generic.LOR): void
                                public visitCASTORE(arg0: com.sun.org.apache.bcel.internal.generic.CASTORE): void
                                public visitFREM(arg0: com.sun.org.apache.bcel.internal.generic.FREM): void
                                public visitLDC(arg0: com.sun.org.apache.bcel.internal.generic.LDC): void
                                public visitBIPUSH(arg0: com.sun.org.apache.bcel.internal.generic.BIPUSH): void
                                public visitDSTORE(arg0: com.sun.org.apache.bcel.internal.generic.DSTORE): void
                                public visitF2L(arg0: com.sun.org.apache.bcel.internal.generic.F2L): void
                                public visitFMUL(arg0: com.sun.org.apache.bcel.internal.generic.FMUL): void
                                public visitLLOAD(arg0: com.sun.org.apache.bcel.internal.generic.LLOAD): void
                                public visitJSR(arg0: com.sun.org.apache.bcel.internal.generic.JSR): void
                                public visitFSUB(arg0: com.sun.org.apache.bcel.internal.generic.FSUB): void
                                public visitSASTORE(arg0: com.sun.org.apache.bcel.internal.generic.SASTORE): void
                                public visitALOAD(arg0: com.sun.org.apache.bcel.internal.generic.ALOAD): void
                                public visitDUP2_X2(arg0: com.sun.org.apache.bcel.internal.generic.DUP2_X2): void
                                public visitRETURN(arg0: com.sun.org.apache.bcel.internal.generic.RETURN): void
                                public visitDALOAD(arg0: com.sun.org.apache.bcel.internal.generic.DALOAD): void
                                public visitSIPUSH(arg0: com.sun.org.apache.bcel.internal.generic.SIPUSH): void
                                public visitDSUB(arg0: com.sun.org.apache.bcel.internal.generic.DSUB): void
                                public visitL2F(arg0: com.sun.org.apache.bcel.internal.generic.L2F): void
                                public visitIF_ICMPGT(arg0: com.sun.org.apache.bcel.internal.generic.IF_ICMPGT): void
                                public visitF2D(arg0: com.sun.org.apache.bcel.internal.generic.F2D): void
                                public visitI2L(arg0: com.sun.org.apache.bcel.internal.generic.I2L): void
                                public visitIF_ACMPNE(arg0: com.sun.org.apache.bcel.internal.generic.IF_ACMPNE): void
                                public visitPOP(arg0: com.sun.org.apache.bcel.internal.generic.POP): void
                                public visitI2S(arg0: com.sun.org.apache.bcel.internal.generic.I2S): void
                                public visitIFEQ(arg0: com.sun.org.apache.bcel.internal.generic.IFEQ): void
                                public visitSWAP(arg0: com.sun.org.apache.bcel.internal.generic.SWAP): void
                                public visitIOR(arg0: com.sun.org.apache.bcel.internal.generic.IOR): void
                                public visitIREM(arg0: com.sun.org.apache.bcel.internal.generic.IREM): void
                                public visitIASTORE(arg0: com.sun.org.apache.bcel.internal.generic.IASTORE): void
                                public visitNEWARRAY(arg0: com.sun.org.apache.bcel.internal.generic.NEWARRAY): void
                                public visitINVOKEINTERFACE(arg0: com.sun.org.apache.bcel.internal.generic.INVOKEINTERFACE): void
                                public visitINEG(arg0: com.sun.org.apache.bcel.internal.generic.INEG): void
                                public visitLCMP(arg0: com.sun.org.apache.bcel.internal.generic.LCMP): void
                                public visitJSR_W(arg0: com.sun.org.apache.bcel.internal.generic.JSR_W): void
                                public visitMULTIANEWARRAY(arg0: com.sun.org.apache.bcel.internal.generic.MULTIANEWARRAY): void
                                public visitDUP_X2(arg0: com.sun.org.apache.bcel.internal.generic.DUP_X2): void
                                public visitSALOAD(arg0: com.sun.org.apache.bcel.internal.generic.SALOAD): void
                                public visitIFNONNULL(arg0: com.sun.org.apache.bcel.internal.generic.IFNONNULL): void
                                public visitDMUL(arg0: com.sun.org.apache.bcel.internal.generic.DMUL): void
                                public visitIFNE(arg0: com.sun.org.apache.bcel.internal.generic.IFNE): void
                                public visitIF_ICMPLE(arg0: com.sun.org.apache.bcel.internal.generic.IF_ICMPLE): void
                                public visitLDC2_W(arg0: com.sun.org.apache.bcel.internal.generic.LDC2_W): void
                                public visitGETFIELD(arg0: com.sun.org.apache.bcel.internal.generic.GETFIELD): void
                                public visitLADD(arg0: com.sun.org.apache.bcel.internal.generic.LADD): void
                                public visitNOP(arg0: com.sun.org.apache.bcel.internal.generic.NOP): void
                                public visitFALOAD(arg0: com.sun.org.apache.bcel.internal.generic.FALOAD): void
                                public visitINSTANCEOF(arg0: com.sun.org.apache.bcel.internal.generic.INSTANCEOF): void
                                public visitIFLE(arg0: com.sun.org.apache.bcel.internal.generic.IFLE): void
                                public visitLXOR(arg0: com.sun.org.apache.bcel.internal.generic.LXOR): void
                                public visitLRETURN(arg0: com.sun.org.apache.bcel.internal.generic.LRETURN): void
                                public visitFCONST(arg0: com.sun.org.apache.bcel.internal.generic.FCONST): void
                                public visitIUSHR(arg0: com.sun.org.apache.bcel.internal.generic.IUSHR): void
                                public visitBALOAD(arg0: com.sun.org.apache.bcel.internal.generic.BALOAD): void
                                public visitDUP2(arg0: com.sun.org.apache.bcel.internal.generic.DUP2): void
                                public visitIF_ACMPEQ(arg0: com.sun.org.apache.bcel.internal.generic.IF_ACMPEQ): void
                                public visitIMPDEP1(arg0: com.sun.org.apache.bcel.internal.generic.IMPDEP1): void
                                public visitMONITORENTER(arg0: com.sun.org.apache.bcel.internal.generic.MONITORENTER): void
                                public visitLSHL(arg0: com.sun.org.apache.bcel.internal.generic.LSHL): void
                                public visitDCMPG(arg0: com.sun.org.apache.bcel.internal.generic.DCMPG): void
                                public visitD2L(arg0: com.sun.org.apache.bcel.internal.generic.D2L): void
                                public visitIMPDEP2(arg0: com.sun.org.apache.bcel.internal.generic.IMPDEP2): void
                                public visitL2D(arg0: com.sun.org.apache.bcel.internal.generic.L2D): void
                                public visitRET(arg0: com.sun.org.apache.bcel.internal.generic.RET): void
                                public visitIFGT(arg0: com.sun.org.apache.bcel.internal.generic.IFGT): void
                                public visitIXOR(arg0: com.sun.org.apache.bcel.internal.generic.IXOR): void
                                public visitINVOKEVIRTUAL(arg0: com.sun.org.apache.bcel.internal.generic.INVOKEVIRTUAL): void
                                public visitFASTORE(arg0: com.sun.org.apache.bcel.internal.generic.FASTORE): void
                                public visitIRETURN(arg0: com.sun.org.apache.bcel.internal.generic.IRETURN): void
                                public visitIF_ICMPNE(arg0: com.sun.org.apache.bcel.internal.generic.IF_ICMPNE): void
                                public visitFLOAD(arg0: com.sun.org.apache.bcel.internal.generic.FLOAD): void
                                public visitLDIV(arg0: com.sun.org.apache.bcel.internal.generic.LDIV): void
                                public visitPUTSTATIC(arg0: com.sun.org.apache.bcel.internal.generic.PUTSTATIC): void
                                public visitAALOAD(arg0: com.sun.org.apache.bcel.internal.generic.AALOAD): void
                                public visitD2I(arg0: com.sun.org.apache.bcel.internal.generic.D2I): void
                                public visitIF_ICMPEQ(arg0: com.sun.org.apache.bcel.internal.generic.IF_ICMPEQ): void
                                public visitAASTORE(arg0: com.sun.org.apache.bcel.internal.generic.AASTORE): void
                                public visitARETURN(arg0: com.sun.org.apache.bcel.internal.generic.ARETURN): void
                                public visitDUP2_X1(arg0: com.sun.org.apache.bcel.internal.generic.DUP2_X1): void
                                public visitFNEG(arg0: com.sun.org.apache.bcel.internal.generic.FNEG): void
                                public visitGOTO_W(arg0: com.sun.org.apache.bcel.internal.generic.GOTO_W): void
                                public visitD2F(arg0: com.sun.org.apache.bcel.internal.generic.D2F): void
                                public visitGOTO(arg0: com.sun.org.apache.bcel.internal.generic.GOTO): void
                                public visitISUB(arg0: com.sun.org.apache.bcel.internal.generic.ISUB): void
                                public visitF2I(arg0: com.sun.org.apache.bcel.internal.generic.F2I): void
                                public visitDNEG(arg0: com.sun.org.apache.bcel.internal.generic.DNEG): void
                                public visitICONST(arg0: com.sun.org.apache.bcel.internal.generic.ICONST): void
                                public visitFDIV(arg0: com.sun.org.apache.bcel.internal.generic.FDIV): void
                                public visitI2B(arg0: com.sun.org.apache.bcel.internal.generic.I2B): void
                                public visitLNEG(arg0: com.sun.org.apache.bcel.internal.generic.LNEG): void
                                public visitLREM(arg0: com.sun.org.apache.bcel.internal.generic.LREM): void
                                public visitIMUL(arg0: com.sun.org.apache.bcel.internal.generic.IMUL): void
                                public visitIADD(arg0: com.sun.org.apache.bcel.internal.generic.IADD): void
                                public visitLSHR(arg0: com.sun.org.apache.bcel.internal.generic.LSHR): void
                                public visitLOOKUPSWITCH(arg0: com.sun.org.apache.bcel.internal.generic.LOOKUPSWITCH): void
                                public visitDUP_X1(arg0: com.sun.org.apache.bcel.internal.generic.DUP_X1): void
                                public visitFCMPL(arg0: com.sun.org.apache.bcel.internal.generic.FCMPL): void
                                public visitI2C(arg0: com.sun.org.apache.bcel.internal.generic.I2C): void
                                public visitLMUL(arg0: com.sun.org.apache.bcel.internal.generic.LMUL): void
                                public visitLUSHR(arg0: com.sun.org.apache.bcel.internal.generic.LUSHR): void
                                public visitISHL(arg0: com.sun.org.apache.bcel.internal.generic.ISHL): void
                                public visitLALOAD(arg0: com.sun.org.apache.bcel.internal.generic.LALOAD): void
                                public visitASTORE(arg0: com.sun.org.apache.bcel.internal.generic.ASTORE): void
                                public visitANEWARRAY(arg0: com.sun.org.apache.bcel.internal.generic.ANEWARRAY): void
                                public visitFRETURN(arg0: com.sun.org.apache.bcel.internal.generic.FRETURN): void
                                public visitFADD(arg0: com.sun.org.apache.bcel.internal.generic.FADD): void
                                public visitBREAKPOINT(arg0: com.sun.org.apache.bcel.internal.generic.BREAKPOINT): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}