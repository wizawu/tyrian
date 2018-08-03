declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace dtd {
                        namespace nonvalidating {
                            class XMLElementDecl {
                                public static readonly TYPE_ANY: short
                                public static readonly TYPE_EMPTY: short
                                public static readonly TYPE_MIXED: short
                                public static readonly TYPE_CHILDREN: short
                                public static readonly TYPE_SIMPLE: short
                                public readonly name: com.sun.org.apache.xerces.internal.xni.QName
                                public scope: int
                                public type: short
                                public readonly simpleType: com.sun.xml.internal.stream.dtd.nonvalidating.XMLSimpleType
                                public constructor()
                                public setValues(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: int, arg2: short, arg3: com.sun.xml.internal.stream.dtd.nonvalidating.XMLSimpleType): void
                                public clear(): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}