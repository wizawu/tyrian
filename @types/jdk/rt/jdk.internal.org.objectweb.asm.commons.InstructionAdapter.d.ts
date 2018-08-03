declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace commons {
                        class InstructionAdapter extends jdk.internal.org.objectweb.asm.MethodVisitor {
                            public static readonly OBJECT_TYPE: jdk.internal.org.objectweb.asm.Type
                            public constructor(arg0: jdk.internal.org.objectweb.asm.MethodVisitor)
                            protected constructor(arg0: int, arg1: jdk.internal.org.objectweb.asm.MethodVisitor)
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
                            public nop(): void
                            public aconst(arg0: java.lang.Object): void
                            public iconst(arg0: int): void
                            public lconst(arg0: long): void
                            public fconst(arg0: float): void
                            public dconst(arg0: double): void
                            public tconst(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public hconst(arg0: jdk.internal.org.objectweb.asm.Handle): void
                            public load(arg0: int, arg1: jdk.internal.org.objectweb.asm.Type): void
                            public aload(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public store(arg0: int, arg1: jdk.internal.org.objectweb.asm.Type): void
                            public astore(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public pop(): void
                            public pop2(): void
                            public dup(): void
                            public dup2(): void
                            public dupX1(): void
                            public dupX2(): void
                            public dup2X1(): void
                            public dup2X2(): void
                            public swap(): void
                            public add(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public sub(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public mul(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public div(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public rem(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public neg(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public shl(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public shr(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public ushr(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public and(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public or(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public xor(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public iinc(arg0: int, arg1: int): void
                            public cast(arg0: jdk.internal.org.objectweb.asm.Type, arg1: jdk.internal.org.objectweb.asm.Type): void
                            public lcmp(): void
                            public cmpl(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public cmpg(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public ifeq(arg0: jdk.internal.org.objectweb.asm.Label): void
                            public ifne(arg0: jdk.internal.org.objectweb.asm.Label): void
                            public iflt(arg0: jdk.internal.org.objectweb.asm.Label): void
                            public ifge(arg0: jdk.internal.org.objectweb.asm.Label): void
                            public ifgt(arg0: jdk.internal.org.objectweb.asm.Label): void
                            public ifle(arg0: jdk.internal.org.objectweb.asm.Label): void
                            public ificmpeq(arg0: jdk.internal.org.objectweb.asm.Label): void
                            public ificmpne(arg0: jdk.internal.org.objectweb.asm.Label): void
                            public ificmplt(arg0: jdk.internal.org.objectweb.asm.Label): void
                            public ificmpge(arg0: jdk.internal.org.objectweb.asm.Label): void
                            public ificmpgt(arg0: jdk.internal.org.objectweb.asm.Label): void
                            public ificmple(arg0: jdk.internal.org.objectweb.asm.Label): void
                            public ifacmpeq(arg0: jdk.internal.org.objectweb.asm.Label): void
                            public ifacmpne(arg0: jdk.internal.org.objectweb.asm.Label): void
                            public goTo(arg0: jdk.internal.org.objectweb.asm.Label): void
                            public jsr(arg0: jdk.internal.org.objectweb.asm.Label): void
                            public ret(arg0: int): void
                            public tableswitch(arg0: int, arg1: int, arg2: jdk.internal.org.objectweb.asm.Label, ...arg3: jdk.internal.org.objectweb.asm.Label[]): void
                            public lookupswitch(arg0: jdk.internal.org.objectweb.asm.Label, arg1: int[], arg2: jdk.internal.org.objectweb.asm.Label[]): void
                            public areturn(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public getstatic(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public putstatic(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public getfield(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public putfield(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public invokevirtual(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public invokevirtual(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean): void
                            public invokespecial(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public invokespecial(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean): void
                            public invokestatic(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public invokestatic(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean): void
                            public invokeinterface(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public invokedynamic(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: jdk.internal.org.objectweb.asm.Handle, arg3: java.lang.Object[]): void
                            public anew(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public newarray(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public arraylength(): void
                            public athrow(): void
                            public checkcast(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public instanceOf(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public monitorenter(): void
                            public monitorexit(): void
                            public multianewarray(arg0: java.lang.String | string, arg1: int): void
                            public ifnull(arg0: jdk.internal.org.objectweb.asm.Label): void
                            public ifnonnull(arg0: jdk.internal.org.objectweb.asm.Label): void
                            public mark(arg0: jdk.internal.org.objectweb.asm.Label): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}