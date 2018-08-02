declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace tree {
                        class ClassNode extends jdk.internal.org.objectweb.asm.ClassVisitor {
                            public version: int
                            public access: int
                            public name: string
                            public signature: string
                            public superName: string
                            public interfaces: java.util.List<java.lang.String>
                            public sourceFile: string
                            public sourceDebug: string
                            public outerClass: string
                            public outerMethod: string
                            public outerMethodDesc: string
                            public visibleAnnotations: java.util.List<jdk.internal.org.objectweb.asm.tree.AnnotationNode>
                            public invisibleAnnotations: java.util.List<jdk.internal.org.objectweb.asm.tree.AnnotationNode>
                            public visibleTypeAnnotations: java.util.List<jdk.internal.org.objectweb.asm.tree.TypeAnnotationNode>
                            public invisibleTypeAnnotations: java.util.List<jdk.internal.org.objectweb.asm.tree.TypeAnnotationNode>
                            public attrs: java.util.List<jdk.internal.org.objectweb.asm.Attribute>
                            public innerClasses: java.util.List<jdk.internal.org.objectweb.asm.tree.InnerClassNode>
                            public fields: java.util.List<jdk.internal.org.objectweb.asm.tree.FieldNode>
                            public methods: java.util.List<jdk.internal.org.objectweb.asm.tree.MethodNode>
                            public constructor()
                            public constructor(arg0: int)
                            public visit(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String[]): void
                            public visitSource(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public visitOuterClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public visitAnnotation(arg0: java.lang.String | string, arg1: boolean): jdk.internal.org.objectweb.asm.AnnotationVisitor
                            public visitTypeAnnotation(arg0: int, arg1: jdk.internal.org.objectweb.asm.TypePath, arg2: java.lang.String | string, arg3: boolean): jdk.internal.org.objectweb.asm.AnnotationVisitor
                            public visitAttribute(arg0: jdk.internal.org.objectweb.asm.Attribute): void
                            public visitInnerClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int): void
                            public visitField(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.Object): jdk.internal.org.objectweb.asm.FieldVisitor
                            public visitMethod(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String[]): jdk.internal.org.objectweb.asm.MethodVisitor
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