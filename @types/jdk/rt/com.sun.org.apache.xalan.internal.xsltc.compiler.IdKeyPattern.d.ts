declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
abstract class IdKeyPattern extends com.sun.org.apache.xalan.internal.xsltc.compiler.LocationPathPattern {
    protected _left: com.sun.org.apache.xalan.internal.xsltc.compiler.RelativePathPattern
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
    public getIndexName(): string
    public typeCheck(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
    public isWildcard(): boolean
    public setLeft(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.RelativePathPattern): void
    public getKernelPattern(): com.sun.org.apache.xalan.internal.xsltc.compiler.StepPattern
    public reduceKernelPattern(): void
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