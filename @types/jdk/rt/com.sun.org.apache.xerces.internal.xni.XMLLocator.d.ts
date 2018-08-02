declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xni {
                            interface XMLLocator {
                                getPublicId(): string
                                getLiteralSystemId(): string
                                getBaseSystemId(): string
                                getExpandedSystemId(): string
                                getLineNumber(): int
                                getColumnNumber(): int
                                getCharacterOffset(): int
                                getEncoding(): string
                                getXMLVersion(): string
                            }
                        }
                    }
                }
            }
        }
    }
}