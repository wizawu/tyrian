declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace commons {
                        abstract class Remapper {
                            public constructor()
                            public mapDesc(arg0: java.lang.String | string): string
                            public mapType(arg0: java.lang.String | string): string
                            public mapTypes(arg0: java.lang.String[]): java.lang.String[]
                            public mapMethodDesc(arg0: java.lang.String | string): string
                            public mapValue(arg0: java.lang.Object): java.lang.Object
                            public mapSignature(arg0: java.lang.String | string, arg1: boolean): string
                            protected createRemappingSignatureAdapter(arg0: jdk.internal.org.objectweb.asm.signature.SignatureVisitor): jdk.internal.org.objectweb.asm.signature.SignatureVisitor
                            public mapMethodName(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): string
                            public mapInvokeDynamicMethodName(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                            public mapFieldName(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): string
                            public map(arg0: java.lang.String | string): string
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}