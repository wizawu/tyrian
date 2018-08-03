declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
                                class LogicalExpr extends com.sun.org.apache.xalan.internal.xsltc.compiler.Expression {
                                    public static readonly OR: int
                                    public static readonly AND: int
                                    public constructor(arg0: int, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.Expression | com.sun.org.apache.xalan.internal.xsltc.compiler.Expression$$Lambda, arg2: com.sun.org.apache.xalan.internal.xsltc.compiler.Expression | com.sun.org.apache.xalan.internal.xsltc.compiler.Expression$$Lambda)
                                    public hasPositionCall(): boolean
                                    public hasLastCall(): boolean
                                    public evaluateAtCompileTime(): java.lang.Object
                                    public getOp(): int
                                    public setParser(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Parser): void
                                    public toString(): string
                                    public typeCheck(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                    public translate(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
                                    public translateDesynthesized(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
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