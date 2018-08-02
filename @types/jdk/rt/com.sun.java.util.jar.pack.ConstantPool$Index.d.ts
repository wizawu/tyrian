declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
                        class ConstantPool$Index extends java.util.AbstractList<com.sun.java.util.jar.pack.ConstantPool$Entry> {
                            protected debugName: string
                            protected cpMap: com.sun.java.util.jar.pack.ConstantPool$Entry[]
                            protected flattenSigs: boolean
                            protected indexKey: com.sun.java.util.jar.pack.ConstantPool$Entry[]
                            protected indexValue: int[]
                            protected getMap(): com.sun.java.util.jar.pack.ConstantPool$Entry[]
                            protected constructor(arg0: java.lang.String | string)
                            protected constructor(arg0: java.lang.String | string, arg1: com.sun.java.util.jar.pack.ConstantPool$Entry[])
                            protected setMap(arg0: com.sun.java.util.jar.pack.ConstantPool$Entry[]): void
                            protected constructor(arg0: java.lang.String | string, arg1: java.util.Collection<com.sun.java.util.jar.pack.ConstantPool$Entry>)
                            protected setMap(arg0: java.util.Collection<com.sun.java.util.jar.pack.ConstantPool$Entry>): void
                            public size(): int
                            public get(arg0: int): com.sun.java.util.jar.pack.ConstantPool$Entry
                            public getEntry(arg0: int): com.sun.java.util.jar.pack.ConstantPool$Entry
                            public contains(arg0: com.sun.java.util.jar.pack.ConstantPool$Entry): boolean
                            public indexOf(arg0: com.sun.java.util.jar.pack.ConstantPool$Entry): int
                            public lastIndexOf(arg0: com.sun.java.util.jar.pack.ConstantPool$Entry): int
                            public assertIsSorted(): boolean
                            protected clearIndex(): void
                            public toArray(arg0: com.sun.java.util.jar.pack.ConstantPool$Entry[]): com.sun.java.util.jar.pack.ConstantPool$Entry[]
                            public toArray(): com.sun.java.util.jar.pack.ConstantPool$Entry[]
                            public clone(): java.lang.Object
                            public toString(): string
                            public dumpString(): string
                            public get(arg0: int): java.lang.Object
                            public toArray(): java.lang.Object[]
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}