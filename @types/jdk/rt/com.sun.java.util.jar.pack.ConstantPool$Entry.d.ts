declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
                        abstract class ConstantPool$Entry implements java.lang.Comparable<java.lang.Object> {
                            protected readonly tag: byte
                            protected valueHash: int
                            protected constructor(arg0: byte)
                            public getTag(): byte
                            public tagEquals(arg0: int): boolean
                            public getRef(arg0: int): com.sun.java.util.jar.pack.ConstantPool$Entry
                            public eq(arg0: com.sun.java.util.jar.pack.ConstantPool$Entry): boolean
                            public abstract equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            protected abstract computeValueHash(): int
                            public abstract compareTo(arg0: java.lang.Object): int
                            protected superCompareTo(arg0: java.lang.Object): int
                            public isDoubleWord(): boolean
                            public tagMatches(arg0: int): boolean
                            public toString(): string
                            public abstract stringValue(): string
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}