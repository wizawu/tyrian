declare namespace javax {
    namespace xml {
        namespace soap {
interface SOAPHeaderElement extends javax.xml.soap.SOAPElement {
    setActor(arg0: java.lang.String | string): void
    setRole(arg0: java.lang.String | string): void
    getActor(): string
    getRole(): string
    setMustUnderstand(arg0: boolean): void
    getMustUnderstand(): boolean
    setRelay(arg0: boolean): void
    getRelay(): boolean
}

        }
    }
}