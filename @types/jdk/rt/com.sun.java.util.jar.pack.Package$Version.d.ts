declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
                        class Package$Version {
                            public readonly major: short
                            public readonly minor: short
                            public toString(): string
                            public equals(arg0: java.lang.Object): boolean
                            public intValue(): int
                            public hashCode(): int
                            public static of(arg0: int, arg1: int): com.sun.java.util.jar.pack.Package$Version
                            public static of(arg0: byte[]): com.sun.java.util.jar.pack.Package$Version
                            public static of(arg0: int): com.sun.java.util.jar.pack.Package$Version
                            public static makeVersion(arg0: com.sun.java.util.jar.pack.PropMap, arg1: java.lang.String | string): com.sun.java.util.jar.pack.Package$Version
                            public asBytes(): byte[]
                            public compareTo(arg0: com.sun.java.util.jar.pack.Package$Version): int
                            public lessThan(arg0: com.sun.java.util.jar.pack.Package$Version): boolean
                            public greaterThan(arg0: com.sun.java.util.jar.pack.Package$Version): boolean
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}