declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace tree {
abstract class AbstractInsnNode {
    public static INSN: int
    public static INT_INSN: int
    public static VAR_INSN: int
    public static TYPE_INSN: int
    public static FIELD_INSN: int
    public static METHOD_INSN: int
    public static INVOKE_DYNAMIC_INSN: int
    public static JUMP_INSN: int
    public static LABEL: int
    public static LDC_INSN: int
    public static IINC_INSN: int
    public static TABLESWITCH_INSN: int
    public static LOOKUPSWITCH_INSN: int
    public static MULTIANEWARRAY_INSN: int
    public static FRAME: int
    public static LINE: int
    protected opcode: int
    public visibleTypeAnnotations: java.util.List<jdk.internal.org.objectweb.asm.tree.TypeAnnotationNode>
    public invisibleTypeAnnotations: java.util.List<jdk.internal.org.objectweb.asm.tree.TypeAnnotationNode>
    protected constructor(arg0: int)
    public getOpcode(): int
    public getType(): int
    public getPrevious(): jdk.internal.org.objectweb.asm.tree.AbstractInsnNode
    public getNext(): jdk.internal.org.objectweb.asm.tree.AbstractInsnNode
    public accept(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
    protected acceptAnnotations(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
    public clone(arg0: java.util.Map<jdk.internal.org.objectweb.asm.tree.LabelNode, jdk.internal.org.objectweb.asm.tree.LabelNode>): jdk.internal.org.objectweb.asm.tree.AbstractInsnNode
    protected cloneAnnotations(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode): jdk.internal.org.objectweb.asm.tree.AbstractInsnNode
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}