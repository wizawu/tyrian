declare namespace jdk {
    namespace internal {
        namespace org {
            namespace xml {
                namespace sax {
interface XMLReader {
    getFeature(arg0: java.lang.String | string): boolean
    setFeature(arg0: java.lang.String | string, arg1: boolean): void
    getProperty(arg0: java.lang.String | string): java.lang.Object
    setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
    setEntityResolver(arg0: jdk.internal.org.xml.sax.EntityResolver | jdk.internal.org.xml.sax.EntityResolver$$Lambda): void
    getEntityResolver(): jdk.internal.org.xml.sax.EntityResolver
    setDTDHandler(arg0: jdk.internal.org.xml.sax.DTDHandler): void
    getDTDHandler(): jdk.internal.org.xml.sax.DTDHandler
    setContentHandler(arg0: jdk.internal.org.xml.sax.ContentHandler): void
    getContentHandler(): jdk.internal.org.xml.sax.ContentHandler
    setErrorHandler(arg0: jdk.internal.org.xml.sax.ErrorHandler): void
    getErrorHandler(): jdk.internal.org.xml.sax.ErrorHandler
    parse(arg0: jdk.internal.org.xml.sax.InputSource): void
    parse(arg0: java.lang.String | string): void
}

                }
            }
        }
    }
}