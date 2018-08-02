declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace tree {
                        namespace analysis {
abstract class Interpreter<V extends jdk.internal.org.objectweb.asm.tree.analysis.Value> {
    protected api: int
    protected constructor(arg0: int)
    public newValue(arg0: jdk.internal.org.objectweb.asm.Type): V
    public newOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode): V
    public copyOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: V): V
    public unaryOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: V): V
    public binaryOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: V, arg2: V): V
    public ternaryOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: V, arg2: V, arg3: V): V
    public naryOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: java.util.List<V>): V
    public returnOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: V, arg2: V): void
    public merge(arg0: V, arg1: V): V
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}