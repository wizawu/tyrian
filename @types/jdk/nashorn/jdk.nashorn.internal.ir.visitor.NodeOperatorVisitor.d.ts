declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                namespace visitor {
                    abstract class NodeOperatorVisitor<T extends jdk.nashorn.internal.ir.LexicalContext> extends jdk.nashorn.internal.ir.visitor.NodeVisitor<T> {
                        public constructor(arg0: T)
                        public enterUnaryNode(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                        public leaveUnaryNode(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                        public enterBinaryNode(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveBinaryNode(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterADD(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                        public leaveADD(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                        public enterBIT_NOT(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                        public leaveBIT_NOT(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                        public enterDECINC(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                        public leaveDECINC(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                        public enterDELETE(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                        public leaveDELETE(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                        public enterNEW(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                        public leaveNEW(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                        public enterNOT(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                        public leaveNOT(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                        public enterSUB(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                        public leaveSUB(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                        public enterTYPEOF(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                        public leaveTYPEOF(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                        public enterVOID(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                        public leaveVOID(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                        public enterADD(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveADD(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterAND(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveAND(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterASSIGN(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveASSIGN(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterASSIGN_ADD(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveASSIGN_ADD(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterASSIGN_BIT_AND(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveASSIGN_BIT_AND(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterASSIGN_BIT_OR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveASSIGN_BIT_OR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterASSIGN_BIT_XOR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveASSIGN_BIT_XOR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterASSIGN_DIV(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveASSIGN_DIV(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterASSIGN_MOD(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveASSIGN_MOD(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterASSIGN_MUL(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveASSIGN_MUL(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterASSIGN_SAR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveASSIGN_SAR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterASSIGN_SHL(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveASSIGN_SHL(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterASSIGN_SHR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveASSIGN_SHR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterASSIGN_SUB(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveASSIGN_SUB(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterBIND(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveBIND(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterBIT_AND(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveBIT_AND(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterBIT_OR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveBIT_OR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterBIT_XOR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveBIT_XOR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterCOMMALEFT(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveCOMMALEFT(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterCOMMARIGHT(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveCOMMARIGHT(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterDIV(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveDIV(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterEQ(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveEQ(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterEQ_STRICT(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveEQ_STRICT(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterGE(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveGE(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterGT(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveGT(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterIN(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveIN(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterINSTANCEOF(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveINSTANCEOF(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterLE(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveLE(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterLT(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveLT(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterMOD(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveMOD(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterMUL(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveMUL(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterNE(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveNE(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterNE_STRICT(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveNE_STRICT(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterOR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveOR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterSAR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveSAR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterSHL(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveSHL(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterSHR(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveSHR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterSUB(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveSUB(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}