declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
                        class Coding implements java.lang.Comparable<com.sun.java.util.jar.pack.Coding> , com.sun.java.util.jar.pack.CodingMethod , com.sun.java.util.jar.pack.Histogram$BitMetric {
                            public static readonly B_MAX: int
                            public static readonly H_MAX: int
                            public static readonly S_MAX: int
                            public static codeMax(arg0: int, arg1: int, arg2: int, arg3: int): int
                            public static codeMin(arg0: int, arg1: int, arg2: int, arg3: int): int
                            public static writeInt(arg0: byte[], arg1: int[], arg2: int, arg3: int, arg4: int, arg5: int): void
                            public static readInt(arg0: byte[], arg1: int[], arg2: int, arg3: int, arg4: int): int
                            public static readIntFrom(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: int, arg2: int, arg3: int): int
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public static of(arg0: int, arg1: int): com.sun.java.util.jar.pack.Coding
                            public static of(arg0: int, arg1: int, arg2: int): com.sun.java.util.jar.pack.Coding
                            public canRepresentValue(arg0: int): boolean
                            public canRepresentSigned(arg0: int): boolean
                            public canRepresentUnsigned(arg0: int): boolean
                            public readFrom(arg0: byte[], arg1: int[]): int
                            public writeTo(arg0: byte[], arg1: int[], arg2: int): void
                            public readFrom(arg0: java.io.InputStream | java.io.InputStream$$Lambda): int
                            public writeTo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: int): void
                            public readArrayFrom(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: int[], arg2: int, arg3: int): void
                            public writeArrayTo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: int[], arg2: int, arg3: int): void
                            public B(): int
                            public H(): int
                            public L(): int
                            public S(): int
                            public del(): int
                            public min(): int
                            public max(): int
                            public umin(): int
                            public umax(): int
                            public byteMin(arg0: int): int
                            public byteMax(arg0: int): int
                            public compareTo(arg0: com.sun.java.util.jar.pack.Coding): int
                            public distanceFrom(arg0: com.sun.java.util.jar.pack.Coding): int
                            public getBitLength(arg0: int): double
                            public getLength(arg0: int): int
                            public getLength(arg0: int[], arg1: int, arg2: int): int
                            public getMetaCoding(arg0: com.sun.java.util.jar.pack.Coding): byte[]
                            public static parseMetaCoding(arg0: byte[], arg1: int, arg2: com.sun.java.util.jar.pack.Coding, arg3: com.sun.java.util.jar.pack.CodingMethod[]): int
                            public keyString(): string
                            public toString(): string
                            public compareTo(arg0: java.lang.Object): int
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}