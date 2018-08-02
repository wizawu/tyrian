declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
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
                                    public static VOID_TYPE: com.sun.xml.internal.ws.org.objectweb.asm.Type
                                    public static BOOLEAN_TYPE: com.sun.xml.internal.ws.org.objectweb.asm.Type
                                    public static CHAR_TYPE: com.sun.xml.internal.ws.org.objectweb.asm.Type
                                    public static BYTE_TYPE: com.sun.xml.internal.ws.org.objectweb.asm.Type
                                    public static SHORT_TYPE: com.sun.xml.internal.ws.org.objectweb.asm.Type
                                    public static INT_TYPE: com.sun.xml.internal.ws.org.objectweb.asm.Type
                                    public static FLOAT_TYPE: com.sun.xml.internal.ws.org.objectweb.asm.Type
                                    public static LONG_TYPE: com.sun.xml.internal.ws.org.objectweb.asm.Type
                                    public static DOUBLE_TYPE: com.sun.xml.internal.ws.org.objectweb.asm.Type
                                    public static getType(arg0: java.lang.String | string): com.sun.xml.internal.ws.org.objectweb.asm.Type
                                    public static getObjectType(arg0: java.lang.String | string): com.sun.xml.internal.ws.org.objectweb.asm.Type
                                    public static getType(arg0: java.lang.Class): com.sun.xml.internal.ws.org.objectweb.asm.Type
                                    public static getArgumentTypes(arg0: java.lang.String | string): com.sun.xml.internal.ws.org.objectweb.asm.Type[]
                                    public static getArgumentTypes(arg0: java.lang.reflect.Method): com.sun.xml.internal.ws.org.objectweb.asm.Type[]
                                    public static getReturnType(arg0: java.lang.String | string): com.sun.xml.internal.ws.org.objectweb.asm.Type
                                    public static getReturnType(arg0: java.lang.reflect.Method): com.sun.xml.internal.ws.org.objectweb.asm.Type
                                    public getSort(): int
                                    public getDimensions(): int
                                    public getElementType(): com.sun.xml.internal.ws.org.objectweb.asm.Type
                                    public getClassName(): string
                                    public getInternalName(): string
                                    public getDescriptor(): string
                                    public static getMethodDescriptor(arg0: com.sun.xml.internal.ws.org.objectweb.asm.Type, arg1: com.sun.xml.internal.ws.org.objectweb.asm.Type[]): string
                                    public static getInternalName(arg0: java.lang.Class): string
                                    public static getDescriptor(arg0: java.lang.Class): string
                                    public static getConstructorDescriptor(arg0: java.lang.reflect.Constructor): string
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
        }
    }
}