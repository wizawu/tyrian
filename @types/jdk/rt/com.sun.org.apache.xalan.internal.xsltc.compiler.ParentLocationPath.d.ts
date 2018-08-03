declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
                                class ParentLocationPath extends com.sun.org.apache.xalan.internal.xsltc.compiler.RelativeLocationPath {
                                    public constructor(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.RelativeLocationPath, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.Expression | com.sun.org.apache.xalan.internal.xsltc.compiler.Expression$$Lambda)
                                    public setAxis(arg0: int): void
                                    public getAxis(): int
                                    public getPath(): com.sun.org.apache.xalan.internal.xsltc.compiler.RelativeLocationPath
                                    public getStep(): com.sun.org.apache.xalan.internal.xsltc.compiler.Expression
                                    public setParser(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Parser): void
                                    public toString(): string
                                    public typeCheck(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                    public enableNodeOrdering(): void
                                    public checkAxisMismatch(): boolean
                                    public translate(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
                                    public translateStep(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
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