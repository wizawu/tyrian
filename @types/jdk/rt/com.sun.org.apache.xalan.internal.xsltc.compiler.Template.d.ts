declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
class Template extends com.sun.org.apache.xalan.internal.xsltc.compiler.TopLevelElement {
    public constructor()
    public hasParams(): boolean
    public isSimplified(): boolean
    public setSimplified(): void
    public isSimpleNamedTemplate(): boolean
    public addParameter(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Param): void
    public getParameters(): java.util.Vector<com.sun.org.apache.xalan.internal.xsltc.compiler.Param>
    public disable(): void
    public disabled(): boolean
    public getPriority(): double
    public getPosition(): int
    public isNamed(): boolean
    public getPattern(): com.sun.org.apache.xalan.internal.xsltc.compiler.Pattern
    public getName(): com.sun.org.apache.xalan.internal.xsltc.compiler.QName
    public setName(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.QName): void
    public getModeName(): com.sun.org.apache.xalan.internal.xsltc.compiler.QName
    public compareTo(arg0: java.lang.Object): int
    public display(arg0: int): void
    public getStylesheet(): com.sun.org.apache.xalan.internal.xsltc.compiler.Stylesheet
    public parseContents(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Parser): void
    public parseSimplified(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Stylesheet, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.Parser): void
    public typeCheck(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
    public translate(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
    public getDependencies(): java.util.Vector
    public addDependency(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.TopLevelElement): void
    public compile(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): com.sun.org.apache.bcel.internal.generic.InstructionList
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