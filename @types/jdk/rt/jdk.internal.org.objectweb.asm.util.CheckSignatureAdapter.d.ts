declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace util {
class CheckSignatureAdapter extends jdk.internal.org.objectweb.asm.signature.SignatureVisitor {
    public static CLASS_SIGNATURE: int
    public static METHOD_SIGNATURE: int
    public static TYPE_SIGNATURE: int
    public constructor(arg0: int, arg1: jdk.internal.org.objectweb.asm.signature.SignatureVisitor)
    protected constructor(arg0: int, arg1: int, arg2: jdk.internal.org.objectweb.asm.signature.SignatureVisitor)
    public visitFormalTypeParameter(arg0: java.lang.String | string): void
    public visitClassBound(): jdk.internal.org.objectweb.asm.signature.SignatureVisitor
    public visitInterfaceBound(): jdk.internal.org.objectweb.asm.signature.SignatureVisitor
    public visitSuperclass(): jdk.internal.org.objectweb.asm.signature.SignatureVisitor
    public visitInterface(): jdk.internal.org.objectweb.asm.signature.SignatureVisitor
    public visitParameterType(): jdk.internal.org.objectweb.asm.signature.SignatureVisitor
    public visitReturnType(): jdk.internal.org.objectweb.asm.signature.SignatureVisitor
    public visitExceptionType(): jdk.internal.org.objectweb.asm.signature.SignatureVisitor
    public visitBaseType(arg0: char): void
    public visitTypeVariable(arg0: java.lang.String | string): void
    public visitArrayType(): jdk.internal.org.objectweb.asm.signature.SignatureVisitor
    public visitClassType(arg0: java.lang.String | string): void
    public visitInnerClassType(arg0: java.lang.String | string): void
    public visitTypeArgument(): void
    public visitTypeArgument(arg0: char): jdk.internal.org.objectweb.asm.signature.SignatureVisitor
    public visitEnd(): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}