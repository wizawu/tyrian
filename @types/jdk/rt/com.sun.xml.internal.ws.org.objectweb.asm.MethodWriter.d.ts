declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace org {
                        namespace objectweb {
                            namespace asm {
class MethodWriter implements com.sun.xml.internal.ws.org.objectweb.asm.MethodVisitor {
    public visitAnnotationDefault(): com.sun.xml.internal.ws.org.objectweb.asm.AnnotationVisitor
    public visitAnnotation(arg0: java.lang.String | string, arg1: boolean): com.sun.xml.internal.ws.org.objectweb.asm.AnnotationVisitor
    public visitParameterAnnotation(arg0: int, arg1: java.lang.String | string, arg2: boolean): com.sun.xml.internal.ws.org.objectweb.asm.AnnotationVisitor
    public visitAttribute(arg0: com.sun.xml.internal.ws.org.objectweb.asm.Attribute): void
    public visitCode(): void
    public visitFrame(arg0: int, arg1: int, arg2: java.lang.Object[], arg3: int, arg4: java.lang.Object[]): void
    public visitInsn(arg0: int): void
    public visitIntInsn(arg0: int, arg1: int): void
    public visitVarInsn(arg0: int, arg1: int): void
    public visitTypeInsn(arg0: int, arg1: java.lang.String | string): void
    public visitFieldInsn(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
    public visitMethodInsn(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
    public visitJumpInsn(arg0: int, arg1: com.sun.xml.internal.ws.org.objectweb.asm.Label): void
    public visitLabel(arg0: com.sun.xml.internal.ws.org.objectweb.asm.Label): void
    public visitLdcInsn(arg0: java.lang.Object): void
    public visitIincInsn(arg0: int, arg1: int): void
    public visitTableSwitchInsn(arg0: int, arg1: int, arg2: com.sun.xml.internal.ws.org.objectweb.asm.Label, arg3: com.sun.xml.internal.ws.org.objectweb.asm.Label[]): void
    public visitLookupSwitchInsn(arg0: com.sun.xml.internal.ws.org.objectweb.asm.Label, arg1: int[], arg2: com.sun.xml.internal.ws.org.objectweb.asm.Label[]): void
    public visitMultiANewArrayInsn(arg0: java.lang.String | string, arg1: int): void
    public visitTryCatchBlock(arg0: com.sun.xml.internal.ws.org.objectweb.asm.Label, arg1: com.sun.xml.internal.ws.org.objectweb.asm.Label, arg2: com.sun.xml.internal.ws.org.objectweb.asm.Label, arg3: java.lang.String | string): void
    public visitLocalVariable(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: com.sun.xml.internal.ws.org.objectweb.asm.Label, arg4: com.sun.xml.internal.ws.org.objectweb.asm.Label, arg5: int): void
    public visitLineNumber(arg0: int, arg1: com.sun.xml.internal.ws.org.objectweb.asm.Label): void
    public visitMaxs(arg0: int, arg1: int): void
    public visitEnd(): void
    public static class: java.lang.Class<any>
}

                            }
                        }
                    }
                }
            }
        }
    }
}