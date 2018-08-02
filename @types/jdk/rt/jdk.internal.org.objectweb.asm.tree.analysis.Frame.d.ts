declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace tree {
                        namespace analysis {
class Frame<V extends jdk.internal.org.objectweb.asm.tree.analysis.Value> {
    public constructor(arg0: int, arg1: int)
    public constructor(arg0: jdk.internal.org.objectweb.asm.tree.analysis.Frame<V>)
    public init(arg0: jdk.internal.org.objectweb.asm.tree.analysis.Frame<V>): jdk.internal.org.objectweb.asm.tree.analysis.Frame<V>
    public setReturn(arg0: V): void
    public getLocals(): int
    public getMaxStackSize(): int
    public getLocal(arg0: int): V
    public setLocal(arg0: int, arg1: V): void
    public getStackSize(): int
    public getStack(arg0: int): V
    public clearStack(): void
    public pop(): V
    public push(arg0: V): void
    public execute(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: jdk.internal.org.objectweb.asm.tree.analysis.Interpreter<V>): void
    public merge(arg0: jdk.internal.org.objectweb.asm.tree.analysis.Frame<V>, arg1: jdk.internal.org.objectweb.asm.tree.analysis.Interpreter<V>): boolean
    public merge(arg0: jdk.internal.org.objectweb.asm.tree.analysis.Frame<V>, arg1: boolean[]): boolean
    public toString(): string
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}