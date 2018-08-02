declare namespace org {
    namespace w3c {
        namespace dom {
interface DOMError {
    SEVERITY_WARNING: short
    SEVERITY_ERROR: short
    SEVERITY_FATAL_ERROR: short
    getSeverity(): short
    getMessage(): string
    getType(): string
    getRelatedException(): java.lang.Object
    getRelatedData(): java.lang.Object
    getLocation(): org.w3c.dom.DOMLocator
}

        }
    }
}