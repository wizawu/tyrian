declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                namespace types {
                    interface BytecodeArrayOps {
                        aload(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        astore(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                        arraylength(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        newarray(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        newarray(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                    }
                }
            }
        }
    }
}