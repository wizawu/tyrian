declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace tree {
class InsnList {
    public constructor()
    public size(): int
    public getFirst(): jdk.internal.org.objectweb.asm.tree.AbstractInsnNode
    public getLast(): jdk.internal.org.objectweb.asm.tree.AbstractInsnNode
    public get(arg0: int): jdk.internal.org.objectweb.asm.tree.AbstractInsnNode
    public contains(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode): boolean
    public indexOf(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode): int
    public accept(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
    public iterator(): java.util.ListIterator<jdk.internal.org.objectweb.asm.tree.AbstractInsnNode>
    public iterator(arg0: int): java.util.ListIterator<jdk.internal.org.objectweb.asm.tree.AbstractInsnNode>
    public toArray(): jdk.internal.org.objectweb.asm.tree.AbstractInsnNode[]
    public set(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode): void
    public add(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode): void
    public add(arg0: jdk.internal.org.objectweb.asm.tree.InsnList): void
    public insert(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode): void
    public insert(arg0: jdk.internal.org.objectweb.asm.tree.InsnList): void
    public insert(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode): void
    public insert(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: jdk.internal.org.objectweb.asm.tree.InsnList): void
    public insertBefore(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode): void
    public insertBefore(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: jdk.internal.org.objectweb.asm.tree.InsnList): void
    public remove(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode): void
    public clear(): void
    public resetLabels(): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}