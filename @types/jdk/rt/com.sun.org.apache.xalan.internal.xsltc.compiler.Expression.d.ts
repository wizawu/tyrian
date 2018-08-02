declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
abstract class Expression extends com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode {
    protected _type: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
    protected _trueList: com.sun.org.apache.xalan.internal.xsltc.compiler.FlowList
    protected _falseList: com.sun.org.apache.xalan.internal.xsltc.compiler.FlowList
    public getType(): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
    public toString(): string
    public hasPositionCall(): boolean
    public hasLastCall(): boolean
    public evaluateAtCompileTime(): java.lang.Object
    public typeCheck(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
    public translate(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
    public compile(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): com.sun.org.apache.bcel.internal.generic.InstructionList
    public translateDesynthesized(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
    public startIterator(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
    public synthesize(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
    public desynthesize(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
    public getFalseList(): com.sun.org.apache.xalan.internal.xsltc.compiler.FlowList
    public getTrueList(): com.sun.org.apache.xalan.internal.xsltc.compiler.FlowList
    public backPatchFalseList(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle): void
    public backPatchTrueList(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle): void
    public lookupPrimop(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable, arg1: java.lang.String | string, arg2: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodType): com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodType
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