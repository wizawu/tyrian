declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
class Whitespace extends com.sun.org.apache.xalan.internal.xsltc.compiler.TopLevelElement {
    public static USE_PREDICATE: int
    public static STRIP_SPACE: int
    public static PRESERVE_SPACE: int
    public static RULE_NONE: int
    public static RULE_ELEMENT: int
    public static RULE_NAMESPACE: int
    public static RULE_ALL: int
    public parseContents(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Parser): void
    public getRules(): java.util.Vector
    public static compileStripSpace(arg0: com.sun.org.apache.bcel.internal.generic.BranchHandle[], arg1: int, arg2: com.sun.org.apache.bcel.internal.generic.InstructionList): void
    public static compilePreserveSpace(arg0: com.sun.org.apache.bcel.internal.generic.BranchHandle[], arg1: int, arg2: com.sun.org.apache.bcel.internal.generic.InstructionList): void
    public static translateRules(arg0: java.util.Vector, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator): int
    public typeCheck(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
    public translate(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
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