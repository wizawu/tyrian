declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
                                namespace util {
                                    class MethodGenerator extends com.sun.org.apache.bcel.internal.generic.MethodGen implements com.sun.org.apache.xalan.internal.xsltc.compiler.Constants {
                                        protected static readonly INVALID_INDEX: int
                                        public constructor(arg0: int, arg1: com.sun.org.apache.bcel.internal.generic.Type, arg2: com.sun.org.apache.bcel.internal.generic.Type[], arg3: java.lang.String[], arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: com.sun.org.apache.bcel.internal.generic.InstructionList, arg7: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen)
                                        public addLocalVariable(arg0: java.lang.String | string, arg1: com.sun.org.apache.bcel.internal.generic.Type, arg2: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg3: com.sun.org.apache.bcel.internal.generic.InstructionHandle): com.sun.org.apache.bcel.internal.generic.LocalVariableGen
                                        public addLocalVariable2(arg0: java.lang.String | string, arg1: com.sun.org.apache.bcel.internal.generic.Type, arg2: com.sun.org.apache.bcel.internal.generic.InstructionHandle): com.sun.org.apache.bcel.internal.generic.LocalVariableGen
                                        public removeLocalVariable(arg0: com.sun.org.apache.bcel.internal.generic.LocalVariableGen): void
                                        public loadDOM(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public storeDOM(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public storeHandler(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public loadHandler(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public storeIterator(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public loadIterator(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public setStartNode(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public reset(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public nextNode(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public startElement(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public endElement(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public startDocument(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public endDocument(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public attribute(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public uniqueAttribute(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public namespace(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public loadCurrentNode(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public storeCurrentNode(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public loadContextNode(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public storeContextNode(): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public getLocalIndex(arg0: java.lang.String | string): int
                                        public getLocalVariable(arg0: java.lang.String | string): com.sun.org.apache.bcel.internal.generic.LocalVariableGen
                                        public setMaxLocals(): void
                                        public addInstructionList(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Pattern, arg1: com.sun.org.apache.bcel.internal.generic.InstructionList): void
                                        public getInstructionList(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Pattern): com.sun.org.apache.bcel.internal.generic.InstructionList
                                        public outlineChunks(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: int): com.sun.org.apache.bcel.internal.classfile.Method[]
                                        public markChunkStart(): void
                                        public markChunkEnd(): void
                                        protected getThisMethod(): com.sun.org.apache.bcel.internal.classfile.Method
                                        public static class: java.lang.Class<any>
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}