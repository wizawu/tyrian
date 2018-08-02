declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace wsdl {
                        namespace parser {
class ParserUtil {
    public constructor()
    public static getAttribute(arg0: javax.xml.stream.XMLStreamReader, arg1: java.lang.String | string): string
    public static getAttribute(arg0: javax.xml.stream.XMLStreamReader, arg1: java.lang.String | string, arg2: java.lang.String | string): string
    public static getAttribute(arg0: javax.xml.stream.XMLStreamReader, arg1: javax.xml.namespace.QName): string
    public static getQName(arg0: javax.xml.stream.XMLStreamReader, arg1: java.lang.String | string): javax.xml.namespace.QName
    public static getMandatoryNonEmptyAttribute(arg0: javax.xml.stream.XMLStreamReader, arg1: java.lang.String | string): string
    public static failWithFullName(arg0: java.lang.String | string, arg1: javax.xml.stream.XMLStreamReader): void
    public static failWithLocalName(arg0: java.lang.String | string, arg1: javax.xml.stream.XMLStreamReader): void
    public static failWithLocalName(arg0: java.lang.String | string, arg1: javax.xml.stream.XMLStreamReader, arg2: java.lang.String | string): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}