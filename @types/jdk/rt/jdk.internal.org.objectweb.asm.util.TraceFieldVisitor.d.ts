declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace util {
                        class TraceFieldVisitor extends jdk.internal.org.objectweb.asm.FieldVisitor {
                            public readonly p: jdk.internal.org.objectweb.asm.util.Printer
                            public constructor(arg0: jdk.internal.org.objectweb.asm.util.Printer)
                            public constructor(arg0: jdk.internal.org.objectweb.asm.FieldVisitor, arg1: jdk.internal.org.objectweb.asm.util.Printer)
                            public visitAnnotation(arg0: java.lang.String | string, arg1: boolean): jdk.internal.org.objectweb.asm.AnnotationVisitor
                            public visitTypeAnnotation(arg0: int, arg1: jdk.internal.org.objectweb.asm.TypePath, arg2: java.lang.String | string, arg3: boolean): jdk.internal.org.objectweb.asm.AnnotationVisitor
                            public visitAttribute(arg0: jdk.internal.org.objectweb.asm.Attribute): void
                            public visitEnd(): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}