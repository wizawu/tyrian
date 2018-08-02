declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
                                namespace util {
class ReferenceType extends com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type {
    protected constructor()
    public toString(): string
    public identicalTo(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type): boolean
    public toSignature(): string
    public toJCType(): com.sun.org.apache.bcel.internal.generic.Type
    public translateTo(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator, arg2: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type): void
    public translateTo(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator, arg2: com.sun.org.apache.xalan.internal.xsltc.compiler.util.StringType): void
    public translateTo(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator, arg2: com.sun.org.apache.xalan.internal.xsltc.compiler.util.RealType): void
    public translateTo(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator, arg2: com.sun.org.apache.xalan.internal.xsltc.compiler.util.BooleanType): void
    public translateTo(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator, arg2: com.sun.org.apache.xalan.internal.xsltc.compiler.util.NodeSetType): void
    public translateTo(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator, arg2: com.sun.org.apache.xalan.internal.xsltc.compiler.util.NodeType): void
    public translateTo(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator, arg2: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ResultTreeType): void
    public translateTo(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator, arg2: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ObjectType): void
    public translateTo(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator, arg2: java.lang.Class): void
    public translateFrom(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator, arg2: java.lang.Class): void
    public translateToDesynthesized(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator, arg2: com.sun.org.apache.xalan.internal.xsltc.compiler.util.BooleanType): com.sun.org.apache.xalan.internal.xsltc.compiler.FlowList
    public translateBox(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
    public translateUnBox(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
    public LOAD(arg0: int): com.sun.org.apache.bcel.internal.generic.Instruction
    public STORE(arg0: int): com.sun.org.apache.bcel.internal.generic.Instruction
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