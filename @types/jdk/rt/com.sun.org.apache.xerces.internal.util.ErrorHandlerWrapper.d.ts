declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace util {
class ErrorHandlerWrapper implements com.sun.org.apache.xerces.internal.xni.parser.XMLErrorHandler {
    protected fErrorHandler: org.xml.sax.ErrorHandler
    public constructor()
    public constructor(arg0: org.xml.sax.ErrorHandler)
    public setErrorHandler(arg0: org.xml.sax.ErrorHandler): void
    public getErrorHandler(): org.xml.sax.ErrorHandler
    public warning(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.parser.XMLParseException): void
    public error(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.parser.XMLParseException): void
    public fatalError(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.parser.XMLParseException): void
    protected static createSAXParseException(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLParseException): org.xml.sax.SAXParseException
    protected static createXMLParseException(arg0: org.xml.sax.SAXParseException): com.sun.org.apache.xerces.internal.xni.parser.XMLParseException
    protected static createXNIException(arg0: org.xml.sax.SAXException): com.sun.org.apache.xerces.internal.xni.XNIException
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}