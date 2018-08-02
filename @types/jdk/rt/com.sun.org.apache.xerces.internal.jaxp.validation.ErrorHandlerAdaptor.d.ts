declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace jaxp {
                            namespace validation {
abstract class ErrorHandlerAdaptor implements com.sun.org.apache.xerces.internal.xni.parser.XMLErrorHandler {
    public constructor()
    public hadError(): boolean
    public reset(): void
    protected getErrorHandler(): org.xml.sax.ErrorHandler
    public fatalError(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.parser.XMLParseException): void
    public error(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.parser.XMLParseException): void
    public warning(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.parser.XMLParseException): void
    public static class: java.lang.Class<any>
}

                            }
                        }
                    }
                }
            }
        }
    }
}