declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    class Type {
                        public static readonly VOID: int
                        public static readonly BOOLEAN: int
                        public static readonly CHAR: int
                        public static readonly BYTE: int
                        public static readonly SHORT: int
                        public static readonly INT: int
                        public static readonly FLOAT: int
                        public static readonly LONG: int
                        public static readonly DOUBLE: int
                        public static readonly ARRAY: int
                        public static readonly OBJECT: int
                        public static readonly METHOD: int
                        public static readonly VOID_TYPE: jdk.internal.org.objectweb.asm.Type
                        public static readonly BOOLEAN_TYPE: jdk.internal.org.objectweb.asm.Type
                        public static readonly CHAR_TYPE: jdk.internal.org.objectweb.asm.Type
                        public static readonly BYTE_TYPE: jdk.internal.org.objectweb.asm.Type
                        public static readonly SHORT_TYPE: jdk.internal.org.objectweb.asm.Type
                        public static readonly INT_TYPE: jdk.internal.org.objectweb.asm.Type
                        public static readonly FLOAT_TYPE: jdk.internal.org.objectweb.asm.Type
                        public static readonly LONG_TYPE: jdk.internal.org.objectweb.asm.Type
                        public static readonly DOUBLE_TYPE: jdk.internal.org.objectweb.asm.Type
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