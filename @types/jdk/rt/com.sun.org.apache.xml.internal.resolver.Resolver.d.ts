declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace resolver {
                            class Resolver extends com.sun.org.apache.xml.internal.resolver.Catalog {
                                public static URISUFFIX: int
                                public static SYSTEMSUFFIX: int
                                public static RESOLVER: int
                                public static SYSTEMREVERSE: int
                                public constructor()
                                public setupReaders(): void
                                public addEntry(arg0: com.sun.org.apache.xml.internal.resolver.CatalogEntry): void
                                public resolveURI(arg0: java.lang.String | string): string
                                public resolveSystem(arg0: java.lang.String | string): string
                                public resolvePublic(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                protected resolveExternalSystem(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                protected resolveExternalPublic(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                protected queryResolver(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): com.sun.org.apache.xml.internal.resolver.Resolver
                                public resolveAllSystemReverse(arg0: java.lang.String | string): java.util.Vector
                                public resolveSystemReverse(arg0: java.lang.String | string): string
                                public resolveAllSystem(arg0: java.lang.String | string): java.util.Vector
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}