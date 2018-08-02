declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace commons {
class CodeSizeEvaluator extends jdk.internal.org.objectweb.asm.MethodVisitor implements jdk.internal.org.objectweb.asm.Opcodes {
    public constructor(arg0: jdk.internal.org.objectweb.asm.MethodVisitor)
    protected constructor(arg0: int, arg1: jdk.internal.org.objectweb.asm.MethodVisitor)
    public getMinSize(): int
    public getMaxSize(): int
    public visitInsn(arg0: int): void
    public visitIntInsn(arg0: int, arg1: int): void
    public visitVarInsn(arg0: int, arg1: int): void
    public visitTypeInsn(arg0: int, arg1: java.lang.String | string): void
    public visitFieldInsn(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
    public visitMethodInsn(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
    public visitMethodInsn(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: boolean): void
    public visitInvokeDynamicInsn(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: jdk.internal.org.objectweb.asm.Handle, ...arg3: java.lang.Object[]): void
    public visitJumpInsn(arg0: int, arg1: jdk.internal.org.objectweb.asm.Label): void
    public visitLdcInsn(arg0: java.lang.Object): void
    public visitIincInsn(arg0: int, arg1: int): void
    public visitTableSwitchInsn(arg0: int, arg1: int, arg2: jdk.internal.org.objectweb.asm.Label, ...arg3: jdk.internal.org.objectweb.asm.Label[]): void
    public visitLookupSwitchInsn(arg0: jdk.internal.org.objectweb.asm.Label, arg1: int[], arg2: jdk.internal.org.objectweb.asm.Label[]): void
    public visitMultiANewArrayInsn(arg0: java.lang.String | string, arg1: int): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}