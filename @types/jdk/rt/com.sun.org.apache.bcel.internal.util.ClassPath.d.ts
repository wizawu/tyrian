declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace util {
                            class ClassPath implements java.io.Serializable {
                                public static readonly SYSTEM_CLASS_PATH: com.sun.org.apache.bcel.internal.util.ClassPath
                                public constructor(arg0: java.lang.String | string)
                                public constructor()
                                public toString(): string
                                public hashCode(): int
                                public equals(arg0: java.lang.Object): boolean
                                public static getClassPath(): string
                                public getInputStream(arg0: java.lang.String | string): java.io.InputStream
                                public getInputStream(arg0: java.lang.String | string, arg1: java.lang.String | string): java.io.InputStream
                                public getClassFile(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.bcel.internal.util.ClassPath$ClassFile
                                public getClassFile(arg0: java.lang.String | string): com.sun.org.apache.bcel.internal.util.ClassPath$ClassFile
                                public getBytes(arg0: java.lang.String | string, arg1: java.lang.String | string): byte[]
                                public getBytes(arg0: java.lang.String | string): byte[]
                                public getPath(arg0: java.lang.String | string): string
                                public getPath(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}