declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace org {
                    namespace jvnet {
                        namespace fastinfoset {
                            namespace stax {
interface LowLevelFastInfosetStreamWriter {
    initiateLowLevelWriting(): void
    getNextElementIndex(): int
    getNextAttributeIndex(): int
    getLocalNameIndex(): int
    getNextLocalNameIndex(): int
    writeLowLevelTerminationAndMark(): void
    writeLowLevelStartElementIndexed(arg0: int, arg1: int): void
    writeLowLevelStartElement(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): boolean
    writeLowLevelStartNamespaces(): void
    writeLowLevelNamespace(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    writeLowLevelEndNamespaces(): void
    writeLowLevelStartAttributes(): void
    writeLowLevelAttributeIndexed(arg0: int): void
    writeLowLevelAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): boolean
    writeLowLevelAttributeValue(arg0: java.lang.String | string): void
    writeLowLevelStartNameLiteral(arg0: int, arg1: java.lang.String | string, arg2: byte[], arg3: java.lang.String | string): void
    writeLowLevelStartNameLiteral(arg0: int, arg1: java.lang.String | string, arg2: int, arg3: java.lang.String | string): void
    writeLowLevelEndStartElement(): void
    writeLowLevelEndElement(): void
    writeLowLevelText(arg0: char[], arg1: int): void
    writeLowLevelText(arg0: java.lang.String | string): void
    writeLowLevelOctets(arg0: byte[], arg1: int): void
}

                            }
                        }
                    }
                }
            }
        }
    }
}