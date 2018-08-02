declare namespace org {
    namespace w3c {
        namespace dom {
            interface Entity extends org.w3c.dom.Node {
                getPublicId(): string
                getSystemId(): string
                getNotationName(): string
                getInputEncoding(): string
                getXmlEncoding(): string
                getXmlVersion(): string
            }
        }
    }
}