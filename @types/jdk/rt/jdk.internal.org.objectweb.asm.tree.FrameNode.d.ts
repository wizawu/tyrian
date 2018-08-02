declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace tree {
class FrameNode extends jdk.internal.org.objectweb.asm.tree.AbstractInsnNode {
    public type: int
    public local: java.util.List<java.lang.Object>
    public stack: java.util.List<java.lang.Object>
    public constructor(arg0: int, arg1: int, arg2: java.lang.Object[], arg3: int, arg4: java.lang.Object[])
    public getType(): int
    public accept(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
    public clone(arg0: java.util.Map<jdk.internal.org.objectweb.asm.tree.LabelNode, jdk.internal.org.objectweb.asm.tree.LabelNode>): jdk.internal.org.objectweb.asm.tree.AbstractInsnNode
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}