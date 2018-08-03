declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace util {
                        class TraceClassVisitor extends jdk.internal.org.objectweb.asm.ClassVisitor {
                            public readonly p: jdk.internal.org.objectweb.asm.util.Printer
                            public constructor(arg0: java.io.PrintWriter)
                            public constructor(arg0: jdk.internal.org.objectweb.asm.ClassVisitor, arg1: java.io.PrintWriter)
                            public constructor(arg0: jdk.internal.org.objectweb.asm.ClassVisitor, arg1: jdk.internal.org.objectweb.asm.util.Printer, arg2: java.io.PrintWriter)
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
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}