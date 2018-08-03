declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
                        class AdaptiveCoding implements com.sun.java.util.jar.pack.CodingMethod {
                            public static KX_MIN: int
                            public static KX_MAX: int
                            public static KX_LG2BASE: int
                            public static KX_BASE: int
                            public static KB_MIN: int
                            public static KB_MAX: int
                            public static KB_OFFSET: int
                            public static KB_DEFAULT: int
                            public constructor(arg0: int, arg1: com.sun.java.util.jar.pack.CodingMethod, arg2: com.sun.java.util.jar.pack.CodingMethod)
                            public setHeadCoding(arg0: com.sun.java.util.jar.pack.CodingMethod): void
                            public setHeadLength(arg0: int): void
                            public setTailCoding(arg0: com.sun.java.util.jar.pack.CodingMethod): void
                            public isTrivial(): boolean
                            public writeArrayTo(arg0: java.io.OutputStream, arg1: int[], arg2: int, arg3: int): void
                            public readArrayFrom(arg0: java.io.InputStream, arg1: int[], arg2: int, arg3: int): void
                            public static isCodableLength(arg0: int): boolean
                            public getMetaCoding(arg0: com.sun.java.util.jar.pack.Coding): byte[]
                            public static parseMetaCoding(arg0: byte[], arg1: int, arg2: com.sun.java.util.jar.pack.Coding, arg3: com.sun.java.util.jar.pack.CodingMethod[]): int
                            public toString(): string
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}