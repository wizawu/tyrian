declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
                        class AdaptiveCoding implements com.sun.java.util.jar.pack.CodingMethod {
                            public static readonly KX_MIN: int
                            public static readonly KX_MAX: int
                            public static readonly KX_LG2BASE: int
                            public static readonly KX_BASE: int
                            public static readonly KB_MIN: int
                            public static readonly KB_MAX: int
                            public static readonly KB_OFFSET: int
                            public static readonly KB_DEFAULT: int
                            public constructor(arg0: int, arg1: com.sun.java.util.jar.pack.CodingMethod, arg2: com.sun.java.util.jar.pack.CodingMethod)
                            public setHeadCoding(arg0: com.sun.java.util.jar.pack.CodingMethod): void
                            public setHeadLength(arg0: int): void
                            public setTailCoding(arg0: com.sun.java.util.jar.pack.CodingMethod): void
                            public isTrivial(): boolean
                            public writeArrayTo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: int[], arg2: int, arg3: int): void
                            public readArrayFrom(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: int[], arg2: int, arg3: int): void
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