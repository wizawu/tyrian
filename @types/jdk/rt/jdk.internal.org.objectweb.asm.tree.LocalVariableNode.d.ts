declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace tree {
                        class LocalVariableNode {
                            public name: string
                            public desc: string
                            public signature: string
                            public start: jdk.internal.org.objectweb.asm.tree.LabelNode
                            public end: jdk.internal.org.objectweb.asm.tree.LabelNode
                            public index: int
                            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: jdk.internal.org.objectweb.asm.tree.LabelNode, arg4: jdk.internal.org.objectweb.asm.tree.LabelNode, arg5: int)
                            public accept(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}