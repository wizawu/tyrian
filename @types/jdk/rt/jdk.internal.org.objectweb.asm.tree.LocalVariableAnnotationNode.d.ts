declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace tree {
class LocalVariableAnnotationNode extends jdk.internal.org.objectweb.asm.tree.TypeAnnotationNode {
    public start: java.util.List<jdk.internal.org.objectweb.asm.tree.LabelNode>
    public end: java.util.List<jdk.internal.org.objectweb.asm.tree.LabelNode>
    public index: java.util.List<java.lang.Integer>
    public constructor(arg0: int, arg1: jdk.internal.org.objectweb.asm.TypePath, arg2: jdk.internal.org.objectweb.asm.tree.LabelNode[], arg3: jdk.internal.org.objectweb.asm.tree.LabelNode[], arg4: int[], arg5: java.lang.String | string)
    public constructor(arg0: int, arg1: int, arg2: jdk.internal.org.objectweb.asm.TypePath, arg3: jdk.internal.org.objectweb.asm.tree.LabelNode[], arg4: jdk.internal.org.objectweb.asm.tree.LabelNode[], arg5: int[], arg6: java.lang.String | string)
    public accept(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: boolean): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}