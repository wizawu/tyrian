declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
                        class Package {
                            public static attrCodeEmpty: com.sun.java.util.jar.pack.Attribute$Layout
                            public static attrBootstrapMethodsEmpty: com.sun.java.util.jar.pack.Attribute$Layout
                            public static attrInnerClassesEmpty: com.sun.java.util.jar.pack.Attribute$Layout
                            public static attrSourceFileSpecial: com.sun.java.util.jar.pack.Attribute$Layout
                            public static attrDefs: java.util.Map<com.sun.java.util.jar.pack.Attribute$Layout, com.sun.java.util.jar.pack.Attribute>
                            public constructor()
                            public constructor(arg0: com.sun.java.util.jar.pack.Package$Version, arg1: com.sun.java.util.jar.pack.Package$Version, arg2: com.sun.java.util.jar.pack.Package$Version)
                            public reset(): void
                            public getClasses(): java.util.List<com.sun.java.util.jar.pack.Package$Class>
                            public getFiles(): java.util.List<com.sun.java.util.jar.pack.Package$File>
                            public getClassStubs(): java.util.List<com.sun.java.util.jar.pack.Package$File>
                            public getAllInnerClasses(): java.util.List<com.sun.java.util.jar.pack.Package$InnerClass>
                            public setAllInnerClasses(arg0: java.util.Collection<com.sun.java.util.jar.pack.Package$InnerClass>): void
                            public getGlobalInnerClass(arg0: com.sun.java.util.jar.pack.ConstantPool$Entry): com.sun.java.util.jar.pack.Package$InnerClass
                            public trimToSize(): void
                            public strip(arg0: java.lang.String | string): void
                            public stripConstantFields(): void
                            protected visitRefs(arg0: int, arg1: java.util.Collection<com.sun.java.util.jar.pack.ConstantPool$Entry>): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}