declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
                                class Step extends com.sun.org.apache.xalan.internal.xsltc.compiler.RelativeLocationPath {
                                    public constructor(arg0: int, arg1: int, arg2: java.util.Vector)
                                    public setParser(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Parser): void
                                    public getAxis(): int
                                    public setAxis(arg0: int): void
                                    public getNodeType(): int
                                    public getPredicates(): java.util.Vector
                                    public addPredicates(arg0: java.util.Vector): void
                                    public isAbbreviatedDot(): boolean
                                    public isAbbreviatedDDot(): boolean
                                    public typeCheck(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                    public translate(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
                                    public translatePredicates(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator, arg2: int): void
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