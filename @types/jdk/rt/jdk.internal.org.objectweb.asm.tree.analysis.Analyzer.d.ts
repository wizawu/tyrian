declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace tree {
                        namespace analysis {
class Analyzer<V extends jdk.internal.org.objectweb.asm.tree.analysis.Value> implements jdk.internal.org.objectweb.asm.Opcodes {
    public constructor(arg0: jdk.internal.org.objectweb.asm.tree.analysis.Interpreter<V>)
    public analyze(arg0: java.lang.String | string, arg1: jdk.internal.org.objectweb.asm.tree.MethodNode): jdk.internal.org.objectweb.asm.tree.analysis.Frame<V>[]
    public getFrames(): jdk.internal.org.objectweb.asm.tree.analysis.Frame<V>[]
    public getHandlers(arg0: int): java.util.List<jdk.internal.org.objectweb.asm.tree.TryCatchBlockNode>
    protected init(arg0: java.lang.String | string, arg1: jdk.internal.org.objectweb.asm.tree.MethodNode): void
    protected newFrame(arg0: int, arg1: int): jdk.internal.org.objectweb.asm.tree.analysis.Frame<V>
    protected newFrame(arg0: jdk.internal.org.objectweb.asm.tree.analysis.Frame<V>): jdk.internal.org.objectweb.asm.tree.analysis.Frame<V>
    protected newControlFlowEdge(arg0: int, arg1: int): void
    protected newControlFlowExceptionEdge(arg0: int, arg1: int): boolean
    protected newControlFlowExceptionEdge(arg0: int, arg1: jdk.internal.org.objectweb.asm.tree.TryCatchBlockNode): boolean
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}