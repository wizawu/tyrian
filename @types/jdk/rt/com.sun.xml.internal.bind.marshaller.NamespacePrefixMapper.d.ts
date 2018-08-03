declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace marshaller {
                        abstract class NamespacePrefixMapper {
                            public constructor()
                            public abstract getPreferredPrefix(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): string
                            public getPreDeclaredNamespaceUris(): java.lang.String[]
                            public getPreDeclaredNamespaceUris2(): java.lang.String[]
                            public getContextualNamespaceDecls(): java.lang.String[]
                            public static class: java.lang.Class<any>
                        }
                        interface NamespacePrefixMapper$$Lambda {
                            (arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): string
                        }
                    }
                }
            }
        }
    }
}