declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace commons {
class SerialVersionUIDAdder extends jdk.internal.org.objectweb.asm.ClassVisitor {
    public constructor(arg0: jdk.internal.org.objectweb.asm.ClassVisitor)
    protected constructor(arg0: int, arg1: jdk.internal.org.objectweb.asm.ClassVisitor)
    public visit(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String[]): void
    public visitMethod(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String[]): jdk.internal.org.objectweb.asm.MethodVisitor
    public visitField(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.Object): jdk.internal.org.objectweb.asm.FieldVisitor
    public visitInnerClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int): void
    public visitEnd(): void
    public hasSVUID(): boolean
    protected addSVUID(arg0: long): void
    protected computeSVUID(): long
    protected computeSHAdigest(arg0: byte[]): byte[]
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}