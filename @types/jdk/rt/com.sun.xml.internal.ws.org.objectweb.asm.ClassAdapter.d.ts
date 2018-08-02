declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace org {
                        namespace objectweb {
                            namespace asm {
class ClassAdapter implements com.sun.xml.internal.ws.org.objectweb.asm.ClassVisitor {
    protected cv: com.sun.xml.internal.ws.org.objectweb.asm.ClassVisitor
    public constructor(arg0: com.sun.xml.internal.ws.org.objectweb.asm.ClassVisitor)
    public visit(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String[]): void
    public visitSource(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public visitOuterClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public visitAnnotation(arg0: java.lang.String | string, arg1: boolean): com.sun.xml.internal.ws.org.objectweb.asm.AnnotationVisitor
    public visitAttribute(arg0: com.sun.xml.internal.ws.org.objectweb.asm.Attribute): void
    public visitInnerClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int): void
    public visitField(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.Object): com.sun.xml.internal.ws.org.objectweb.asm.FieldVisitor
    public visitMethod(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String[]): com.sun.xml.internal.ws.org.objectweb.asm.MethodVisitor
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