declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
class Parser implements com.sun.org.apache.xalan.internal.xsltc.compiler.Constants , org.xml.sax.ContentHandler {
    public constructor(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.XSLTC, arg1: boolean)
    public init(): void
    public setOutput(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Output): void
    public getOutput(): com.sun.org.apache.xalan.internal.xsltc.compiler.Output
    public getOutputProperties(): java.util.Properties
    public addVariable(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Variable): void
    public addParameter(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Param): void
    public removeVariable(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.QName): void
    public lookupVariable(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.QName): com.sun.org.apache.xalan.internal.xsltc.compiler.VariableBase
    public setXSLTC(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.XSLTC): void
    public getXSLTC(): com.sun.org.apache.xalan.internal.xsltc.compiler.XSLTC
    public getCurrentImportPrecedence(): int
    public getNextImportPrecedence(): int
    public setCurrentStylesheet(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Stylesheet): void
    public getCurrentStylesheet(): com.sun.org.apache.xalan.internal.xsltc.compiler.Stylesheet
    public getTopLevelStylesheet(): com.sun.org.apache.xalan.internal.xsltc.compiler.Stylesheet
    public getQNameSafe(arg0: java.lang.String | string): com.sun.org.apache.xalan.internal.xsltc.compiler.QName
    public getQName(arg0: java.lang.String | string): com.sun.org.apache.xalan.internal.xsltc.compiler.QName
    public getQNameIgnoreDefaultNs(arg0: java.lang.String | string): com.sun.org.apache.xalan.internal.xsltc.compiler.QName
    public getQName(arg0: java.lang.String | string, arg1: boolean): com.sun.org.apache.xalan.internal.xsltc.compiler.QName
    public getQName(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): com.sun.org.apache.xalan.internal.xsltc.compiler.QName
    public getQName(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xalan.internal.xsltc.compiler.QName
    public getQName(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.QName, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.QName): com.sun.org.apache.xalan.internal.xsltc.compiler.QName
    public getUseAttributeSets(): com.sun.org.apache.xalan.internal.xsltc.compiler.QName
    public getExtensionElementPrefixes(): com.sun.org.apache.xalan.internal.xsltc.compiler.QName
    public getExcludeResultPrefixes(): com.sun.org.apache.xalan.internal.xsltc.compiler.QName
    public makeStylesheet(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode): com.sun.org.apache.xalan.internal.xsltc.compiler.Stylesheet
    public createAST(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Stylesheet): void
    public parse(arg0: org.xml.sax.XMLReader, arg1: org.xml.sax.InputSource): com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode
    public parse(arg0: org.xml.sax.InputSource): com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode
    public getDocumentRoot(): com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode
    protected setPIParameters(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public elementSupported(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
    public functionSupported(arg0: java.lang.String | string): boolean
    public getSymbolTable(): com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable
    public getTemplate(): com.sun.org.apache.xalan.internal.xsltc.compiler.Template
    public setTemplate(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Template): void
    public getTemplateIndex(): int
    public makeInstance(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode
    public parseExpression(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode, arg1: java.lang.String | string): com.sun.org.apache.xalan.internal.xsltc.compiler.Expression
    public parseExpression(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode, arg1: java.lang.String | string, arg2: java.lang.String | string): com.sun.org.apache.xalan.internal.xsltc.compiler.Expression
    public parsePattern(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode, arg1: java.lang.String | string): com.sun.org.apache.xalan.internal.xsltc.compiler.Pattern
    public parsePattern(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode, arg1: java.lang.String | string, arg2: java.lang.String | string): com.sun.org.apache.xalan.internal.xsltc.compiler.Pattern
    public errorsFound(): boolean
    public printErrors(): void
    public printWarnings(): void
    public reportError(arg0: int, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ErrorMsg): void
    public getErrors(): java.util.ArrayList<com.sun.org.apache.xalan.internal.xsltc.compiler.util.ErrorMsg>
    public getWarnings(): java.util.ArrayList<com.sun.org.apache.xalan.internal.xsltc.compiler.util.ErrorMsg>
    public startDocument(): void
    public endDocument(): void
    public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public endPrefixMapping(arg0: java.lang.String | string): void
    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public characters(arg0: char[], arg1: int, arg2: int): void
    public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
    public skippedEntity(arg0: java.lang.String | string): void
    public setDocumentLocator(arg0: org.xml.sax.Locator): void
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