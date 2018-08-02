declare namespace org {
    namespace xml {
        namespace sax {
            interface Parser {
                setLocale(arg0: java.util.Locale): void
                setEntityResolver(arg0: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda): void
                setDTDHandler(arg0: org.xml.sax.DTDHandler): void
                setDocumentHandler(arg0: org.xml.sax.DocumentHandler): void
                setErrorHandler(arg0: org.xml.sax.ErrorHandler): void
                parse(arg0: org.xml.sax.InputSource): void
                parse(arg0: java.lang.String | string): void
            }
        }
    }
}