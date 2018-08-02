declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
class SymbolTable {
    public getDecimalFormatting(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.QName): com.sun.org.apache.xalan.internal.xsltc.compiler.DecimalFormatting
    public addDecimalFormatting(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.QName, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.DecimalFormatting): void
    public getKey(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.QName): com.sun.org.apache.xalan.internal.xsltc.compiler.Key
    public addKey(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.QName, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.Key): void
    public addStylesheet(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.QName, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.Stylesheet): com.sun.org.apache.xalan.internal.xsltc.compiler.Stylesheet
    public lookupStylesheet(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.QName): com.sun.org.apache.xalan.internal.xsltc.compiler.Stylesheet
    public addTemplate(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Template): com.sun.org.apache.xalan.internal.xsltc.compiler.Template
    public lookupTemplate(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.QName): com.sun.org.apache.xalan.internal.xsltc.compiler.Template
    public addVariable(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Variable): com.sun.org.apache.xalan.internal.xsltc.compiler.Variable
    public addParam(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Param): com.sun.org.apache.xalan.internal.xsltc.compiler.Param
    public lookupVariable(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.QName): com.sun.org.apache.xalan.internal.xsltc.compiler.Variable
    public lookupParam(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.QName): com.sun.org.apache.xalan.internal.xsltc.compiler.Param
    public lookupName(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.QName): com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode
    public addAttributeSet(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.AttributeSet): com.sun.org.apache.xalan.internal.xsltc.compiler.AttributeSet
    public lookupAttributeSet(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.QName): com.sun.org.apache.xalan.internal.xsltc.compiler.AttributeSet
    public addPrimop(arg0: java.lang.String | string, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodType): void
    public lookupPrimop(arg0: java.lang.String | string): java.util.Vector
    public generateNamespacePrefix(): string
    public setCurrentNode(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode): void
    public lookupNamespace(arg0: java.lang.String | string): string
    public addPrefixAlias(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public lookupPrefixAlias(arg0: java.lang.String | string): string
    public excludeURI(arg0: java.lang.String | string): void
    public excludeNamespaces(arg0: java.lang.String | string): void
    public isExcludedNamespace(arg0: java.lang.String | string): boolean
    public unExcludeNamespaces(arg0: java.lang.String | string): void
    public pushExcludedNamespacesContext(): void
    public popExcludedNamespacesContext(): void
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