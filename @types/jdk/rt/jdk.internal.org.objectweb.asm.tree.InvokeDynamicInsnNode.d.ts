declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace tree {
                        class InvokeDynamicInsnNode extends jdk.internal.org.objectweb.asm.tree.AbstractInsnNode {
                            public name: string
                            public desc: string
                            public bsm: jdk.internal.org.objectweb.asm.Handle
                            public bsmArgs: java.lang.Object[]
                            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: jdk.internal.org.objectweb.asm.Handle, ...arg3: java.lang.Object[])
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