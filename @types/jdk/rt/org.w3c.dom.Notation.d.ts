declare namespace org {
    namespace w3c {
        namespace dom {
            interface Notation extends org.w3c.dom.Node {
                getPublicId(): string
                getSystemId(): string
            }
        }
    }
}