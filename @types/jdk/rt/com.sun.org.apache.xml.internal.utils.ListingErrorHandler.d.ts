declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace utils {
class ListingErrorHandler implements org.xml.sax.ErrorHandler , javax.xml.transform.ErrorListener {
    protected m_pw: java.io.PrintWriter
    protected throwOnWarning: boolean
    protected throwOnError: boolean
    protected throwOnFatalError: boolean
    public constructor(arg0: java.io.PrintWriter)
    public constructor()
    public warning(arg0: org.xml.sax.SAXParseException): void
    public error(arg0: org.xml.sax.SAXParseException): void
    public fatalError(arg0: org.xml.sax.SAXParseException): void
    public warning(arg0: javax.xml.transform.TransformerException): void
    public error(arg0: javax.xml.transform.TransformerException): void
    public fatalError(arg0: javax.xml.transform.TransformerException): void
    public static logExceptionLocation(arg0: java.io.PrintWriter, arg1: java.lang.Throwable): void
    public static logSourceLine(arg0: java.io.PrintWriter, arg1: javax.xml.transform.SourceLocator): void
    protected static getSourceLine(arg0: java.lang.String | string, arg1: int): string
    public setThrowOnWarning(arg0: boolean): void
    public getThrowOnWarning(): boolean
    public setThrowOnError(arg0: boolean): void
    public getThrowOnError(): boolean
    public setThrowOnFatalError(arg0: boolean): void
    public getThrowOnFatalError(): boolean
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}