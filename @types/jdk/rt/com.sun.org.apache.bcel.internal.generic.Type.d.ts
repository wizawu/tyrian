declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace generic {
                            abstract class Type implements java.io.Serializable {
                                protected type: byte
                                protected signature: string
                                public static readonly VOID: com.sun.org.apache.bcel.internal.generic.BasicType
                                public static readonly BOOLEAN: com.sun.org.apache.bcel.internal.generic.BasicType
                                public static readonly INT: com.sun.org.apache.bcel.internal.generic.BasicType
                                public static readonly SHORT: com.sun.org.apache.bcel.internal.generic.BasicType
                                public static readonly BYTE: com.sun.org.apache.bcel.internal.generic.BasicType
                                public static readonly LONG: com.sun.org.apache.bcel.internal.generic.BasicType
                                public static readonly DOUBLE: com.sun.org.apache.bcel.internal.generic.BasicType
                                public static readonly FLOAT: com.sun.org.apache.bcel.internal.generic.BasicType
                                public static readonly CHAR: com.sun.org.apache.bcel.internal.generic.BasicType
                                public static readonly OBJECT: com.sun.org.apache.bcel.internal.generic.ObjectType
                                public static readonly STRING: com.sun.org.apache.bcel.internal.generic.ObjectType
                                public static readonly STRINGBUFFER: com.sun.org.apache.bcel.internal.generic.ObjectType
                                public static readonly THROWABLE: com.sun.org.apache.bcel.internal.generic.ObjectType
                                public static readonly NO_ARGS: com.sun.org.apache.bcel.internal.generic.Type[]
                                public static readonly NULL: com.sun.org.apache.bcel.internal.generic.ReferenceType
                                public static readonly UNKNOWN: com.sun.org.apache.bcel.internal.generic.Type
                                protected constructor(arg0: byte, arg1: java.lang.String | string)
                                public getSignature(): string
                                public getType(): byte
                                public getSize(): int
                                public toString(): string
                                public static getMethodSignature(arg0: com.sun.org.apache.bcel.internal.generic.Type, arg1: com.sun.org.apache.bcel.internal.generic.Type[]): string
                                public static getType(arg0: java.lang.String | string): com.sun.org.apache.bcel.internal.generic.Type
                                public static getReturnType(arg0: java.lang.String | string): com.sun.org.apache.bcel.internal.generic.Type
                                public static getArgumentTypes(arg0: java.lang.String | string): com.sun.org.apache.bcel.internal.generic.Type[]
                                public static getType(arg0: java.lang.Class): com.sun.org.apache.bcel.internal.generic.Type
                                public static getSignature(arg0: java.lang.reflect.Method): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}