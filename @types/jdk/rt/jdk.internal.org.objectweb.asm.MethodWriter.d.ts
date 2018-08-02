declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    class MethodWriter extends jdk.internal.org.objectweb.asm.MethodVisitor {
                        public visitParameter(arg0: java.lang.String | string, arg1: int): void
                        public visitAnnotationDefault(): jdk.internal.org.objectweb.asm.AnnotationVisitor
                        public visitAnnotation(arg0: java.lang.String | string, arg1: boolean): jdk.internal.org.objectweb.asm.AnnotationVisitor
                        public visitTypeAnnotation(arg0: int, arg1: jdk.internal.org.objectweb.asm.TypePath, arg2: java.lang.String | string, arg3: boolean): jdk.internal.org.objectweb.asm.AnnotationVisitor
                        public visitParameterAnnotation(arg0: int, arg1: java.lang.String | string, arg2: boolean): jdk.internal.org.objectweb.asm.AnnotationVisitor
                        public visitAttribute(arg0: jdk.internal.org.objectweb.asm.Attribute): void
                        public visitCode(): void
                        public visitFrame(arg0: int, arg1: int, arg2: java.lang.Object[], arg3: int, arg4: java.lang.Object[]): void
                        public visitInsn(arg0: int): void
                        public visitIntInsn(arg0: int, arg1: int): void
                        public visitVarInsn(arg0: int, arg1: int): void
                        public visitTypeInsn(arg0: int, arg1: java.lang.String | string): void
                        public visitFieldInsn(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                        public visitMethodInsn(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: boolean): void
                        public visitInvokeDynamicInsn(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: jdk.internal.org.objectweb.asm.Handle, ...arg3: java.lang.Object[]): void
                        public visitJumpInsn(arg0: int, arg1: jdk.internal.org.objectweb.asm.Label): void
                        public visitLabel(arg0: jdk.internal.org.objectweb.asm.Label): void
                        public visitLdcInsn(arg0: java.lang.Object): void
                        public visitIincInsn(arg0: int, arg1: int): void
                        public visitTableSwitchInsn(arg0: int, arg1: int, arg2: jdk.internal.org.objectweb.asm.Label, ...arg3: jdk.internal.org.objectweb.asm.Label[]): void
                        public visitLookupSwitchInsn(arg0: jdk.internal.org.objectweb.asm.Label, arg1: int[], arg2: jdk.internal.org.objectweb.asm.Label[]): void
                        public visitMultiANewArrayInsn(arg0: java.lang.String | string, arg1: int): void
                        public visitInsnAnnotation(arg0: int, arg1: jdk.internal.org.objectweb.asm.TypePath, arg2: java.lang.String | string, arg3: boolean): jdk.internal.org.objectweb.asm.AnnotationVisitor
                        public visitTryCatchBlock(arg0: jdk.internal.org.objectweb.asm.Label, arg1: jdk.internal.org.objectweb.asm.Label, arg2: jdk.internal.org.objectweb.asm.Label, arg3: java.lang.String | string): void
                        public visitTryCatchAnnotation(arg0: int, arg1: jdk.internal.org.objectweb.asm.TypePath, arg2: java.lang.String | string, arg3: boolean): jdk.internal.org.objectweb.asm.AnnotationVisitor
                        public visitLocalVariable(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: jdk.internal.org.objectweb.asm.Label, arg4: jdk.internal.org.objectweb.asm.Label, arg5: int): void
                        public visitLocalVariableAnnotation(arg0: int, arg1: jdk.internal.org.objectweb.asm.TypePath, arg2: jdk.internal.org.objectweb.asm.Label[], arg3: jdk.internal.org.objectweb.asm.Label[], arg4: int[], arg5: java.lang.String | string, arg6: boolean): jdk.internal.org.objectweb.asm.AnnotationVisitor
                        public visitLineNumber(arg0: int, arg1: jdk.internal.org.objectweb.asm.Label): void
                        public visitMaxs(arg0: int, arg1: int): void
                        public visitEnd(): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}