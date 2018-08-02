declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xni {
                            interface NamespaceContext {
                                XML_URI: string
                                XMLNS_URI: string
                                pushContext(): void
                                popContext(): void
                                declarePrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                                getURI(arg0: java.lang.String | string): string
                                getPrefix(arg0: java.lang.String | string): string
                                getDeclaredPrefixCount(): int
                                getDeclaredPrefixAt(arg0: int): string
                                getAllPrefixes(): java.util.Enumeration
                                reset(): void
                            }
                        }
                    }
                }
            }
        }
    }
}