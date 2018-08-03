declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    class Attribute {
                        public readonly type: string
                        protected constructor(arg0: java.lang.String | string)
                        public isUnknown(): boolean
                        public isCodeAttribute(): boolean
                        protected getLabels(): jdk.internal.org.objectweb.asm.Label[]
                        protected read(arg0: jdk.internal.org.objectweb.asm.ClassReader, arg1: int, arg2: int, arg3: char[], arg4: int, arg5: jdk.internal.org.objectweb.asm.Label[]): jdk.internal.org.objectweb.asm.Attribute
                        protected write(arg0: jdk.internal.org.objectweb.asm.ClassWriter, arg1: byte[], arg2: int, arg3: int, arg4: int): jdk.internal.org.objectweb.asm.ByteVector
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}