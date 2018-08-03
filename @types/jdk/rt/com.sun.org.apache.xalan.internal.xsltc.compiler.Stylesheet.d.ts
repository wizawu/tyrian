declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
                                class Stylesheet extends com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode {
                                    public _importedFrom: com.sun.org.apache.xalan.internal.xsltc.compiler.Stylesheet
                                    public _includedFrom: com.sun.org.apache.xalan.internal.xsltc.compiler.Stylesheet
                                    public static readonly UNKNOWN_OUTPUT: int
                                    public static readonly XML_OUTPUT: int
                                    public static readonly HTML_OUTPUT: int
                                    public static readonly TEXT_OUTPUT: int
                                    public constructor()
                                    public getOutputMethod(): int
                                    public getTemplateInlining(): boolean
                                    public setTemplateInlining(arg0: boolean): void
                                    public isSimplified(): boolean
                                    public setSimplified(): void
                                    public setHasIdCall(arg0: boolean): void
                                    public setOutputProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public setOutputProperties(arg0: java.util.Properties): void
                                    public getOutputProperties(): java.util.Properties
                                    public getLastOutputElement(): com.sun.org.apache.xalan.internal.xsltc.compiler.Output
                                    public setMultiDocument(arg0: boolean): void
                                    public isMultiDocument(): boolean
                                    public setCallsNodeset(arg0: boolean): void
                                    public callsNodeset(): boolean
                                    public numberFormattingUsed(): void
                                    public setImportPrecedence(arg0: int): void
                                    public getImportPrecedence(): int
                                    public getMinimumDescendantPrecedence(): int
                                    public checkForLoop(arg0: java.lang.String | string): boolean
                                    public setParser(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Parser): void
                                    public setParentStylesheet(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Stylesheet): void
                                    public getParentStylesheet(): com.sun.org.apache.xalan.internal.xsltc.compiler.Stylesheet
                                    public setImportingStylesheet(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Stylesheet): void
                                    public setIncludingStylesheet(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Stylesheet): void
                                    public addIncludedStylesheet(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Stylesheet): void
                                    public setSystemId(arg0: java.lang.String | string): void
                                    public getSystemId(): string
                                    public setSourceLoader(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SourceLoader | com.sun.org.apache.xalan.internal.xsltc.compiler.SourceLoader$$Lambda): void
                                    public getSourceLoader(): com.sun.org.apache.xalan.internal.xsltc.compiler.SourceLoader
                                    public hasGlobals(): boolean
                                    public hasLocalParams(): boolean
                                    protected addPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public isExtension(arg0: java.lang.String | string): boolean
                                    public declareExtensionPrefixes(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Parser): void
                                    public parseContents(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Parser): void
                                    public parseOwnChildren(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Parser): void
                                    public processModes(): void
                                    public getMode(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.QName): com.sun.org.apache.xalan.internal.xsltc.compiler.Mode
                                    public typeCheck(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                    public translate(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
                                    public translate(): void
                                    public addParam(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Param): int
                                    public addVariable(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Variable): int
                                    public display(arg0: int): void
                                    public getNamespace(arg0: java.lang.String | string): string
                                    public getClassName(): string
                                    public getTemplates(): java.util.Vector
                                    public getAllValidTemplates(): java.util.Vector
                                    protected addTemplate(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Template): void
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