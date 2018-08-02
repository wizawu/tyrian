declare namespace javax {
    namespace xml {
        namespace transform {
            interface SourceLocator {
                getPublicId(): string
                getSystemId(): string
                getLineNumber(): int
                getColumnNumber(): int
            }
        }
    }
}