declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
                                class VariableBase extends com.sun.org.apache.xalan.internal.xsltc.compiler.TopLevelElement {
                                    protected _name: com.sun.org.apache.xalan.internal.xsltc.compiler.QName
                                    protected _escapedName: string
                                    protected _type: com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                    protected _isLocal: boolean
                                    protected _local: com.sun.org.apache.bcel.internal.generic.LocalVariableGen
                                    protected _loadInstruction: com.sun.org.apache.bcel.internal.generic.Instruction
                                    protected _storeInstruction: com.sun.org.apache.bcel.internal.generic.Instruction
                                    protected _select: com.sun.org.apache.xalan.internal.xsltc.compiler.Expression
                                    protected select: string
                                    protected _refs: java.util.Vector<com.sun.org.apache.xalan.internal.xsltc.compiler.VariableRefBase>
                                    protected _ignore: boolean
                                    public disable(): void
                                    public addReference(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.VariableRefBase): void
                                    public copyReferences(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.VariableBase): void
                                    public mapRegister(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
                                    public unmapRegister(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
                                    public loadInstruction(): com.sun.org.apache.bcel.internal.generic.Instruction
                                    public storeInstruction(): com.sun.org.apache.bcel.internal.generic.Instruction
                                    public getExpression(): com.sun.org.apache.xalan.internal.xsltc.compiler.Expression
                                    public toString(): string
                                    public display(arg0: int): void
                                    public getType(): com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type
                                    public getName(): com.sun.org.apache.xalan.internal.xsltc.compiler.QName
                                    public getEscapedName(): string
                                    public setName(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.QName): void
                                    public isLocal(): boolean
                                    public parseContents(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Parser): void
                                    public translateValue(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ClassGenerator, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.util.MethodGenerator): void
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