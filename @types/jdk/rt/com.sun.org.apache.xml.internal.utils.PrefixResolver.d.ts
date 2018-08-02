declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace utils {
                            interface PrefixResolver {
                                getNamespaceForPrefix(arg0: java.lang.String | string): string
                                getNamespaceForPrefix(arg0: java.lang.String | string, arg1: org.w3c.dom.Node): string
                                getBaseIdentifier(): string
                                handlesNullPrefixes(): boolean
                            }
                        }
                    }
                }
            }
        }
    }
}