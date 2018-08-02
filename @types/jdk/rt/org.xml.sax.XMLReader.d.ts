declare namespace org {
    namespace xml {
        namespace sax {
            interface XMLReader {
                getFeature(arg0: java.lang.String | string): boolean
                setFeature(arg0: java.lang.String | string, arg1: boolean): void
                getProperty(arg0: java.lang.String | string): java.lang.Object
                setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                setEntityResolver(arg0: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda): void
                getEntityResolver(): org.xml.sax.EntityResolver
                setDTDHandler(arg0: org.xml.sax.DTDHandler): void
                getDTDHandler(): org.xml.sax.DTDHandler
                setContentHandler(arg0: org.xml.sax.ContentHandler): void
                getContentHandler(): org.xml.sax.ContentHandler
                setErrorHandler(arg0: org.xml.sax.ErrorHandler): void
                getErrorHandler(): org.xml.sax.ErrorHandler
                parse(arg0: org.xml.sax.InputSource): void
                parse(arg0: java.lang.String | string): void
            }
        }
    }
}