declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
class ClassWriter extends jdk.internal.org.objectweb.asm.ClassVisitor {
    public static COMPUTE_MAXS: int
    public static COMPUTE_FRAMES: int
    public constructor(arg0: int)
    public constructor(arg0: jdk.internal.org.objectweb.asm.ClassReader, arg1: int)
    public visit(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String[]): void
    public visitSource(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public visitOuterClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public visitAnnotation(arg0: java.lang.String | string, arg1: boolean): jdk.internal.org.objectweb.asm.AnnotationVisitor
    public visitTypeAnnotation(arg0: int, arg1: jdk.internal.org.objectweb.asm.TypePath, arg2: java.lang.String | string, arg3: boolean): jdk.internal.org.objectweb.asm.AnnotationVisitor
    public visitAttribute(arg0: jdk.internal.org.objectweb.asm.Attribute): void
    public visitInnerClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int): void
    public visitField(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.Object): jdk.internal.org.objectweb.asm.FieldVisitor
    public visitMethod(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String[]): jdk.internal.org.objectweb.asm.MethodVisitor
    public visitEnd(): void
    public toByteArray(): byte[]
    public newConst(arg0: java.lang.Object): int
    public newUTF8(arg0: java.lang.String | string): int
    public newClass(arg0: java.lang.String | string): int
    public newMethodType(arg0: java.lang.String | string): int
    public newHandle(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): int
    public newInvokeDynamic(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: jdk.internal.org.objectweb.asm.Handle, ...arg3: java.lang.Object[]): int
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