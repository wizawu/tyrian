declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            class XML11EntityScanner extends com.sun.org.apache.xerces.internal.impl.XMLEntityScanner {
                                public constructor()
                                public peekChar(): int
                                protected scanChar(arg0: com.sun.org.apache.xerces.internal.impl.XMLScanner$NameType): int
                                protected scanNmtoken(): string
                                protected scanName(arg0: com.sun.org.apache.xerces.internal.impl.XMLScanner$NameType): string
                                protected scanNCName(): string
                                protected scanQName(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.impl.XMLScanner$NameType): boolean
                                protected scanContent(arg0: com.sun.org.apache.xerces.internal.xni.XMLString): int
                                protected scanLiteral(arg0: int, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: boolean): int
                                protected scanData(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.util.XMLStringBuffer): boolean
                                protected skipChar(arg0: int, arg1: com.sun.org.apache.xerces.internal.impl.XMLScanner$NameType): boolean
                                protected skipSpaces(): boolean
                                protected skipString(arg0: java.lang.String | string): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}