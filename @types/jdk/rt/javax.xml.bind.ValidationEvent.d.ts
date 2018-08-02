declare namespace javax {
    namespace xml {
        namespace bind {
interface ValidationEvent {
    WARNING: int
    ERROR: int
    FATAL_ERROR: int
    getSeverity(): int
    getMessage(): string
    getLinkedException(): java.lang.Throwable
    getLocator(): javax.xml.bind.ValidationEventLocator
}

        }
    }
}