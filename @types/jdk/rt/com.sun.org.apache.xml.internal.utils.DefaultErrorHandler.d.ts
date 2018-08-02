declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace utils {
                            class DefaultErrorHandler implements org.xml.sax.ErrorHandler , javax.xml.transform.ErrorListener {
                                public constructor(arg0: java.io.PrintWriter)
                                public constructor(arg0: java.io.PrintStream)
                                public constructor()
                                public constructor(arg0: boolean)
                                public warning(arg0: org.xml.sax.SAXParseException): void
                                public error(arg0: org.xml.sax.SAXParseException): void
                                public fatalError(arg0: org.xml.sax.SAXParseException): void
                                public warning(arg0: javax.xml.transform.TransformerException): void
                                public error(arg0: javax.xml.transform.TransformerException): void
                                public fatalError(arg0: javax.xml.transform.TransformerException): void
                                public static ensureLocationSet(arg0: javax.xml.transform.TransformerException): void
                                public static printLocation(arg0: java.io.PrintStream, arg1: javax.xml.transform.TransformerException): void
                                public static printLocation(arg0: java.io.PrintStream, arg1: org.xml.sax.SAXParseException): void
                                public static printLocation(arg0: java.io.PrintWriter, arg1: java.lang.Throwable): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}