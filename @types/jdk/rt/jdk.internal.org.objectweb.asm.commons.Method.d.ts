declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace commons {
                        class Method {
                            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                            public constructor(arg0: java.lang.String | string, arg1: jdk.internal.org.objectweb.asm.Type, arg2: jdk.internal.org.objectweb.asm.Type[])
                            public static getMethod(arg0: java.lang.reflect.Method): jdk.internal.org.objectweb.asm.commons.Method
                            public static getMethod(arg0: java.lang.reflect.Constructor<any>): jdk.internal.org.objectweb.asm.commons.Method
                            public static getMethod(arg0: java.lang.String | string): jdk.internal.org.objectweb.asm.commons.Method
                            public static getMethod(arg0: java.lang.String | string, arg1: boolean): jdk.internal.org.objectweb.asm.commons.Method
                            public getName(): string
                            public getDescriptor(): string
                            public getReturnType(): jdk.internal.org.objectweb.asm.Type
                            public getArgumentTypes(): jdk.internal.org.objectweb.asm.Type[]
                            public toString(): string
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}