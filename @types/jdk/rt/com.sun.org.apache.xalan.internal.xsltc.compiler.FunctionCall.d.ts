declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
                                class FunctionCall extends com.sun.org.apache.xalan.internal.xsltc.compiler.Expression {
                                    protected static readonly EXT_XSLTC: string
                                    protected static readonly JAVA_EXT_XSLTC: string
                                    protected static readonly EXT_XALAN: string
                                    protected static readonly JAVA_EXT_XALAN: string
                                    protected static readonly JAVA_EXT_XALAN_OLD: string
                                    protected static readonly EXSLT_COMMON: string
                                    protected static readonly EXSLT_MATH: string
                                    protected static readonly EXSLT_SETS: string
                                    protected static readonly EXSLT_DATETIME: string
                                    protected static readonly EXSLT_STRINGS: string
                                    protected static readonly XALAN_CLASSPACKAGE_NAMESPACE: string
                                    protected static readonly NAMESPACE_FORMAT_JAVA: int
                                    protected static readonly NAMESPACE_FORMAT_CLASS: int
                                    protected static readonly NAMESPACE_FORMAT_PACKAGE: int
                                    protected static readonly NAMESPACE_FORMAT_CLASS_OR_PACKAGE: int
                                    public constructor(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.QName, arg1: java.util.Vector)
                                    public constructor(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.QName)
                                    public getName(): string
                                    public setParser(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Parser): void
                                    public getClassNameFromUri(arg0: java.lang.String | string): string
                                    public typeCheck(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                    public typeCheckStandard(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                    public typeCheckConstructor(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                    public typeCheckExternal(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                    public typeCheckArgs(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable): java.util.Vector
                                    protected argument(arg0: int): com.sun.org.apache.xalan.internal.xsltc.compiler.Expression
                                    protected argument(): com.sun.org.apache.xalan.internal.xsltc.compiler.Expression
                                    protected argumentCount(): int
                                    protected setArgument(arg0: int, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.Expression | com.sun.org.apache.xalan.internal.xsltc.compiler.Expression$$Lambda): void
                                    public translateDesynthesized(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
                                    public translate(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
                                    public toString(): string
                                    public isStandard(): boolean
                                    public isExtension(): boolean
                                    protected static replaceDash(arg0: java.lang.String | string): string
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