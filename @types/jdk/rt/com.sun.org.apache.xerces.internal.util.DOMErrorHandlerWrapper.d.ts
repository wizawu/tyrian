declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace util {
class DOMErrorHandlerWrapper implements com.sun.org.apache.xerces.internal.xni.parser.XMLErrorHandler , org.w3c.dom.DOMErrorHandler {
    protected fDomErrorHandler: org.w3c.dom.DOMErrorHandler
    protected fOut: java.io.PrintWriter
    public fCurrentNode: org.w3c.dom.Node
    protected fErrorCode: com.sun.org.apache.xerces.internal.util.XMLErrorCode
    protected fDOMError: com.sun.org.apache.xerces.internal.dom.DOMErrorImpl
    public constructor()
    public constructor(arg0: org.w3c.dom.DOMErrorHandler | org.w3c.dom.DOMErrorHandler$$Lambda)
    public setErrorHandler(arg0: org.w3c.dom.DOMErrorHandler | org.w3c.dom.DOMErrorHandler$$Lambda): void
    public getErrorHandler(): org.w3c.dom.DOMErrorHandler
    public warning(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.parser.XMLParseException): void
    public error(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.parser.XMLParseException): void
    public fatalError(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.parser.XMLParseException): void
    public handleError(arg0: org.w3c.dom.DOMError): boolean
    public static class: java.lang.Class<any>
}

class DOMErrorHandlerWrapper$$Lambda implements com.sun.org.apache.xerces.internal.xni.parser.XMLErrorHandler , org.w3c.dom.DOMErrorHandler {
    protected fDomErrorHandler: org.w3c.dom.DOMErrorHandler
}

                        }
                    }
                }
            }
        }
    }
}