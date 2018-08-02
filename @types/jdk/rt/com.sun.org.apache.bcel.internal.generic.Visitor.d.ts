declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace generic {
                            interface Visitor {
                                visitStackInstruction(arg0: com.sun.org.apache.bcel.internal.generic.StackInstruction): void
                                visitLocalVariableInstruction(arg0: com.sun.org.apache.bcel.internal.generic.LocalVariableInstruction): void
                                visitBranchInstruction(arg0: com.sun.org.apache.bcel.internal.generic.BranchInstruction): void
                                visitLoadClass(arg0: com.sun.org.apache.bcel.internal.generic.LoadClass): void
                                visitFieldInstruction(arg0: com.sun.org.apache.bcel.internal.generic.FieldInstruction | com.sun.org.apache.bcel.internal.generic.FieldInstruction$$Lambda): void
                                visitIfInstruction(arg0: com.sun.org.apache.bcel.internal.generic.IfInstruction | com.sun.org.apache.bcel.internal.generic.IfInstruction$$Lambda): void
                                visitConversionInstruction(arg0: com.sun.org.apache.bcel.internal.generic.ConversionInstruction | com.sun.org.apache.bcel.internal.generic.ConversionInstruction$$Lambda): void
                                visitPopInstruction(arg0: com.sun.org.apache.bcel.internal.generic.PopInstruction): void
                                visitStoreInstruction(arg0: com.sun.org.apache.bcel.internal.generic.StoreInstruction): void
                                visitTypedInstruction(arg0: com.sun.org.apache.bcel.internal.generic.TypedInstruction | com.sun.org.apache.bcel.internal.generic.TypedInstruction$$Lambda): void
                                visitSelect(arg0: com.sun.org.apache.bcel.internal.generic.Select | com.sun.org.apache.bcel.internal.generic.Select$$Lambda): void
                                visitJsrInstruction(arg0: com.sun.org.apache.bcel.internal.generic.JsrInstruction | com.sun.org.apache.bcel.internal.generic.JsrInstruction$$Lambda): void
                                visitGotoInstruction(arg0: com.sun.org.apache.bcel.internal.generic.GotoInstruction): void
                                visitUnconditionalBranch(arg0: com.sun.org.apache.bcel.internal.generic.UnconditionalBranch): void
                                visitPushInstruction(arg0: com.sun.org.apache.bcel.internal.generic.PushInstruction): void
                                visitArithmeticInstruction(arg0: com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction | com.sun.org.apache.bcel.internal.generic.ArithmeticInstruction$$Lambda): void
                                visitCPInstruction(arg0: com.sun.org.apache.bcel.internal.generic.CPInstruction): void
                                visitInvokeInstruction(arg0: com.sun.org.apache.bcel.internal.generic.InvokeInstruction | com.sun.org.apache.bcel.internal.generic.InvokeInstruction$$Lambda): void
                                visitArrayInstruction(arg0: com.sun.org.apache.bcel.internal.generic.ArrayInstruction | com.sun.org.apache.bcel.internal.generic.ArrayInstruction$$Lambda): void
                                visitAllocationInstruction(arg0: com.sun.org.apache.bcel.internal.generic.AllocationInstruction): void
                                visitReturnInstruction(arg0: com.sun.org.apache.bcel.internal.generic.ReturnInstruction | com.sun.org.apache.bcel.internal.generic.ReturnInstruction$$Lambda): void
                                visitFieldOrMethod(arg0: com.sun.org.apache.bcel.internal.generic.FieldOrMethod): void
                                visitConstantPushInstruction(arg0: com.sun.org.apache.bcel.internal.generic.ConstantPushInstruction): void
                                visitExceptionThrower(arg0: com.sun.org.apache.bcel.internal.generic.ExceptionThrower | com.sun.org.apache.bcel.internal.generic.ExceptionThrower$$Lambda): void
                                visitLoadInstruction(arg0: com.sun.org.apache.bcel.internal.generic.LoadInstruction): void
                                visitVariableLengthInstruction(arg0: com.sun.org.apache.bcel.internal.generic.VariableLengthInstruction): void
                                visitStackProducer(arg0: com.sun.org.apache.bcel.internal.generic.StackProducer | com.sun.org.apache.bcel.internal.generic.StackProducer$$Lambda): void
                                visitStackConsumer(arg0: com.sun.org.apache.bcel.internal.generic.StackConsumer | com.sun.org.apache.bcel.internal.generic.StackConsumer$$Lambda): void
                                visitACONST_NULL(arg0: com.sun.org.apache.bcel.internal.generic.ACONST_NULL | com.sun.org.apache.bcel.internal.generic.ACONST_NULL$$Lambda): void
                                visitGETSTATIC(arg0: com.sun.org.apache.bcel.internal.generic.GETSTATIC | com.sun.org.apache.bcel.internal.generic.GETSTATIC$$Lambda): void
                                visitIF_ICMPLT(arg0: com.sun.org.apache.bcel.internal.generic.IF_ICMPLT): void
                                visitMONITOREXIT(arg0: com.sun.org.apache.bcel.internal.generic.MONITOREXIT | com.sun.org.apache.bcel.internal.generic.MONITOREXIT$$Lambda): void
                                visitIFLT(arg0: com.sun.org.apache.bcel.internal.generic.IFLT): void
                                visitLSTORE(arg0: com.sun.org.apache.bcel.internal.generic.LSTORE): void
                                visitPOP2(arg0: com.sun.org.apache.bcel.internal.generic.POP2): void
                                visitBASTORE(arg0: com.sun.org.apache.bcel.internal.generic.BASTORE | com.sun.org.apache.bcel.internal.generic.BASTORE$$Lambda): void
                                visitISTORE(arg0: com.sun.org.apache.bcel.internal.generic.ISTORE): void
                                visitCHECKCAST(arg0: com.sun.org.apache.bcel.internal.generic.CHECKCAST | com.sun.org.apache.bcel.internal.generic.CHECKCAST$$Lambda): void
                                visitFCMPG(arg0: com.sun.org.apache.bcel.internal.generic.FCMPG | com.sun.org.apache.bcel.internal.generic.FCMPG$$Lambda): void
                                visitI2F(arg0: com.sun.org.apache.bcel.internal.generic.I2F): void
                                visitATHROW(arg0: com.sun.org.apache.bcel.internal.generic.ATHROW | com.sun.org.apache.bcel.internal.generic.ATHROW$$Lambda): void
                                visitDCMPL(arg0: com.sun.org.apache.bcel.internal.generic.DCMPL | com.sun.org.apache.bcel.internal.generic.DCMPL$$Lambda): void
                                visitARRAYLENGTH(arg0: com.sun.org.apache.bcel.internal.generic.ARRAYLENGTH | com.sun.org.apache.bcel.internal.generic.ARRAYLENGTH$$Lambda): void
                                visitDUP(arg0: com.sun.org.apache.bcel.internal.generic.DUP): void
                                visitINVOKESTATIC(arg0: com.sun.org.apache.bcel.internal.generic.INVOKESTATIC): void
                                visitLCONST(arg0: com.sun.org.apache.bcel.internal.generic.LCONST | com.sun.org.apache.bcel.internal.generic.LCONST$$Lambda): void
                                visitDREM(arg0: com.sun.org.apache.bcel.internal.generic.DREM): void
                                visitIFGE(arg0: com.sun.org.apache.bcel.internal.generic.IFGE): void
                                visitCALOAD(arg0: com.sun.org.apache.bcel.internal.generic.CALOAD | com.sun.org.apache.bcel.internal.generic.CALOAD$$Lambda): void
                                visitLASTORE(arg0: com.sun.org.apache.bcel.internal.generic.LASTORE | com.sun.org.apache.bcel.internal.generic.LASTORE$$Lambda): void
                                visitI2D(arg0: com.sun.org.apache.bcel.internal.generic.I2D): void
                                visitDADD(arg0: com.sun.org.apache.bcel.internal.generic.DADD): void
                                visitINVOKESPECIAL(arg0: com.sun.org.apache.bcel.internal.generic.INVOKESPECIAL): void
                                visitIAND(arg0: com.sun.org.apache.bcel.internal.generic.IAND): void
                                visitPUTFIELD(arg0: com.sun.org.apache.bcel.internal.generic.PUTFIELD | com.sun.org.apache.bcel.internal.generic.PUTFIELD$$Lambda): void
                                visitILOAD(arg0: com.sun.org.apache.bcel.internal.generic.ILOAD): void
                                visitDLOAD(arg0: com.sun.org.apache.bcel.internal.generic.DLOAD): void
                                visitDCONST(arg0: com.sun.org.apache.bcel.internal.generic.DCONST | com.sun.org.apache.bcel.internal.generic.DCONST$$Lambda): void
                                visitNEW(arg0: com.sun.org.apache.bcel.internal.generic.NEW | com.sun.org.apache.bcel.internal.generic.NEW$$Lambda): void
                                visitIFNULL(arg0: com.sun.org.apache.bcel.internal.generic.IFNULL): void
                                visitLSUB(arg0: com.sun.org.apache.bcel.internal.generic.LSUB): void
                                visitL2I(arg0: com.sun.org.apache.bcel.internal.generic.L2I): void
                                visitISHR(arg0: com.sun.org.apache.bcel.internal.generic.ISHR): void
                                visitTABLESWITCH(arg0: com.sun.org.apache.bcel.internal.generic.TABLESWITCH): void
                                visitIINC(arg0: com.sun.org.apache.bcel.internal.generic.IINC): void
                                visitDRETURN(arg0: com.sun.org.apache.bcel.internal.generic.DRETURN): void
                                visitFSTORE(arg0: com.sun.org.apache.bcel.internal.generic.FSTORE): void
                                visitDASTORE(arg0: com.sun.org.apache.bcel.internal.generic.DASTORE | com.sun.org.apache.bcel.internal.generic.DASTORE$$Lambda): void
                                visitIALOAD(arg0: com.sun.org.apache.bcel.internal.generic.IALOAD | com.sun.org.apache.bcel.internal.generic.IALOAD$$Lambda): void
                                visitDDIV(arg0: com.sun.org.apache.bcel.internal.generic.DDIV): void
                                visitIF_ICMPGE(arg0: com.sun.org.apache.bcel.internal.generic.IF_ICMPGE): void
                                visitLAND(arg0: com.sun.org.apache.bcel.internal.generic.LAND): void
                                visitIDIV(arg0: com.sun.org.apache.bcel.internal.generic.IDIV | com.sun.org.apache.bcel.internal.generic.IDIV$$Lambda): void
                                visitLOR(arg0: com.sun.org.apache.bcel.internal.generic.LOR): void
                                visitCASTORE(arg0: com.sun.org.apache.bcel.internal.generic.CASTORE | com.sun.org.apache.bcel.internal.generic.CASTORE$$Lambda): void
                                visitFREM(arg0: com.sun.org.apache.bcel.internal.generic.FREM): void
                                visitLDC(arg0: com.sun.org.apache.bcel.internal.generic.LDC | com.sun.org.apache.bcel.internal.generic.LDC$$Lambda): void
                                visitBIPUSH(arg0: com.sun.org.apache.bcel.internal.generic.BIPUSH): void
                                visitDSTORE(arg0: com.sun.org.apache.bcel.internal.generic.DSTORE): void
                                visitF2L(arg0: com.sun.org.apache.bcel.internal.generic.F2L): void
                                visitFMUL(arg0: com.sun.org.apache.bcel.internal.generic.FMUL): void
                                visitLLOAD(arg0: com.sun.org.apache.bcel.internal.generic.LLOAD): void
                                visitJSR(arg0: com.sun.org.apache.bcel.internal.generic.JSR): void
                                visitFSUB(arg0: com.sun.org.apache.bcel.internal.generic.FSUB): void
                                visitSASTORE(arg0: com.sun.org.apache.bcel.internal.generic.SASTORE | com.sun.org.apache.bcel.internal.generic.SASTORE$$Lambda): void
                                visitALOAD(arg0: com.sun.org.apache.bcel.internal.generic.ALOAD): void
                                visitDUP2_X2(arg0: com.sun.org.apache.bcel.internal.generic.DUP2_X2): void
                                visitRETURN(arg0: com.sun.org.apache.bcel.internal.generic.RETURN): void
                                visitDALOAD(arg0: com.sun.org.apache.bcel.internal.generic.DALOAD | com.sun.org.apache.bcel.internal.generic.DALOAD$$Lambda): void
                                visitSIPUSH(arg0: com.sun.org.apache.bcel.internal.generic.SIPUSH): void
                                visitDSUB(arg0: com.sun.org.apache.bcel.internal.generic.DSUB): void
                                visitL2F(arg0: com.sun.org.apache.bcel.internal.generic.L2F): void
                                visitIF_ICMPGT(arg0: com.sun.org.apache.bcel.internal.generic.IF_ICMPGT): void
                                visitF2D(arg0: com.sun.org.apache.bcel.internal.generic.F2D): void
                                visitI2L(arg0: com.sun.org.apache.bcel.internal.generic.I2L): void
                                visitIF_ACMPNE(arg0: com.sun.org.apache.bcel.internal.generic.IF_ACMPNE): void
                                visitPOP(arg0: com.sun.org.apache.bcel.internal.generic.POP): void
                                visitI2S(arg0: com.sun.org.apache.bcel.internal.generic.I2S): void
                                visitIFEQ(arg0: com.sun.org.apache.bcel.internal.generic.IFEQ): void
                                visitSWAP(arg0: com.sun.org.apache.bcel.internal.generic.SWAP | com.sun.org.apache.bcel.internal.generic.SWAP$$Lambda): void
                                visitIOR(arg0: com.sun.org.apache.bcel.internal.generic.IOR): void
                                visitIREM(arg0: com.sun.org.apache.bcel.internal.generic.IREM | com.sun.org.apache.bcel.internal.generic.IREM$$Lambda): void
                                visitIASTORE(arg0: com.sun.org.apache.bcel.internal.generic.IASTORE | com.sun.org.apache.bcel.internal.generic.IASTORE$$Lambda): void
                                visitNEWARRAY(arg0: com.sun.org.apache.bcel.internal.generic.NEWARRAY | com.sun.org.apache.bcel.internal.generic.NEWARRAY$$Lambda): void
                                visitINVOKEINTERFACE(arg0: com.sun.org.apache.bcel.internal.generic.INVOKEINTERFACE): void
                                visitINEG(arg0: com.sun.org.apache.bcel.internal.generic.INEG): void
                                visitLCMP(arg0: com.sun.org.apache.bcel.internal.generic.LCMP | com.sun.org.apache.bcel.internal.generic.LCMP$$Lambda): void
                                visitJSR_W(arg0: com.sun.org.apache.bcel.internal.generic.JSR_W): void
                                visitMULTIANEWARRAY(arg0: com.sun.org.apache.bcel.internal.generic.MULTIANEWARRAY | com.sun.org.apache.bcel.internal.generic.MULTIANEWARRAY$$Lambda): void
                                visitDUP_X2(arg0: com.sun.org.apache.bcel.internal.generic.DUP_X2): void
                                visitSALOAD(arg0: com.sun.org.apache.bcel.internal.generic.SALOAD | com.sun.org.apache.bcel.internal.generic.SALOAD$$Lambda): void
                                visitIFNONNULL(arg0: com.sun.org.apache.bcel.internal.generic.IFNONNULL): void
                                visitDMUL(arg0: com.sun.org.apache.bcel.internal.generic.DMUL): void
                                visitIFNE(arg0: com.sun.org.apache.bcel.internal.generic.IFNE): void
                                visitIF_ICMPLE(arg0: com.sun.org.apache.bcel.internal.generic.IF_ICMPLE): void
                                visitLDC2_W(arg0: com.sun.org.apache.bcel.internal.generic.LDC2_W | com.sun.org.apache.bcel.internal.generic.LDC2_W$$Lambda): void
                                visitGETFIELD(arg0: com.sun.org.apache.bcel.internal.generic.GETFIELD | com.sun.org.apache.bcel.internal.generic.GETFIELD$$Lambda): void
                                visitLADD(arg0: com.sun.org.apache.bcel.internal.generic.LADD): void
                                visitNOP(arg0: com.sun.org.apache.bcel.internal.generic.NOP): void
                                visitFALOAD(arg0: com.sun.org.apache.bcel.internal.generic.FALOAD | com.sun.org.apache.bcel.internal.generic.FALOAD$$Lambda): void
                                visitINSTANCEOF(arg0: com.sun.org.apache.bcel.internal.generic.INSTANCEOF | com.sun.org.apache.bcel.internal.generic.INSTANCEOF$$Lambda): void
                                visitIFLE(arg0: com.sun.org.apache.bcel.internal.generic.IFLE): void
                                visitLXOR(arg0: com.sun.org.apache.bcel.internal.generic.LXOR): void
                                visitLRETURN(arg0: com.sun.org.apache.bcel.internal.generic.LRETURN): void
                                visitFCONST(arg0: com.sun.org.apache.bcel.internal.generic.FCONST | com.sun.org.apache.bcel.internal.generic.FCONST$$Lambda): void
                                visitIUSHR(arg0: com.sun.org.apache.bcel.internal.generic.IUSHR): void
                                visitBALOAD(arg0: com.sun.org.apache.bcel.internal.generic.BALOAD | com.sun.org.apache.bcel.internal.generic.BALOAD$$Lambda): void
                                visitDUP2(arg0: com.sun.org.apache.bcel.internal.generic.DUP2): void
                                visitIF_ACMPEQ(arg0: com.sun.org.apache.bcel.internal.generic.IF_ACMPEQ): void
                                visitIMPDEP1(arg0: com.sun.org.apache.bcel.internal.generic.IMPDEP1): void
                                visitMONITORENTER(arg0: com.sun.org.apache.bcel.internal.generic.MONITORENTER | com.sun.org.apache.bcel.internal.generic.MONITORENTER$$Lambda): void
                                visitLSHL(arg0: com.sun.org.apache.bcel.internal.generic.LSHL): void
                                visitDCMPG(arg0: com.sun.org.apache.bcel.internal.generic.DCMPG | com.sun.org.apache.bcel.internal.generic.DCMPG$$Lambda): void
                                visitD2L(arg0: com.sun.org.apache.bcel.internal.generic.D2L): void
                                visitIMPDEP2(arg0: com.sun.org.apache.bcel.internal.generic.IMPDEP2): void
                                visitL2D(arg0: com.sun.org.apache.bcel.internal.generic.L2D): void
                                visitRET(arg0: com.sun.org.apache.bcel.internal.generic.RET | com.sun.org.apache.bcel.internal.generic.RET$$Lambda): void
                                visitIFGT(arg0: com.sun.org.apache.bcel.internal.generic.IFGT): void
                                visitIXOR(arg0: com.sun.org.apache.bcel.internal.generic.IXOR): void
                                visitINVOKEVIRTUAL(arg0: com.sun.org.apache.bcel.internal.generic.INVOKEVIRTUAL): void
                                visitFASTORE(arg0: com.sun.org.apache.bcel.internal.generic.FASTORE | com.sun.org.apache.bcel.internal.generic.FASTORE$$Lambda): void
                                visitIRETURN(arg0: com.sun.org.apache.bcel.internal.generic.IRETURN): void
                                visitIF_ICMPNE(arg0: com.sun.org.apache.bcel.internal.generic.IF_ICMPNE): void
                                visitFLOAD(arg0: com.sun.org.apache.bcel.internal.generic.FLOAD): void
                                visitLDIV(arg0: com.sun.org.apache.bcel.internal.generic.LDIV | com.sun.org.apache.bcel.internal.generic.LDIV$$Lambda): void
                                visitPUTSTATIC(arg0: com.sun.org.apache.bcel.internal.generic.PUTSTATIC): void
                                visitAALOAD(arg0: com.sun.org.apache.bcel.internal.generic.AALOAD | com.sun.org.apache.bcel.internal.generic.AALOAD$$Lambda): void
                                visitD2I(arg0: com.sun.org.apache.bcel.internal.generic.D2I): void
                                visitIF_ICMPEQ(arg0: com.sun.org.apache.bcel.internal.generic.IF_ICMPEQ): void
                                visitAASTORE(arg0: com.sun.org.apache.bcel.internal.generic.AASTORE | com.sun.org.apache.bcel.internal.generic.AASTORE$$Lambda): void
                                visitARETURN(arg0: com.sun.org.apache.bcel.internal.generic.ARETURN): void
                                visitDUP2_X1(arg0: com.sun.org.apache.bcel.internal.generic.DUP2_X1): void
                                visitFNEG(arg0: com.sun.org.apache.bcel.internal.generic.FNEG): void
                                visitGOTO_W(arg0: com.sun.org.apache.bcel.internal.generic.GOTO_W): void
                                visitD2F(arg0: com.sun.org.apache.bcel.internal.generic.D2F): void
                                visitGOTO(arg0: com.sun.org.apache.bcel.internal.generic.GOTO): void
                                visitISUB(arg0: com.sun.org.apache.bcel.internal.generic.ISUB): void
                                visitF2I(arg0: com.sun.org.apache.bcel.internal.generic.F2I): void
                                visitDNEG(arg0: com.sun.org.apache.bcel.internal.generic.DNEG): void
                                visitICONST(arg0: com.sun.org.apache.bcel.internal.generic.ICONST | com.sun.org.apache.bcel.internal.generic.ICONST$$Lambda): void
                                visitFDIV(arg0: com.sun.org.apache.bcel.internal.generic.FDIV): void
                                visitI2B(arg0: com.sun.org.apache.bcel.internal.generic.I2B): void
                                visitLNEG(arg0: com.sun.org.apache.bcel.internal.generic.LNEG): void
                                visitLREM(arg0: com.sun.org.apache.bcel.internal.generic.LREM | com.sun.org.apache.bcel.internal.generic.LREM$$Lambda): void
                                visitIMUL(arg0: com.sun.org.apache.bcel.internal.generic.IMUL): void
                                visitIADD(arg0: com.sun.org.apache.bcel.internal.generic.IADD): void
                                visitLSHR(arg0: com.sun.org.apache.bcel.internal.generic.LSHR): void
                                visitLOOKUPSWITCH(arg0: com.sun.org.apache.bcel.internal.generic.LOOKUPSWITCH): void
                                visitDUP_X1(arg0: com.sun.org.apache.bcel.internal.generic.DUP_X1): void
                                visitFCMPL(arg0: com.sun.org.apache.bcel.internal.generic.FCMPL | com.sun.org.apache.bcel.internal.generic.FCMPL$$Lambda): void
                                visitI2C(arg0: com.sun.org.apache.bcel.internal.generic.I2C): void
                                visitLMUL(arg0: com.sun.org.apache.bcel.internal.generic.LMUL): void
                                visitLUSHR(arg0: com.sun.org.apache.bcel.internal.generic.LUSHR): void
                                visitISHL(arg0: com.sun.org.apache.bcel.internal.generic.ISHL): void
                                visitLALOAD(arg0: com.sun.org.apache.bcel.internal.generic.LALOAD | com.sun.org.apache.bcel.internal.generic.LALOAD$$Lambda): void
                                visitASTORE(arg0: com.sun.org.apache.bcel.internal.generic.ASTORE): void
                                visitANEWARRAY(arg0: com.sun.org.apache.bcel.internal.generic.ANEWARRAY | com.sun.org.apache.bcel.internal.generic.ANEWARRAY$$Lambda): void
                                visitFRETURN(arg0: com.sun.org.apache.bcel.internal.generic.FRETURN): void
                                visitFADD(arg0: com.sun.org.apache.bcel.internal.generic.FADD): void
                                visitBREAKPOINT(arg0: com.sun.org.apache.bcel.internal.generic.BREAKPOINT): void
                            }
                        }
                    }
                }
            }
        }
    }
}