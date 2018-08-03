declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace commons {
                        class LocalVariablesSorter extends jdk.internal.org.objectweb.asm.MethodVisitor {
                            protected readonly firstLocal: int
                            protected nextLocal: int
                            public constructor(arg0: int, arg1: java.lang.String | string, arg2: jdk.internal.org.objectweb.asm.MethodVisitor)
                            protected constructor(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: jdk.internal.org.objectweb.asm.MethodVisitor)
                            public visitVarInsn(arg0: int, arg1: int): void
                            public visitIincInsn(arg0: int, arg1: int): void
                            public visitMaxs(arg0: int, arg1: int): void
                            public visitLocalVariable(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: jdk.internal.org.objectweb.asm.Label, arg4: jdk.internal.org.objectweb.asm.Label, arg5: int): void
                            public visitLocalVariableAnnotation(arg0: int, arg1: jdk.internal.org.objectweb.asm.TypePath, arg2: jdk.internal.org.objectweb.asm.Label[], arg3: jdk.internal.org.objectweb.asm.Label[], arg4: int[], arg5: java.lang.String | string, arg6: boolean): jdk.internal.org.objectweb.asm.AnnotationVisitor
                            public visitFrame(arg0: int, arg1: int, arg2: java.lang.Object[], arg3: int, arg4: java.lang.Object[]): void
                            public newLocal(arg0: jdk.internal.org.objectweb.asm.Type): int
                            protected updateNewLocals(arg0: java.lang.Object[]): void
                            protected setLocalType(arg0: int, arg1: jdk.internal.org.objectweb.asm.Type): void
                            protected newLocalMapping(arg0: jdk.internal.org.objectweb.asm.Type): int
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}