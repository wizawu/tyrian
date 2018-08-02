declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace org {
                        namespace objectweb {
                            namespace asm {
interface MethodVisitor {
    visitAnnotationDefault(): com.sun.xml.internal.ws.org.objectweb.asm.AnnotationVisitor
    visitAnnotation(arg0: java.lang.String | string, arg1: boolean): com.sun.xml.internal.ws.org.objectweb.asm.AnnotationVisitor
    visitParameterAnnotation(arg0: int, arg1: java.lang.String | string, arg2: boolean): com.sun.xml.internal.ws.org.objectweb.asm.AnnotationVisitor
    visitAttribute(arg0: com.sun.xml.internal.ws.org.objectweb.asm.Attribute): void
    visitCode(): void
    visitFrame(arg0: int, arg1: int, arg2: java.lang.Object[], arg3: int, arg4: java.lang.Object[]): void
    visitInsn(arg0: int): void
    visitIntInsn(arg0: int, arg1: int): void
    visitVarInsn(arg0: int, arg1: int): void
    visitTypeInsn(arg0: int, arg1: java.lang.String | string): void
    visitFieldInsn(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
    visitMethodInsn(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
    visitJumpInsn(arg0: int, arg1: com.sun.xml.internal.ws.org.objectweb.asm.Label): void
    visitLabel(arg0: com.sun.xml.internal.ws.org.objectweb.asm.Label): void
    visitLdcInsn(arg0: java.lang.Object): void
    visitIincInsn(arg0: int, arg1: int): void
    visitTableSwitchInsn(arg0: int, arg1: int, arg2: com.sun.xml.internal.ws.org.objectweb.asm.Label, arg3: com.sun.xml.internal.ws.org.objectweb.asm.Label[]): void
    visitLookupSwitchInsn(arg0: com.sun.xml.internal.ws.org.objectweb.asm.Label, arg1: int[], arg2: com.sun.xml.internal.ws.org.objectweb.asm.Label[]): void
    visitMultiANewArrayInsn(arg0: java.lang.String | string, arg1: int): void
    visitTryCatchBlock(arg0: com.sun.xml.internal.ws.org.objectweb.asm.Label, arg1: com.sun.xml.internal.ws.org.objectweb.asm.Label, arg2: com.sun.xml.internal.ws.org.objectweb.asm.Label, arg3: java.lang.String | string): void
    visitLocalVariable(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: com.sun.xml.internal.ws.org.objectweb.asm.Label, arg4: com.sun.xml.internal.ws.org.objectweb.asm.Label, arg5: int): void
    visitLineNumber(arg0: int, arg1: com.sun.xml.internal.ws.org.objectweb.asm.Label): void
    visitMaxs(arg0: int, arg1: int): void
    visitEnd(): void
}

                            }
                        }
                    }
                }
            }
        }
    }
}