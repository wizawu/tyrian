declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                namespace types {
                    class IntType extends jdk.nashorn.internal.codegen.types.BitwiseType {
                        protected constructor()
                        public nextWider(): jdk.nashorn.internal.codegen.types.Type
                        public getBoxedType(): java.lang.Class<any>
                        public getBytecodeStackType(): char
                        public ldc(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: java.lang.Object): jdk.nashorn.internal.codegen.types.Type
                        public convert(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): jdk.nashorn.internal.codegen.types.Type
                        public add(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public shr(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public sar(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public shl(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public and(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public or(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public xor(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public load(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public store(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): void
                        public sub(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public mul(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public div(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public rem(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public neg(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public _return(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                        public loadUndefined(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public loadForcedInitializer(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public cmp(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: boolean): jdk.nashorn.internal.codegen.types.Type
                        public cmp(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}