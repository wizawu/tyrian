declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace encryption {
                                interface EncryptionProperty {
                                    getTarget(): string
                                    setTarget(arg0: java.lang.String | string): void
                                    getId(): string
                                    setId(arg0: java.lang.String | string): void
                                    getAttribute(arg0: java.lang.String | string): string
                                    setAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    getEncryptionInformation(): java.util.Iterator<org.w3c.dom.Element>
                                    addEncryptionInformation(arg0: org.w3c.dom.Element): void
                                    removeEncryptionInformation(arg0: org.w3c.dom.Element): void
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}