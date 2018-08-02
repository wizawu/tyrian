declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace tree {
class FieldNode extends jdk.internal.org.objectweb.asm.FieldVisitor {
    public access: int
    public name: string
    public desc: string
    public signature: string
    public value: java.lang.Object
    public visibleAnnotations: java.util.List<jdk.internal.org.objectweb.asm.tree.AnnotationNode>
    public invisibleAnnotations: java.util.List<jdk.internal.org.objectweb.asm.tree.AnnotationNode>
    public visibleTypeAnnotations: java.util.List<jdk.internal.org.objectweb.asm.tree.TypeAnnotationNode>
    public invisibleTypeAnnotations: java.util.List<jdk.internal.org.objectweb.asm.tree.TypeAnnotationNode>
    public attrs: java.util.List<jdk.internal.org.objectweb.asm.Attribute>
    public constructor(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.Object)
    public constructor(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.Object)
    public visitAnnotation(arg0: java.lang.String | string, arg1: boolean): jdk.internal.org.objectweb.asm.AnnotationVisitor
    public visitTypeAnnotation(arg0: int, arg1: jdk.internal.org.objectweb.asm.TypePath, arg2: java.lang.String | string, arg3: boolean): jdk.internal.org.objectweb.asm.AnnotationVisitor
    public visitAttribute(arg0: jdk.internal.org.objectweb.asm.Attribute): void
    public visitEnd(): void
    public check(arg0: int): void
    public accept(arg0: jdk.internal.org.objectweb.asm.ClassVisitor): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}