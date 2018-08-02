declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    class Type {
                        public static VOID: int
                        public static BOOLEAN: int
                        public static CHAR: int
                        public static BYTE: int
                        public static SHORT: int
                        public static INT: int
                        public static FLOAT: int
                        public static LONG: int
                        public static DOUBLE: int
                        public static ARRAY: int
                        public static OBJECT: int
                        public static METHOD: int
                        public static VOID_TYPE: jdk.internal.org.objectweb.asm.Type
                        public static BOOLEAN_TYPE: jdk.internal.org.objectweb.asm.Type
                        public static CHAR_TYPE: jdk.internal.org.objectweb.asm.Type
                        public static BYTE_TYPE: jdk.internal.org.objectweb.asm.Type
                        public static SHORT_TYPE: jdk.internal.org.objectweb.asm.Type
                        public static INT_TYPE: jdk.internal.org.objectweb.asm.Type
                        public static FLOAT_TYPE: jdk.internal.org.objectweb.asm.Type
                        public static LONG_TYPE: jdk.internal.org.objectweb.asm.Type
                        public static DOUBLE_TYPE: jdk.internal.org.objectweb.asm.Type
                        public static getType(arg0: java.lang.String | string): jdk.internal.org.objectweb.asm.Type
                        public static getObjectType(arg0: java.lang.String | string): jdk.internal.org.objectweb.asm.Type
                        public static getMethodType(arg0: java.lang.String | string): jdk.internal.org.objectweb.asm.Type
                        public static getMethodType(arg0: jdk.internal.org.objectweb.asm.Type, ...arg1: jdk.internal.org.objectweb.asm.Type[]): jdk.internal.org.objectweb.asm.Type
                        public static getType(arg0: java.lang.Class<any>): jdk.internal.org.objectweb.asm.Type
                        public static getType(arg0: java.lang.reflect.Constructor<any>): jdk.internal.org.objectweb.asm.Type
                        public static getType(arg0: java.lang.reflect.Method): jdk.internal.org.objectweb.asm.Type
                        public static getArgumentTypes(arg0: java.lang.String | string): jdk.internal.org.objectweb.asm.Type[]
                        public static getArgumentTypes(arg0: java.lang.reflect.Method): jdk.internal.org.objectweb.asm.Type[]
                        public static getReturnType(arg0: java.lang.String | string): jdk.internal.org.objectweb.asm.Type
                        public static getReturnType(arg0: java.lang.reflect.Method): jdk.internal.org.objectweb.asm.Type
                        public static getArgumentsAndReturnSizes(arg0: java.lang.String | string): int
                        public getSort(): int
                        public getDimensions(): int
                        public getElementType(): jdk.internal.org.objectweb.asm.Type
                        public getClassName(): string
                        public getInternalName(): string
                        public getArgumentTypes(): jdk.internal.org.objectweb.asm.Type[]
                        public getReturnType(): jdk.internal.org.objectweb.asm.Type
                        public getArgumentsAndReturnSizes(): int
                        public getDescriptor(): string
                        public static getMethodDescriptor(arg0: jdk.internal.org.objectweb.asm.Type, ...arg1: jdk.internal.org.objectweb.asm.Type[]): string
                        public static getInternalName(arg0: java.lang.Class<any>): string
                        public static getDescriptor(arg0: java.lang.Class<any>): string
                        public static getConstructorDescriptor(arg0: java.lang.reflect.Constructor<any>): string
                        public static getMethodDescriptor(arg0: java.lang.reflect.Method): string
                        public getSize(): int
                        public getOpcode(arg0: int): int
                        public equals(arg0: java.lang.Object): boolean
                        public hashCode(): int
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}