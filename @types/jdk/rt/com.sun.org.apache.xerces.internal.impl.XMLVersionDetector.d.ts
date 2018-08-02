declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            class XMLVersionDetector {
                                protected static SYMBOL_TABLE: string
                                protected static ERROR_REPORTER: string
                                protected static ENTITY_MANAGER: string
                                protected static fVersionSymbol: string
                                protected static fXMLSymbol: string
                                protected fSymbolTable: com.sun.org.apache.xerces.internal.util.SymbolTable
                                protected fErrorReporter: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter
                                protected fEntityManager: com.sun.org.apache.xerces.internal.impl.XMLEntityManager
                                protected fEncoding: string
                                public constructor()
                                public reset(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager): void
                                public startDocumentParsing(arg0: com.sun.org.apache.xerces.internal.impl.XMLEntityHandler, arg1: short): void
                                public determineDocVersion(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): short
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}