declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace commons {
                        class RemappingAnnotationAdapter extends jdk.internal.org.objectweb.asm.AnnotationVisitor {
                            protected readonly remapper: jdk.internal.org.objectweb.asm.commons.Remapper
                            public constructor(arg0: jdk.internal.org.objectweb.asm.AnnotationVisitor, arg1: jdk.internal.org.objectweb.asm.commons.Remapper)
                            protected constructor(arg0: int, arg1: jdk.internal.org.objectweb.asm.AnnotationVisitor, arg2: jdk.internal.org.objectweb.asm.commons.Remapper)
                            public visit(arg0: java.lang.String | string, arg1: java.lang.Object): void
                            public visitEnum(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public visitAnnotation(arg0: java.lang.String | string, arg1: java.lang.String | string): jdk.internal.org.objectweb.asm.AnnotationVisitor
                            public visitArray(arg0: java.lang.String | string): jdk.internal.org.objectweb.asm.AnnotationVisitor
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}