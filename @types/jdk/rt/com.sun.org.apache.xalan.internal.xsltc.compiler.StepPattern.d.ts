declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
                                class StepPattern extends com.sun.org.apache.xalan.internal.xsltc.compiler.RelativePathPattern {
                                    protected readonly _axis: int
                                    protected readonly _nodeType: int
                                    protected _predicates: java.util.Vector
                                    public constructor(arg0: int, arg1: int, arg2: java.util.Vector)
                                    public setParser(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Parser): void
                                    public getNodeType(): int
                                    public setPriority(arg0: double): void
                                    public getKernelPattern(): com.sun.org.apache.xalan.internal.xsltc.compiler.StepPattern
                                    public isWildcard(): boolean
                                    public setPredicates(arg0: java.util.Vector): com.sun.org.apache.xalan.internal.xsltc.compiler.StepPattern
                                    protected hasPredicates(): boolean
                                    public getDefaultPriority(): double
                                    public getAxis(): int
                                    public reduceKernelPattern(): void
                                    public toString(): string
                                    public typeCheck(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
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