declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                namespace debug {
class NashornTextifier extends jdk.internal.org.objectweb.asm.util.Printer {
    public constructor(arg0: jdk.nashorn.internal.runtime.ScriptEnvironment, arg1: jdk.nashorn.internal.ir.debug.NashornClassReader)
    protected constructor(arg0: int)
    public visit(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String[]): void
    public visitSource(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public visitOuterClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public visitField(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.Object): jdk.nashorn.internal.ir.debug.NashornTextifier
    public visitMethod(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String[]): jdk.nashorn.internal.ir.debug.NashornTextifier
    public visitClassEnd(): void
    public visitFieldEnd(): void
    public visitParameter(arg0: java.lang.String | string, arg1: int): void
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
    public visitTryCatchBlock(arg0: jdk.internal.org.objectweb.asm.Label, arg1: jdk.internal.org.objectweb.asm.Label, arg2: jdk.internal.org.objectweb.asm.Label, arg3: java.lang.String | string): void
    public visitLocalVariable(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: jdk.internal.org.objectweb.asm.Label, arg4: jdk.internal.org.objectweb.asm.Label, arg5: int): void
    public visitLineNumber(arg0: int, arg1: jdk.internal.org.objectweb.asm.Label): void
    public visitMaxs(arg0: int, arg1: int): void
    public visitMethodEnd(): void
    protected createNashornTextifier(): jdk.nashorn.internal.ir.debug.NashornTextifier
    public visitAnnotationDefault(): jdk.internal.org.objectweb.asm.util.Printer
    public visitClassAnnotation(arg0: java.lang.String | string, arg1: boolean): jdk.internal.org.objectweb.asm.util.Printer
    public visitClassAttribute(arg0: jdk.internal.org.objectweb.asm.Attribute): void
    public visitFieldAnnotation(arg0: java.lang.String | string, arg1: boolean): jdk.internal.org.objectweb.asm.util.Printer
    public visitFieldAttribute(arg0: jdk.internal.org.objectweb.asm.Attribute): void
    public visitMethodAnnotation(arg0: java.lang.String | string, arg1: boolean): jdk.internal.org.objectweb.asm.util.Printer
    public visitMethodAttribute(arg0: jdk.internal.org.objectweb.asm.Attribute): void
    public visitParameterAnnotation(arg0: int, arg1: java.lang.String | string, arg2: boolean): jdk.internal.org.objectweb.asm.util.Printer
    public visit(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public visitAnnotation(arg0: java.lang.String | string, arg1: java.lang.String | string): jdk.internal.org.objectweb.asm.util.Printer
    public visitAnnotationEnd(): void
    public visitArray(arg0: java.lang.String | string): jdk.internal.org.objectweb.asm.util.Printer
    public visitEnum(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public visitInnerClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int): void
    public visitMethod(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String[]): jdk.internal.org.objectweb.asm.util.Printer
    public visitField(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.Object): jdk.internal.org.objectweb.asm.util.Printer
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}