declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    abstract class AnnotationVisitor {
                        protected api: int
                        protected av: jdk.internal.org.objectweb.asm.AnnotationVisitor
                        public constructor(arg0: int)
                        public constructor(arg0: int, arg1: jdk.internal.org.objectweb.asm.AnnotationVisitor)
                        public visit(arg0: java.lang.String | string, arg1: java.lang.Object): void
                        public visitEnum(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                        public visitAnnotation(arg0: java.lang.String | string, arg1: java.lang.String | string): jdk.internal.org.objectweb.asm.AnnotationVisitor
                        public visitArray(arg0: java.lang.String | string): jdk.internal.org.objectweb.asm.AnnotationVisitor
                        public visitEnd(): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}