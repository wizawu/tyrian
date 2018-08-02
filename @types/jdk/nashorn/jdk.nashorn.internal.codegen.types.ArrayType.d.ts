declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                namespace types {
class ArrayType extends jdk.nashorn.internal.codegen.types.ObjectType implements jdk.nashorn.internal.codegen.types.BytecodeArrayOps {
    protected constructor(arg0: java.lang.Class<any>)
    public getElementType(): jdk.nashorn.internal.codegen.types.Type
    public astore(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
    public aload(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
    public arraylength(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
    public newarray(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
    public newarray(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
    public load(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
    public toString(): string
    public convert(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
    public getBytecodeStackType(): char
    public _return(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
    public ldc(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: java.lang.Object): jdk.nashorn.internal.codegen.types.Type
    public loadEmpty(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
    public loadForcedInitializer(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
    public loadUndefined(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
    public store(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): void
    public add(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
    public getShortDescriptor(): string
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}