declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace commons {
                        class RemappingClassAdapter extends jdk.internal.org.objectweb.asm.ClassVisitor {
                            protected remapper: jdk.internal.org.objectweb.asm.commons.Remapper
                            protected className: string
                            public constructor(arg0: jdk.internal.org.objectweb.asm.ClassVisitor, arg1: jdk.internal.org.objectweb.asm.commons.Remapper)
                            protected constructor(arg0: int, arg1: jdk.internal.org.objectweb.asm.ClassVisitor, arg2: jdk.internal.org.objectweb.asm.commons.Remapper)
                            public visit(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String[]): void
                            public visitAnnotation(arg0: java.lang.String | string, arg1: boolean): jdk.internal.org.objectweb.asm.AnnotationVisitor
                            public visitTypeAnnotation(arg0: int, arg1: jdk.internal.org.objectweb.asm.TypePath, arg2: java.lang.String | string, arg3: boolean): jdk.internal.org.objectweb.asm.AnnotationVisitor
                            public visitField(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.Object): jdk.internal.org.objectweb.asm.FieldVisitor
                            public visitMethod(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String[]): jdk.internal.org.objectweb.asm.MethodVisitor
                            public visitInnerClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int): void
                            public visitOuterClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            protected createRemappingFieldAdapter(arg0: jdk.internal.org.objectweb.asm.FieldVisitor): jdk.internal.org.objectweb.asm.FieldVisitor
                            protected createRemappingMethodAdapter(arg0: int, arg1: java.lang.String | string, arg2: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.internal.org.objectweb.asm.MethodVisitor
                            protected createRemappingAnnotationAdapter(arg0: jdk.internal.org.objectweb.asm.AnnotationVisitor): jdk.internal.org.objectweb.asm.AnnotationVisitor
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}