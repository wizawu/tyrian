declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace tree {
                        class AnnotationNode extends jdk.internal.org.objectweb.asm.AnnotationVisitor {
                            public desc: string
                            public values: java.util.List<java.lang.Object>
                            public constructor(arg0: java.lang.String | string)
                            public constructor(arg0: int, arg1: java.lang.String | string)
                            public visit(arg0: java.lang.String | string, arg1: java.lang.Object): void
                            public visitEnum(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public visitAnnotation(arg0: java.lang.String | string, arg1: java.lang.String | string): jdk.internal.org.objectweb.asm.AnnotationVisitor
                            public visitArray(arg0: java.lang.String | string): jdk.internal.org.objectweb.asm.AnnotationVisitor
                            public visitEnd(): void
                            public check(arg0: int): void
                            public accept(arg0: jdk.internal.org.objectweb.asm.AnnotationVisitor): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}