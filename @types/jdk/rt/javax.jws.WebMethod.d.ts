declare namespace javax {
    namespace jws {
        interface WebMethod extends java.lang.annotation.Annotation {
            operationName(): string
            action(): string
            exclude(): boolean
        }
    }
}