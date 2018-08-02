declare namespace javax {
    namespace xml {
        namespace stream {
            namespace events {
interface StartDocument extends javax.xml.stream.events.XMLEvent {
    getSystemId(): string
    getCharacterEncodingScheme(): string
    encodingSet(): boolean
    isStandalone(): boolean
    standaloneSet(): boolean
    getVersion(): string
}

            }
        }
    }
}