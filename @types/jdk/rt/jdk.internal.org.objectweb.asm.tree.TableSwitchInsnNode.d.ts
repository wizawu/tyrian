declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace tree {
                        class TableSwitchInsnNode extends jdk.internal.org.objectweb.asm.tree.AbstractInsnNode {
                            public min: int
                            public max: int
                            public dflt: jdk.internal.org.objectweb.asm.tree.LabelNode
                            public labels: java.util.List<jdk.internal.org.objectweb.asm.tree.LabelNode>
                            public constructor(arg0: int, arg1: int, arg2: jdk.internal.org.objectweb.asm.tree.LabelNode, ...arg3: jdk.internal.org.objectweb.asm.tree.LabelNode[])
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