declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                namespace types {
                    class ObjectType extends jdk.nashorn.internal.codegen.types.Type {
                        protected constructor()
                        protected constructor(arg0: java.lang.Class<any>)
                        public toString(): string
                        public getShortDescriptor(): string
                        public add(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public load(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public store(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): void
                        public loadUndefined(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public loadForcedInitializer(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public loadEmpty(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public ldc(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: java.lang.Object): jdk.nashorn.internal.codegen.types.Type
                        public convert(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): jdk.nashorn.internal.codegen.types.Type
                        public _return(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                        public getBytecodeStackType(): char
                        public compareTo(arg0: java.lang.Object): int
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}