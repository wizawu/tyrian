declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
                        class ConstantPool$IndexGroup {
                            public constructor()
                            public untypedIndexOf(arg0: com.sun.java.util.jar.pack.ConstantPool$Entry): int
                            public initIndexByTag(arg0: byte, arg1: com.sun.java.util.jar.pack.ConstantPool$Index): void
                            public getIndexByTag(arg0: byte): com.sun.java.util.jar.pack.ConstantPool$Index
                            public getMemberIndex(arg0: byte, arg1: com.sun.java.util.jar.pack.ConstantPool$ClassEntry): com.sun.java.util.jar.pack.ConstantPool$Index
                            public getOverloadingIndex(arg0: com.sun.java.util.jar.pack.ConstantPool$MemberEntry): int
                            public getOverloadingForIndex(arg0: byte, arg1: com.sun.java.util.jar.pack.ConstantPool$ClassEntry, arg2: java.lang.String | string, arg3: int): com.sun.java.util.jar.pack.ConstantPool$MemberEntry
                            public haveNumbers(): boolean
                            public haveExtraTags(): boolean
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}