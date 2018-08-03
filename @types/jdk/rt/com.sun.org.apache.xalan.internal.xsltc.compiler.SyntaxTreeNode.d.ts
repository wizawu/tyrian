declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
                                abstract class SyntaxTreeNode implements com.sun.org.apache.xalan.internal.xsltc.compiler.Constants {
                                    protected _parent: com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode
                                    protected _qname: com.sun.org.apache.xalan.internal.xsltc.compiler.QName
                                    protected _attributes: org.xml.sax.helpers.AttributesImpl
                                    protected static readonly Dummy: com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode
                                    protected static readonly IndentIncrement: int
                                    public constructor()
                                    public constructor(arg0: int)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
                                    protected setLineNumber(arg0: int): void
                                    public getLineNumber(): int
                                    protected setQName(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.QName): void
                                    protected setQName(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    protected getQName(): com.sun.org.apache.xalan.internal.xsltc.compiler.QName
                                    protected setAttributes(arg0: org.xml.sax.helpers.AttributesImpl): void
                                    protected getAttribute(arg0: java.lang.String | string): string
                                    protected getAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                    protected hasAttribute(arg0: java.lang.String | string): boolean
                                    protected addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    protected getAttributes(): org.xml.sax.Attributes
                                    protected setPrefixMapping(arg0: java.util.Map<java.lang.String, java.lang.String>): void
                                    protected getPrefixMapping(): java.util.Map<java.lang.String, java.lang.String>
                                    protected addPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    protected lookupNamespace(arg0: java.lang.String | string): string
                                    protected lookupPrefix(arg0: java.lang.String | string): string
                                    protected setParser(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Parser): void
                                    public getParser(): com.sun.org.apache.xalan.internal.xsltc.compiler.Parser
                                    protected setParent(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode): void
                                    protected getParent(): com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode
                                    protected isDummy(): boolean
                                    protected getImportPrecedence(): int
                                    public getStylesheet(): com.sun.org.apache.xalan.internal.xsltc.compiler.Stylesheet
                                    protected getTemplate(): com.sun.org.apache.xalan.internal.xsltc.compiler.Template
                                    protected getXSLTC(): com.sun.org.apache.xalan.internal.xsltc.compiler.XSLTC
                                    protected getSymbolTable(): com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable
                                    public parseContents(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Parser): void
                                    protected parseChildren(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Parser): void
                                    protected updateScope(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Parser, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode): com.sun.org.apache.xalan.internal.xsltc.compiler.QName
                                    public abstract typeCheck(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                    protected typeCheckContents(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                    public abstract translate(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
                                    protected translateContents(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
                                    protected compileResultTree(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
                                    protected contextDependent(): boolean
                                    protected dependentContents(): boolean
                                    protected addElement(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode): void
                                    protected setFirstElement(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode): void
                                    protected removeElement(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode): void
                                    protected getContents(): java.util.List<com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode>
                                    protected hasContents(): boolean
                                    protected elementCount(): int
                                    protected elements(): java.util.Iterator<com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode>
                                    protected elementAt(arg0: int): com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode
                                    protected lastChild(): com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode
                                    public display(arg0: int): void
                                    protected displayContents(arg0: int): void
                                    protected indent(arg0: int): void
                                    protected reportError(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.Parser, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                                    protected reportWarning(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.Parser, arg2: java.lang.String | string, arg3: java.lang.String | string): void
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