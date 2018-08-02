declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xni {
                            namespace parser {
interface XMLParserConfiguration extends com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager {
    parse(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): void
    addRecognizedFeatures(arg0: java.lang.String[]): void
    setFeature(arg0: java.lang.String | string, arg1: boolean): void
    getFeature(arg0: java.lang.String | string): boolean
    addRecognizedProperties(arg0: java.lang.String[]): void
    setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
    getProperty(arg0: java.lang.String | string): java.lang.Object
    setErrorHandler(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLErrorHandler): void
    getErrorHandler(): com.sun.org.apache.xerces.internal.xni.parser.XMLErrorHandler
    setDocumentHandler(arg0: com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler): void
    getDocumentHandler(): com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler
    setDTDHandler(arg0: com.sun.org.apache.xerces.internal.xni.XMLDTDHandler): void
    getDTDHandler(): com.sun.org.apache.xerces.internal.xni.XMLDTDHandler
    setDTDContentModelHandler(arg0: com.sun.org.apache.xerces.internal.xni.XMLDTDContentModelHandler): void
    getDTDContentModelHandler(): com.sun.org.apache.xerces.internal.xni.XMLDTDContentModelHandler
    setEntityResolver(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver | com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver$$Lambda): void
    getEntityResolver(): com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver
    setLocale(arg0: java.util.Locale): void
    getLocale(): java.util.Locale
}

                            }
                        }
                    }
                }
            }
        }
    }
}