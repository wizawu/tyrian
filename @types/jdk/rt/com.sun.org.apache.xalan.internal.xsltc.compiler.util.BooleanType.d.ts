declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
                                namespace util {
                                    class BooleanType extends com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type {
                                        protected constructor()
                                        public toString(): string
                                        public identicalTo(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type): boolean
                                        public toSignature(): string
                                        public isSimple(): boolean
                                        public toJCType(): com.sun.org.apache.bcel.internal.generic.Type
                                        public translateTo(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator, arg2: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type): void
                                        public translateTo(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator, arg2: com.sun.org.apache.xalan.internal.xsltc.compiler.util.StringType): void
                                        public translateTo(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator, arg2: com.sun.org.apache.xalan.internal.xsltc.compiler.util.RealType): void
                                        public translateTo(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator, arg2: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ReferenceType): void
                                        public translateTo(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator, arg2: java.lang.Class): void
                                        public translateFrom(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator, arg2: java.lang.Class): void
                                        public translateBox(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
                                        public translateUnBox(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
                                        public LOAD(arg0: int): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public STORE(arg0: int): com.sun.org.apache.bcel.internal.generic.Instruction
                                        public GT(arg0: boolean): com.sun.org.apache.bcel.internal.generic.BranchInstruction
                                        public GE(arg0: boolean): com.sun.org.apache.bcel.internal.generic.BranchInstruction
                                        public LT(arg0: boolean): com.sun.org.apache.bcel.internal.generic.BranchInstruction
                                        public LE(arg0: boolean): com.sun.org.apache.bcel.internal.generic.BranchInstruction
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