declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace commons {
                        class AnalyzerAdapter extends jdk.internal.org.objectweb.asm.MethodVisitor {
                            public locals: java.util.List<java.lang.Object>
                            public stack: java.util.List<java.lang.Object>
                            public uninitializedTypes: java.util.Map<java.lang.Object, java.lang.Object>
                            public constructor(arg0: java.lang.String | string, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: jdk.internal.org.objectweb.asm.MethodVisitor)
                            protected constructor(arg0: int, arg1: java.lang.String | string, arg2: int, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: jdk.internal.org.objectweb.asm.MethodVisitor)
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
                            public visitMaxs(arg0: int, arg1: int): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}