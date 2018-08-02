declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            class XML11DTDScannerImpl extends com.sun.org.apache.xerces.internal.impl.XMLDTDScannerImpl {
                                public constructor()
                                public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter, arg2: com.sun.org.apache.xerces.internal.impl.XMLEntityManager | com.sun.org.apache.xerces.internal.impl.XMLEntityManager$$Lambda)
                                protected scanPubidLiteral(arg0: com.sun.org.apache.xerces.internal.xni.XMLString): boolean
                                protected normalizeWhitespace(arg0: com.sun.org.apache.xerces.internal.xni.XMLString): void
                                protected normalizeWhitespace(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: int): void
                                protected isUnchangedByNormalization(arg0: com.sun.org.apache.xerces.internal.xni.XMLString): int
                                protected isInvalid(arg0: int): boolean
                                protected isInvalidLiteral(arg0: int): boolean
                                protected isValidNameChar(arg0: int): boolean
                                protected isValidNameStartChar(arg0: int): boolean
                                protected isValidNCName(arg0: int): boolean
                                protected isValidNameStartHighSurrogate(arg0: int): boolean
                                protected versionSupported(arg0: java.lang.String | string): boolean
                                protected getVersionNotSupportedKey(): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}