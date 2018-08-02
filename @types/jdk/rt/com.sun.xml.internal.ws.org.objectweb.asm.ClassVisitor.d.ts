declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace org {
                        namespace objectweb {
                            namespace asm {
                                interface ClassVisitor {
                                    visit(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String[]): void
                                    visitSource(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    visitOuterClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    visitAnnotation(arg0: java.lang.String | string, arg1: boolean): com.sun.xml.internal.ws.org.objectweb.asm.AnnotationVisitor
                                    visitAttribute(arg0: com.sun.xml.internal.ws.org.objectweb.asm.Attribute): void
                                    visitInnerClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int): void
                                    visitField(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.Object): com.sun.xml.internal.ws.org.objectweb.asm.FieldVisitor
                                    visitMethod(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String[]): com.sun.xml.internal.ws.org.objectweb.asm.MethodVisitor
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