declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
                                class BinOpExpr extends com.sun.org.apache.xalan.internal.xsltc.compiler.Expression {
                                    public static PLUS: int
                                    public static MINUS: int
                                    public static TIMES: int
                                    public static DIV: int
                                    public static MOD: int
                                    public constructor(arg0: int, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.Expression, arg2: com.sun.org.apache.xalan.internal.xsltc.compiler.Expression)
                                    public hasPositionCall(): boolean
                                    public hasLastCall(): boolean
                                    public setParser(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Parser): void
                                    public typeCheck(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                    public translate(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
                                    public toString(): string
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