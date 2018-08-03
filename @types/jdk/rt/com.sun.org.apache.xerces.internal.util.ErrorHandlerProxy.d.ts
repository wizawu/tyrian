declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace util {
                            abstract class ErrorHandlerProxy implements org.xml.sax.ErrorHandler {
                                public constructor()
                                public error(arg0: org.xml.sax.SAXParseException): void
                                public fatalError(arg0: org.xml.sax.SAXParseException): void
                                public warning(arg0: org.xml.sax.SAXParseException): void
                                protected abstract getErrorHandler(): com.sun.org.apache.xerces.internal.xni.parser.XMLErrorHandler
                                public static class: java.lang.Class<any>
                            }
                            interface ErrorHandlerProxy$$Lambda implements org.xml.sax.ErrorHandler {
                                (): com.sun.org.apache.xerces.internal.xni.parser.XMLErrorHandler
                            }
                        }
                    }
                }
            }
        }
    }
}