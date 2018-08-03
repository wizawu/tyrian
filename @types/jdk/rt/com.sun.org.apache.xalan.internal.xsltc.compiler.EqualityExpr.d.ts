declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
                                class EqualityExpr extends com.sun.org.apache.xalan.internal.xsltc.compiler.Expression {
                                    public constructor(arg0: int, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.Expression | com.sun.org.apache.xalan.internal.xsltc.compiler.Expression$$Lambda, arg2: com.sun.org.apache.xalan.internal.xsltc.compiler.Expression | com.sun.org.apache.xalan.internal.xsltc.compiler.Expression$$Lambda)
                                    public setParser(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Parser): void
                                    public toString(): string
                                    public getLeft(): com.sun.org.apache.xalan.internal.xsltc.compiler.Expression
                                    public getRight(): com.sun.org.apache.xalan.internal.xsltc.compiler.Expression
                                    public getOp(): boolean
                                    public hasPositionCall(): boolean
                                    public hasLastCall(): boolean
                                    public typeCheck(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                    public translateDesynthesized(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
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