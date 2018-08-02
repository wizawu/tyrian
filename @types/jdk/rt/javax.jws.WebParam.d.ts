declare namespace javax {
    namespace jws {
interface WebParam extends java.lang.annotation.Annotation {
    name(): string
    partName(): string
    targetNamespace(): string
    mode(): javax.jws.WebParam$Mode
    header(): boolean
}

    }
}