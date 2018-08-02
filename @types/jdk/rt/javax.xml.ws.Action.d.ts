declare namespace javax {
    namespace xml {
        namespace ws {
interface Action extends java.lang.annotation.Annotation {
    input(): string
    output(): string
    fault(): javax.xml.ws.FaultAction[]
}

        }
    }
}