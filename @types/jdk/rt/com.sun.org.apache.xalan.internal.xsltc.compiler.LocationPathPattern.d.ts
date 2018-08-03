declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
                                abstract class LocationPathPattern extends com.sun.org.apache.xalan.internal.xsltc.compiler.Pattern {
                                    public constructor()
                                    public typeCheck(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                    public translate(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
                                    public setTemplate(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Template): void
                                    public getTemplate(): com.sun.org.apache.xalan.internal.xsltc.compiler.Template
                                    public getPriority(): double
                                    public getDefaultPriority(): double
                                    public noSmallerThan(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.LocationPathPattern): boolean
                                    public abstract getKernelPattern(): com.sun.org.apache.xalan.internal.xsltc.compiler.StepPattern
                                    public abstract reduceKernelPattern(): void
                                    public abstract isWildcard(): boolean
                                    public getAxis(): int
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