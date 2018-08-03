declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
                        class Attribute implements java.lang.Comparable<com.sun.java.util.jar.pack.Attribute> {
                            public name(): string
                            public layout(): com.sun.java.util.jar.pack.Attribute$Layout
                            public bytes(): byte[]
                            public size(): int
                            public getNameRef(): com.sun.java.util.jar.pack.ConstantPool$Entry
                            public constructor(arg0: com.sun.java.util.jar.pack.Attribute$Layout, arg1: byte[], arg2: java.lang.Object)
                            public constructor(arg0: com.sun.java.util.jar.pack.Attribute$Layout, arg1: byte[])
                            public addContent(arg0: byte[], arg1: java.lang.Object): com.sun.java.util.jar.pack.Attribute
                            public addContent(arg0: byte[]): com.sun.java.util.jar.pack.Attribute
                            public finishRefs(arg0: com.sun.java.util.jar.pack.ConstantPool$Index): void
                            public isCanonical(): boolean
                            public compareTo(arg0: com.sun.java.util.jar.pack.Attribute): int
                            public static getCanonList(arg0: java.util.List<com.sun.java.util.jar.pack.Attribute>): java.util.List<com.sun.java.util.jar.pack.Attribute>
                            public static find(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string): com.sun.java.util.jar.pack.Attribute
                            public static keyForLookup(arg0: int, arg1: java.lang.String | string): com.sun.java.util.jar.pack.Attribute$Layout
                            public static lookup(arg0: java.util.Map<com.sun.java.util.jar.pack.Attribute$Layout, com.sun.java.util.jar.pack.Attribute>, arg1: int, arg2: java.lang.String | string): com.sun.java.util.jar.pack.Attribute
                            public static define(arg0: java.util.Map<com.sun.java.util.jar.pack.Attribute$Layout, com.sun.java.util.jar.pack.Attribute>, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string): com.sun.java.util.jar.pack.Attribute
                            public static contextName(arg0: int): string
                            public parse(arg0: com.sun.java.util.jar.pack.Attribute$Holder | com.sun.java.util.jar.pack.Attribute$Holder$$Lambda, arg1: byte[], arg2: int, arg3: int, arg4: com.sun.java.util.jar.pack.Attribute$ValueStream): void
                            public unparse(arg0: com.sun.java.util.jar.pack.Attribute$ValueStream, arg1: java.io.ByteArrayOutputStream): java.lang.Object
                            public toString(): string
                            public static normalizeLayoutString(arg0: java.lang.String | string): string
                            public compareTo(arg0: java.lang.Object): int
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}