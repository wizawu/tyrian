declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
class LiteralElement extends com.sun.org.apache.xalan.internal.xsltc.compiler.Instruction {
    public getName(): com.sun.org.apache.xalan.internal.xsltc.compiler.QName
    public display(arg0: int): void
    public registerNamespace(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable, arg3: boolean): void
    public addAttribute(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode): void
    public setFirstAttribute(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode): void
    public typeCheck(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
    public getNamespaceScope(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SyntaxTreeNode): java.util.Set<java.util.Map$Entry<java.lang.String, java.lang.String>>
    public parseContents(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Parser): void
    protected contextDependent(): boolean
    public translate(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
    public getElemDesc(): com.sun.org.apache.xml.internal.serializer.ElemDesc
    public allAttributesUnique(): boolean
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