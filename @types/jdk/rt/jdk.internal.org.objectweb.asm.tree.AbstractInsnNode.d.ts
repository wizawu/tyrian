declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace tree {
                        abstract class AbstractInsnNode {
                            public static readonly INSN: int
                            public static readonly INT_INSN: int
                            public static readonly VAR_INSN: int
                            public static readonly TYPE_INSN: int
                            public static readonly FIELD_INSN: int
                            public static readonly METHOD_INSN: int
                            public static readonly INVOKE_DYNAMIC_INSN: int
                            public static readonly JUMP_INSN: int
                            public static readonly LABEL: int
                            public static readonly LDC_INSN: int
                            public static readonly IINC_INSN: int
                            public static readonly TABLESWITCH_INSN: int
                            public static readonly LOOKUPSWITCH_INSN: int
                            public static readonly MULTIANEWARRAY_INSN: int
                            public static readonly FRAME: int
                            public static readonly LINE: int
                            protected opcode: int
                            public visibleTypeAnnotations: java.util.List<jdk.internal.org.objectweb.asm.tree.TypeAnnotationNode>
                            public invisibleTypeAnnotations: java.util.List<jdk.internal.org.objectweb.asm.tree.TypeAnnotationNode>
                            protected constructor(arg0: int)
                            public getOpcode(): int
                            public abstract getType(): int
                            public getPrevious(): jdk.internal.org.objectweb.asm.tree.AbstractInsnNode
                            public getNext(): jdk.internal.org.objectweb.asm.tree.AbstractInsnNode
                            public abstract accept(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                            protected acceptAnnotations(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                            public abstract clone(arg0: java.util.Map<jdk.internal.org.objectweb.asm.tree.LabelNode, jdk.internal.org.objectweb.asm.tree.LabelNode>): jdk.internal.org.objectweb.asm.tree.AbstractInsnNode
                            protected cloneAnnotations(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode): jdk.internal.org.objectweb.asm.tree.AbstractInsnNode
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}