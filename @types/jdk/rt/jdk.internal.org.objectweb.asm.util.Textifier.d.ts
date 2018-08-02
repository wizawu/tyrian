declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace util {
                        class Textifier extends jdk.internal.org.objectweb.asm.util.Printer {
                            public static INTERNAL_NAME: int
                            public static FIELD_DESCRIPTOR: int
                            public static FIELD_SIGNATURE: int
                            public static METHOD_DESCRIPTOR: int
                            public static METHOD_SIGNATURE: int
                            public static CLASS_SIGNATURE: int
                            public static TYPE_DECLARATION: int
                            public static CLASS_DECLARATION: int
                            public static PARAMETERS_DECLARATION: int
                            public static HANDLE_DESCRIPTOR: int
                            protected tab: string
                            protected tab2: string
                            protected tab3: string
                            protected ltab: string
                            protected labelNames: java.util.Map<jdk.internal.org.objectweb.asm.Label, java.lang.String>
                            public constructor()
                            protected constructor(arg0: int)
                            public static main(arg0: java.lang.String[]): void
                            public visit(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String[]): void
                            public visitSource(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public visitOuterClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public visitClassAnnotation(arg0: java.lang.String | string, arg1: boolean): jdk.internal.org.objectweb.asm.util.Textifier
                            public visitClassTypeAnnotation(arg0: int, arg1: jdk.internal.org.objectweb.asm.TypePath, arg2: java.lang.String | string, arg3: boolean): jdk.internal.org.objectweb.asm.util.Printer
                            public visitClassAttribute(arg0: jdk.internal.org.objectweb.asm.Attribute): void
                            public visitInnerClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int): void
                            public visitField(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.Object): jdk.internal.org.objectweb.asm.util.Textifier
                            public visitMethod(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String[]): jdk.internal.org.objectweb.asm.util.Textifier
                            public visitClassEnd(): void
                            public visit(arg0: java.lang.String | string, arg1: java.lang.Object): void
                            public visitEnum(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public visitAnnotation(arg0: java.lang.String | string, arg1: java.lang.String | string): jdk.internal.org.objectweb.asm.util.Textifier
                            public visitArray(arg0: java.lang.String | string): jdk.internal.org.objectweb.asm.util.Textifier
                            public visitAnnotationEnd(): void
                            public visitFieldAnnotation(arg0: java.lang.String | string, arg1: boolean): jdk.internal.org.objectweb.asm.util.Textifier
                            public visitFieldTypeAnnotation(arg0: int, arg1: jdk.internal.org.objectweb.asm.TypePath, arg2: java.lang.String | string, arg3: boolean): jdk.internal.org.objectweb.asm.util.Printer
                            public visitFieldAttribute(arg0: jdk.internal.org.objectweb.asm.Attribute): void
                            public visitFieldEnd(): void
                            public visitParameter(arg0: java.lang.String | string, arg1: int): void
                            public visitAnnotationDefault(): jdk.internal.org.objectweb.asm.util.Textifier
                            public visitMethodAnnotation(arg0: java.lang.String | string, arg1: boolean): jdk.internal.org.objectweb.asm.util.Textifier
                            public visitMethodTypeAnnotation(arg0: int, arg1: jdk.internal.org.objectweb.asm.TypePath, arg2: java.lang.String | string, arg3: boolean): jdk.internal.org.objectweb.asm.util.Printer
                            public visitParameterAnnotation(arg0: int, arg1: java.lang.String | string, arg2: boolean): jdk.internal.org.objectweb.asm.util.Textifier
                            public visitMethodAttribute(arg0: jdk.internal.org.objectweb.asm.Attribute): void
                            public visitCode(): void
                            public visitFrame(arg0: int, arg1: int, arg2: java.lang.Object[], arg3: int, arg4: java.lang.Object[]): void
                            public visitInsn(arg0: int): void
                            public visitIntInsn(arg0: int, arg1: int): void
                            public visitVarInsn(arg0: int, arg1: int): void
                            public visitTypeInsn(arg0: int, arg1: java.lang.String | string): void
                            public visitFieldInsn(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                            public visitMethodInsn(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                            public visitMethodInsn(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: boolean): void
                            public visitInvokeDynamicInsn(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: jdk.internal.org.objectweb.asm.Handle, ...arg3: java.lang.Object[]): void
                            public visitJumpInsn(arg0: int, arg1: jdk.internal.org.objectweb.asm.Label): void
                            public visitLabel(arg0: jdk.internal.org.objectweb.asm.Label): void
                            public visitLdcInsn(arg0: java.lang.Object): void
                            public visitIincInsn(arg0: int, arg1: int): void
                            public visitTableSwitchInsn(arg0: int, arg1: int, arg2: jdk.internal.org.objectweb.asm.Label, ...arg3: jdk.internal.org.objectweb.asm.Label[]): void
                            public visitLookupSwitchInsn(arg0: jdk.internal.org.objectweb.asm.Label, arg1: int[], arg2: jdk.internal.org.objectweb.asm.Label[]): void
                            public visitMultiANewArrayInsn(arg0: java.lang.String | string, arg1: int): void
                            public visitInsnAnnotation(arg0: int, arg1: jdk.internal.org.objectweb.asm.TypePath, arg2: java.lang.String | string, arg3: boolean): jdk.internal.org.objectweb.asm.util.Printer
                            public visitTryCatchBlock(arg0: jdk.internal.org.objectweb.asm.Label, arg1: jdk.internal.org.objectweb.asm.Label, arg2: jdk.internal.org.objectweb.asm.Label, arg3: java.lang.String | string): void
                            public visitTryCatchAnnotation(arg0: int, arg1: jdk.internal.org.objectweb.asm.TypePath, arg2: java.lang.String | string, arg3: boolean): jdk.internal.org.objectweb.asm.util.Printer
                            public visitLocalVariable(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: jdk.internal.org.objectweb.asm.Label, arg4: jdk.internal.org.objectweb.asm.Label, arg5: int): void
                            public visitLocalVariableAnnotation(arg0: int, arg1: jdk.internal.org.objectweb.asm.TypePath, arg2: jdk.internal.org.objectweb.asm.Label[], arg3: jdk.internal.org.objectweb.asm.Label[], arg4: int[], arg5: java.lang.String | string, arg6: boolean): jdk.internal.org.objectweb.asm.util.Printer
                            public visitLineNumber(arg0: int, arg1: jdk.internal.org.objectweb.asm.Label): void
                            public visitMaxs(arg0: int, arg1: int): void
                            public visitMethodEnd(): void
                            public visitAnnotation(arg0: java.lang.String | string, arg1: boolean): jdk.internal.org.objectweb.asm.util.Textifier
                            public visitTypeAnnotation(arg0: int, arg1: jdk.internal.org.objectweb.asm.TypePath, arg2: java.lang.String | string, arg3: boolean): jdk.internal.org.objectweb.asm.util.Textifier
                            public visitAttribute(arg0: jdk.internal.org.objectweb.asm.Attribute): void
                            protected createTextifier(): jdk.internal.org.objectweb.asm.util.Textifier
                            protected appendDescriptor(arg0: int, arg1: java.lang.String | string): void
                            protected appendLabel(arg0: jdk.internal.org.objectweb.asm.Label): void
                            protected appendHandle(arg0: jdk.internal.org.objectweb.asm.Handle): void
                            public visitParameterAnnotation(arg0: int, arg1: java.lang.String | string, arg2: boolean): jdk.internal.org.objectweb.asm.util.Printer
                            public visitMethodAnnotation(arg0: java.lang.String | string, arg1: boolean): jdk.internal.org.objectweb.asm.util.Printer
                            public visitAnnotationDefault(): jdk.internal.org.objectweb.asm.util.Printer
                            public visitFieldAnnotation(arg0: java.lang.String | string, arg1: boolean): jdk.internal.org.objectweb.asm.util.Printer
                            public visitArray(arg0: java.lang.String | string): jdk.internal.org.objectweb.asm.util.Printer
                            public visitAnnotation(arg0: java.lang.String | string, arg1: java.lang.String | string): jdk.internal.org.objectweb.asm.util.Printer
                            public visitMethod(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String[]): jdk.internal.org.objectweb.asm.util.Printer
                            public visitField(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.Object): jdk.internal.org.objectweb.asm.util.Printer
                            public visitClassAnnotation(arg0: java.lang.String | string, arg1: boolean): jdk.internal.org.objectweb.asm.util.Printer
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}