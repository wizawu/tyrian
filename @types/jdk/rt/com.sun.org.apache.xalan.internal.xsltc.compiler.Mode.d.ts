declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
class Mode implements com.sun.org.apache.xalan.internal.xsltc.compiler.Constants {
    public constructor(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.QName, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.Stylesheet, arg2: java.lang.String | string)
    public functionName(): string
    public functionName(arg0: int, arg1: int): string
    public getStylesheet(): com.sun.org.apache.xalan.internal.xsltc.compiler.Stylesheet
    public addTemplate(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Template): void
    public processPatterns(arg0: java.util.Map<java.lang.String, com.sun.org.apache.xalan.internal.xsltc.compiler.Key>): void
    public static compileGetChildren(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator, arg2: int): void
    public compileApplyTemplates(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator): void
    public compileApplyImports(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: int, arg2: int): void
    public getTemplateInstructionHandle(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Template): com.sun.org.apache.bcel.internal.generic.InstructionHandle
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