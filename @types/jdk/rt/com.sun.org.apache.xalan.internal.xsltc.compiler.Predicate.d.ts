declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
                                class Predicate extends com.sun.org.apache.xalan.internal.xsltc.compiler.Expression implements com.sun.org.apache.xalan.internal.xsltc.compiler.Closure {
                                    public constructor(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Expression | com.sun.org.apache.xalan.internal.xsltc.compiler.Expression$$Lambda)
                                    public setParser(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Parser): void
                                    public isNthPositionFilter(): boolean
                                    public isNthDescendant(): boolean
                                    public dontOptimize(): void
                                    public hasPositionCall(): boolean
                                    public hasLastCall(): boolean
                                    public inInnerClass(): boolean
                                    public getParentClosure(): com.sun.org.apache.xalan.internal.xsltc.compiler.Closure
                                    public getInnerClassName(): string
                                    public addVariable(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.VariableRefBase): void
                                    public getPosType(): int
                                    public parentIsPattern(): boolean
                                    public getExpr(): com.sun.org.apache.xalan.internal.xsltc.compiler.Expression
                                    public toString(): string
                                    public typeCheck(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                    public isBooleanTest(): boolean
                                    public isNodeValueTest(): boolean
                                    public getStep(): com.sun.org.apache.xalan.internal.xsltc.compiler.Step
                                    public getCompareValue(): com.sun.org.apache.xalan.internal.xsltc.compiler.Expression
                                    public translateFilter(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
                                    public translate(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
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