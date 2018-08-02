declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
                                namespace util {
class ClassGenerator extends com.sun.org.apache.bcel.internal.generic.ClassGen {
    protected static TRANSLET_INDEX: int
    protected static INVALID_INDEX: int
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int, arg4: java.lang.String[], arg5: com.sun.org.apache.xalan.internal.xsltc.compiler.Stylesheet)
    public getParser(): com.sun.org.apache.xalan.internal.xsltc.compiler.Parser
    public getStylesheet(): com.sun.org.apache.xalan.internal.xsltc.compiler.Stylesheet
    public getClassName(): string
    public loadTranslet(): com.sun.org.apache.bcel.internal.generic.Instruction
    public getDOMClass(): string
    public getDOMClassSig(): string
    public getApplyTemplatesSig(): string
    public getApplyTemplatesSigForImport(): string
    public isExternal(): boolean
    public addMethod(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
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
}