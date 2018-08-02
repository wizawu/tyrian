declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace api {
interface ErrorListener extends org.xml.sax.ErrorHandler {
    error(arg0: org.xml.sax.SAXParseException): void
    fatalError(arg0: org.xml.sax.SAXParseException): void
    warning(arg0: org.xml.sax.SAXParseException): void
    info(arg0: org.xml.sax.SAXParseException): void
}

                    }
                }
            }
        }
    }
}