declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace org {
                        namespace objectweb {
                            namespace asm {
                                class ClassWriter implements com.sun.xml.internal.ws.org.objectweb.asm.ClassVisitor {
                                    public static readonly COMPUTE_MAXS: int
                                    public static readonly COMPUTE_FRAMES: int
                                    public constructor(arg0: int)
                                    public constructor(arg0: com.sun.xml.internal.ws.org.objectweb.asm.ClassReader, arg1: int)
                                    public visit(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String[]): void
                                    public visitSource(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public visitOuterClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public visitAnnotation(arg0: java.lang.String | string, arg1: boolean): com.sun.xml.internal.ws.org.objectweb.asm.AnnotationVisitor
                                    public visitAttribute(arg0: com.sun.xml.internal.ws.org.objectweb.asm.Attribute): void
                                    public visitInnerClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int): void
                                    public visitField(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.Object): com.sun.xml.internal.ws.org.objectweb.asm.FieldVisitor
                                    public visitMethod(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String[]): com.sun.xml.internal.ws.org.objectweb.asm.MethodVisitor
                                    public visitEnd(): void
                                    public toByteArray(): byte[]
                                    public newConst(arg0: java.lang.Object): int
                                    public newUTF8(arg0: java.lang.String | string): int
                                    public newClass(arg0: java.lang.String | string): int
                                    public newField(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): int
                                    public newMethod(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean): int
                                    public newNameType(arg0: java.lang.String | string, arg1: java.lang.String | string): int
                                    protected getCommonSuperClass(arg0: java.lang.String | string, arg1: java.lang.String | string): string
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