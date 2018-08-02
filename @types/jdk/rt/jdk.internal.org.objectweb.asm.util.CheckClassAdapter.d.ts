declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace util {
                        class CheckClassAdapter extends jdk.internal.org.objectweb.asm.ClassVisitor {
                            public static main(arg0: java.lang.String[]): void
                            public static verify(arg0: jdk.internal.org.objectweb.asm.ClassReader, arg1: java.lang.ClassLoader, arg2: boolean, arg3: java.io.PrintWriter): void
                            public static verify(arg0: jdk.internal.org.objectweb.asm.ClassReader, arg1: boolean, arg2: java.io.PrintWriter): void
                            public constructor(arg0: jdk.internal.org.objectweb.asm.ClassVisitor)
                            public constructor(arg0: jdk.internal.org.objectweb.asm.ClassVisitor, arg1: boolean)
                            protected constructor(arg0: int, arg1: jdk.internal.org.objectweb.asm.ClassVisitor, arg2: boolean)
                            public visit(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String[]): void
                            public visitSource(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public visitOuterClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public visitInnerClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int): void
                            public visitField(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.Object): jdk.internal.org.objectweb.asm.FieldVisitor
                            public visitMethod(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String[]): jdk.internal.org.objectweb.asm.MethodVisitor
                            public visitAnnotation(arg0: java.lang.String | string, arg1: boolean): jdk.internal.org.objectweb.asm.AnnotationVisitor
                            public visitTypeAnnotation(arg0: int, arg1: jdk.internal.org.objectweb.asm.TypePath, arg2: java.lang.String | string, arg3: boolean): jdk.internal.org.objectweb.asm.AnnotationVisitor
                            public visitAttribute(arg0: jdk.internal.org.objectweb.asm.Attribute): void
                            public visitEnd(): void
                            public static checkClassSignature(arg0: java.lang.String | string): void
                            public static checkMethodSignature(arg0: java.lang.String | string): void
                            public static checkFieldSignature(arg0: java.lang.String | string): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}