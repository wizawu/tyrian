declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace util {
                        abstract class Printer {
                            public static readonly OPCODES: java.lang.String[]
                            public static readonly TYPES: java.lang.String[]
                            public static readonly HANDLE_TAG: java.lang.String[]
                            protected readonly api: int
                            protected readonly buf: java.lang.StringBuffer
                            public readonly text: java.util.List<java.lang.Object>
                            protected constructor(arg0: int)
                            public abstract visit(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String[]): void
                            public abstract visitSource(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public abstract visitOuterClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public abstract visitClassAnnotation(arg0: java.lang.String | string, arg1: boolean): jdk.internal.org.objectweb.asm.util.Printer
                            public visitClassTypeAnnotation(arg0: int, arg1: jdk.internal.org.objectweb.asm.TypePath, arg2: java.lang.String | string, arg3: boolean): jdk.internal.org.objectweb.asm.util.Printer
                            public abstract visitClassAttribute(arg0: jdk.internal.org.objectweb.asm.Attribute): void
                            public abstract visitInnerClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int): void
                            public abstract visitField(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.Object): jdk.internal.org.objectweb.asm.util.Printer
                            public abstract visitMethod(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String[]): jdk.internal.org.objectweb.asm.util.Printer
                            public abstract visitClassEnd(): void
                            public abstract visit(arg0: java.lang.String | string, arg1: java.lang.Object): void
                            public abstract visitEnum(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public abstract visitAnnotation(arg0: java.lang.String | string, arg1: java.lang.String | string): jdk.internal.org.objectweb.asm.util.Printer
                            public abstract visitArray(arg0: java.lang.String | string): jdk.internal.org.objectweb.asm.util.Printer
                            public abstract visitAnnotationEnd(): void
                            public abstract visitFieldAnnotation(arg0: java.lang.String | string, arg1: boolean): jdk.internal.org.objectweb.asm.util.Printer
                            public visitFieldTypeAnnotation(arg0: int, arg1: jdk.internal.org.objectweb.asm.TypePath, arg2: java.lang.String | string, arg3: boolean): jdk.internal.org.objectweb.asm.util.Printer
                            public abstract visitFieldAttribute(arg0: jdk.internal.org.objectweb.asm.Attribute): void
                            public abstract visitFieldEnd(): void
                            public visitParameter(arg0: java.lang.String | string, arg1: int): void
                            public abstract visitAnnotationDefault(): jdk.internal.org.objectweb.asm.util.Printer
                            public abstract visitMethodAnnotation(arg0: java.lang.String | string, arg1: boolean): jdk.internal.org.objectweb.asm.util.Printer
                            public visitMethodTypeAnnotation(arg0: int, arg1: jdk.internal.org.objectweb.asm.TypePath, arg2: java.lang.String | string, arg3: boolean): jdk.internal.org.objectweb.asm.util.Printer
                            public abstract visitParameterAnnotation(arg0: int, arg1: java.lang.String | string, arg2: boolean): jdk.internal.org.objectweb.asm.util.Printer
                            public abstract visitMethodAttribute(arg0: jdk.internal.org.objectweb.asm.Attribute): void
                            public abstract visitCode(): void
                            public abstract visitFrame(arg0: int, arg1: int, arg2: java.lang.Object[], arg3: int, arg4: java.lang.Object[]): void
                            public abstract visitInsn(arg0: int): void
                            public abstract visitIntInsn(arg0: int, arg1: int): void
                            public abstract visitVarInsn(arg0: int, arg1: int): void
                            public abstract visitTypeInsn(arg0: int, arg1: java.lang.String | string): void
                            public abstract visitFieldInsn(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                            public visitMethodInsn(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                            public visitMethodInsn(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: boolean): void
                            public abstract visitInvokeDynamicInsn(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: jdk.internal.org.objectweb.asm.Handle, ...arg3: java.lang.Object[]): void
                            public abstract visitJumpInsn(arg0: int, arg1: jdk.internal.org.objectweb.asm.Label): void
                            public abstract visitLabel(arg0: jdk.internal.org.objectweb.asm.Label): void
                            public abstract visitLdcInsn(arg0: java.lang.Object): void
                            public abstract visitIincInsn(arg0: int, arg1: int): void
                            public abstract visitTableSwitchInsn(arg0: int, arg1: int, arg2: jdk.internal.org.objectweb.asm.Label, ...arg3: jdk.internal.org.objectweb.asm.Label[]): void
                            public abstract visitLookupSwitchInsn(arg0: jdk.internal.org.objectweb.asm.Label, arg1: int[], arg2: jdk.internal.org.objectweb.asm.Label[]): void
                            public abstract visitMultiANewArrayInsn(arg0: java.lang.String | string, arg1: int): void
                            public visitInsnAnnotation(arg0: int, arg1: jdk.internal.org.objectweb.asm.TypePath, arg2: java.lang.String | string, arg3: boolean): jdk.internal.org.objectweb.asm.util.Printer
                            public abstract visitTryCatchBlock(arg0: jdk.internal.org.objectweb.asm.Label, arg1: jdk.internal.org.objectweb.asm.Label, arg2: jdk.internal.org.objectweb.asm.Label, arg3: java.lang.String | string): void
                            public visitTryCatchAnnotation(arg0: int, arg1: jdk.internal.org.objectweb.asm.TypePath, arg2: java.lang.String | string, arg3: boolean): jdk.internal.org.objectweb.asm.util.Printer
                            public abstract visitLocalVariable(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: jdk.internal.org.objectweb.asm.Label, arg4: jdk.internal.org.objectweb.asm.Label, arg5: int): void
                            public visitLocalVariableAnnotation(arg0: int, arg1: jdk.internal.org.objectweb.asm.TypePath, arg2: jdk.internal.org.objectweb.asm.Label[], arg3: jdk.internal.org.objectweb.asm.Label[], arg4: int[], arg5: java.lang.String | string, arg6: boolean): jdk.internal.org.objectweb.asm.util.Printer
                            public abstract visitLineNumber(arg0: int, arg1: jdk.internal.org.objectweb.asm.Label): void
                            public abstract visitMaxs(arg0: int, arg1: int): void
                            public abstract visitMethodEnd(): void
                            public getText(): java.util.List<java.lang.Object>
                            public print(arg0: java.io.PrintWriter): void
                            public static appendString(arg0: java.lang.StringBuffer, arg1: java.lang.String | string): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}