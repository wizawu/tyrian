declare namespace org {
    namespace xml {
        namespace sax {
interface ErrorHandler {
    warning(arg0: org.xml.sax.SAXParseException): void
    error(arg0: org.xml.sax.SAXParseException): void
    fatalError(arg0: org.xml.sax.SAXParseException): void
}

        }
    }
}