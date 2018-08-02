declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
                        abstract class Attribute$Holder {
                            protected flags: int
                            protected attributes: java.util.List<com.sun.java.util.jar.pack.Attribute>
                            public constructor()
                            protected getCPMap(): com.sun.java.util.jar.pack.ConstantPool$Entry[]
                            public attributeSize(): int
                            public trimToSize(): void
                            public addAttribute(arg0: com.sun.java.util.jar.pack.Attribute): void
                            public removeAttribute(arg0: com.sun.java.util.jar.pack.Attribute): com.sun.java.util.jar.pack.Attribute
                            public getAttribute(arg0: int): com.sun.java.util.jar.pack.Attribute
                            protected visitRefs(arg0: int, arg1: java.util.Collection<com.sun.java.util.jar.pack.ConstantPool$Entry>): void
                            public getAttributes(): java.util.List<com.sun.java.util.jar.pack.Attribute>
                            public setAttributes(arg0: java.util.List<com.sun.java.util.jar.pack.Attribute>): void
                            public getAttribute(arg0: java.lang.String | string): com.sun.java.util.jar.pack.Attribute
                            public getAttribute(arg0: com.sun.java.util.jar.pack.Attribute$Layout): com.sun.java.util.jar.pack.Attribute
                            public removeAttribute(arg0: java.lang.String | string): com.sun.java.util.jar.pack.Attribute
                            public removeAttribute(arg0: com.sun.java.util.jar.pack.Attribute$Layout): com.sun.java.util.jar.pack.Attribute
                            public strip(arg0: java.lang.String | string): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}