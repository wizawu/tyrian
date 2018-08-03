declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                namespace types {
                    abstract class Type$ValueLessType extends jdk.nashorn.internal.codegen.types.Type {
                        public load(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public store(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): void
                        public ldc(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: java.lang.Object): jdk.nashorn.internal.codegen.types.Type
                        public loadUndefined(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public loadForcedInitializer(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public convert(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): jdk.nashorn.internal.codegen.types.Type
                        public _return(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                        public add(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public compareTo(arg0: java.lang.Object): int
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}