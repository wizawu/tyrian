declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace dv {
                                interface ValidationContext {
                                    needFacetChecking(): boolean
                                    needExtraChecking(): boolean
                                    needToNormalize(): boolean
                                    useNamespaces(): boolean
                                    isEntityDeclared(arg0: java.lang.String | string): boolean
                                    isEntityUnparsed(arg0: java.lang.String | string): boolean
                                    isIdDeclared(arg0: java.lang.String | string): boolean
                                    addId(arg0: java.lang.String | string): void
                                    addIdRef(arg0: java.lang.String | string): void
                                    getSymbol(arg0: java.lang.String | string): string
                                    getURI(arg0: java.lang.String | string): string
                                    getLocale(): java.util.Locale
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}