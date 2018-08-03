declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
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
                                    public static readonly VOID_TYPE: com.sun.xml.internal.ws.org.objectweb.asm.Type
                                    public static readonly BOOLEAN_TYPE: com.sun.xml.internal.ws.org.objectweb.asm.Type
                                    public static readonly CHAR_TYPE: com.sun.xml.internal.ws.org.objectweb.asm.Type
                                    public static readonly BYTE_TYPE: com.sun.xml.internal.ws.org.objectweb.asm.Type
                                    public static readonly SHORT_TYPE: com.sun.xml.internal.ws.org.objectweb.asm.Type
                                    public static readonly INT_TYPE: com.sun.xml.internal.ws.org.objectweb.asm.Type
                                    public static readonly FLOAT_TYPE: com.sun.xml.internal.ws.org.objectweb.asm.Type
                                    public static readonly LONG_TYPE: com.sun.xml.internal.ws.org.objectweb.asm.Type
                                    public static readonly DOUBLE_TYPE: com.sun.xml.internal.ws.org.objectweb.asm.Type
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