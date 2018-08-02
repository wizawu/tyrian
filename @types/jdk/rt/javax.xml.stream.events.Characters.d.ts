declare namespace javax {
    namespace xml {
        namespace stream {
            namespace events {
                interface Characters extends javax.xml.stream.events.XMLEvent {
                    getData(): string
                    isWhiteSpace(): boolean
                    isCData(): boolean
                    isIgnorableWhiteSpace(): boolean
                }
            }
        }
    }
}