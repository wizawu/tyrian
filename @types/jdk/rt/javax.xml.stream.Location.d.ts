declare namespace javax {
    namespace xml {
        namespace stream {
interface Location {
    getLineNumber(): int
    getColumnNumber(): int
    getCharacterOffset(): int
    getPublicId(): string
    getSystemId(): string
}

        }
    }
}