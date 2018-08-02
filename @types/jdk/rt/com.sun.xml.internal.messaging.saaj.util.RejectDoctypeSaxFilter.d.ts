declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace util {
class RejectDoctypeSaxFilter extends org.xml.sax.helpers.XMLFilterImpl implements org.xml.sax.XMLReader , org.xml.sax.ext.LexicalHandler {
    protected static log: java.util.logging.Logger
    public constructor(arg0: javax.xml.parsers.SAXParser)
    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public startDTD(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public endDTD(): void
    public startEntity(arg0: java.lang.String | string): void
    public endEntity(arg0: java.lang.String | string): void
    public startCDATA(): void
    public endCDATA(): void
    public comment(arg0: char[], arg1: int, arg2: int): void
    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}