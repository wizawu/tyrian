declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace tree {
                        namespace analysis {
                            abstract class Interpreter<V extends jdk.internal.org.objectweb.asm.tree.analysis.Value> {
                                protected readonly api: int
                                protected constructor(arg0: int)
                                public abstract newValue(arg0: jdk.internal.org.objectweb.asm.Type): V
                                public abstract newOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode): V
                                public abstract copyOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: V): V
                                public abstract unaryOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: V): V
                                public abstract binaryOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: V, arg2: V): V
                                public abstract ternaryOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: V, arg2: V, arg3: V): V
                                public abstract naryOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: java.util.List<V>): V
                                public abstract returnOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: V, arg2: V): void
                                public abstract merge(arg0: V, arg1: V): V
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}