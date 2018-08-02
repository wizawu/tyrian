declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace org {
                    namespace jvnet {
                        namespace fastinfoset {
                            namespace stax {
                                interface FastInfosetStreamReader {
                                    peekNext(): int
                                    accessNamespaceCount(): int
                                    accessLocalName(): string
                                    accessNamespaceURI(): string
                                    accessPrefix(): string
                                    accessTextCharacters(): char[]
                                    accessTextStart(): int
                                    accessTextLength(): int
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}