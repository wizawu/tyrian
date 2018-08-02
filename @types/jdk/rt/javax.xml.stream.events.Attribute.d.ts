declare namespace javax {
    namespace xml {
        namespace stream {
            namespace events {
interface Attribute extends javax.xml.stream.events.XMLEvent {
    getName(): javax.xml.namespace.QName
    getValue(): string
    getDTDType(): string
    isSpecified(): boolean
}

            }
        }
    }
}