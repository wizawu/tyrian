declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                namespace types {
class LongType extends jdk.nashorn.internal.codegen.types.Type {
    protected constructor(arg0: java.lang.String | string)
    protected constructor()
    public nextWider(): jdk.nashorn.internal.codegen.types.Type
    public getBoxedType(): java.lang.Class<any>
    public getBytecodeStackType(): char
    public load(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
    public store(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): void
    public ldc(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: java.lang.Object): jdk.nashorn.internal.codegen.types.Type
    public convert(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
    public add(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
    public _return(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
    public loadUndefined(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
    public loadForcedInitializer(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}