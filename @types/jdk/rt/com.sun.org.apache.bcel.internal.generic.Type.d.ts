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
                                public static VOID: com.sun.org.apache.bcel.internal.generic.BasicType
                                public static BOOLEAN: com.sun.org.apache.bcel.internal.generic.BasicType
                                public static INT: com.sun.org.apache.bcel.internal.generic.BasicType
                                public static SHORT: com.sun.org.apache.bcel.internal.generic.BasicType
                                public static BYTE: com.sun.org.apache.bcel.internal.generic.BasicType
                                public static LONG: com.sun.org.apache.bcel.internal.generic.BasicType
                                public static DOUBLE: com.sun.org.apache.bcel.internal.generic.BasicType
                                public static FLOAT: com.sun.org.apache.bcel.internal.generic.BasicType
                                public static CHAR: com.sun.org.apache.bcel.internal.generic.BasicType
                                public static OBJECT: com.sun.org.apache.bcel.internal.generic.ObjectType
                                public static STRING: com.sun.org.apache.bcel.internal.generic.ObjectType
                                public static STRINGBUFFER: com.sun.org.apache.bcel.internal.generic.ObjectType
                                public static THROWABLE: com.sun.org.apache.bcel.internal.generic.ObjectType
                                public static NO_ARGS: com.sun.org.apache.bcel.internal.generic.Type[]
                                public static NULL: com.sun.org.apache.bcel.internal.generic.ReferenceType
                                public static UNKNOWN: com.sun.org.apache.bcel.internal.generic.Type
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