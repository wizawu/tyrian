declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xni {
                            namespace grammars {
                                interface XMLGrammarLoader {
                                    getRecognizedFeatures(): java.lang.String[]
                                    getFeature(arg0: java.lang.String | string): boolean
                                    setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                    getRecognizedProperties(): java.lang.String[]
                                    getProperty(arg0: java.lang.String | string): java.lang.Object
                                    setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                    setLocale(arg0: java.util.Locale): void
                                    getLocale(): java.util.Locale
                                    setErrorHandler(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLErrorHandler): void
                                    getErrorHandler(): com.sun.org.apache.xerces.internal.xni.parser.XMLErrorHandler
                                    setEntityResolver(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver | com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver$$Lambda): void
                                    getEntityResolver(): com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver
                                    loadGrammar(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): com.sun.org.apache.xerces.internal.xni.grammars.Grammar
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}