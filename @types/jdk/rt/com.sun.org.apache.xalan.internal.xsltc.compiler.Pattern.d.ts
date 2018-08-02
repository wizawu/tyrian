declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
                                abstract class Pattern extends com.sun.org.apache.xalan.internal.xsltc.compiler.Expression {
                                    public constructor()
                                    public typeCheck(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                    public translate(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
                                    public getPriority(): double
                                    public lookupPrimop(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable, arg1: java.lang.String | string, arg2: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodType): com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodType
                                    public backPatchTrueList(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle): void
                                    public backPatchFalseList(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle): void
                                    public getTrueList(): com.sun.org.apache.xalan.internal.xsltc.compiler.FlowList
                                    public getFalseList(): com.sun.org.apache.xalan.internal.xsltc.compiler.FlowList
                                    public desynthesize(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
                                    public synthesize(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
                                    public startIterator(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
                                    public translateDesynthesized(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
                                    public evaluateAtCompileTime(): java.lang.Object
                                    public hasLastCall(): boolean
                                    public hasPositionCall(): boolean
                                    public getType(): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
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