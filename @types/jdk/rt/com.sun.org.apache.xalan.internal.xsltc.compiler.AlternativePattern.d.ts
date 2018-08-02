declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
                                class AlternativePattern extends com.sun.org.apache.xalan.internal.xsltc.compiler.Pattern {
                                    public constructor(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Pattern, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.Pattern)
                                    public setParser(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Parser): void
                                    public getLeft(): com.sun.org.apache.xalan.internal.xsltc.compiler.Pattern
                                    public getRight(): com.sun.org.apache.xalan.internal.xsltc.compiler.Pattern
                                    public typeCheck(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                    public getPriority(): double
                                    public toString(): string
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