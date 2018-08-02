declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace tree {
class TryCatchBlockNode {
    public start: jdk.internal.org.objectweb.asm.tree.LabelNode
    public end: jdk.internal.org.objectweb.asm.tree.LabelNode
    public handler: jdk.internal.org.objectweb.asm.tree.LabelNode
    public type: string
    public visibleTypeAnnotations: java.util.List<jdk.internal.org.objectweb.asm.tree.TypeAnnotationNode>
    public invisibleTypeAnnotations: java.util.List<jdk.internal.org.objectweb.asm.tree.TypeAnnotationNode>
    public constructor(arg0: jdk.internal.org.objectweb.asm.tree.LabelNode, arg1: jdk.internal.org.objectweb.asm.tree.LabelNode, arg2: jdk.internal.org.objectweb.asm.tree.LabelNode, arg3: java.lang.String | string)
    public updateIndex(arg0: int): void
    public accept(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}