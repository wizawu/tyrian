declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace streaming {
class XMLStreamReaderUtil {
    public static close(arg0: javax.xml.stream.XMLStreamReader): void
    public static readRest(arg0: javax.xml.stream.XMLStreamReader): void
    public static next(arg0: javax.xml.stream.XMLStreamReader): int
    public static nextElementContent(arg0: javax.xml.stream.XMLStreamReader): int
    public static toNextTag(arg0: javax.xml.stream.XMLStreamReader, arg1: javax.xml.namespace.QName): void
    public static nextWhiteSpaceContent(arg0: javax.xml.stream.XMLStreamReader): string
    public static currentWhiteSpaceContent(arg0: javax.xml.stream.XMLStreamReader): string
    public static nextContent(arg0: javax.xml.stream.XMLStreamReader): int
    public static skipElement(arg0: javax.xml.stream.XMLStreamReader): void
    public static skipSiblings(arg0: javax.xml.stream.XMLStreamReader, arg1: javax.xml.namespace.QName): void
    public static getElementText(arg0: javax.xml.stream.XMLStreamReader): string
    public static getElementQName(arg0: javax.xml.stream.XMLStreamReader): javax.xml.namespace.QName
    public static getAttributes(arg0: javax.xml.stream.XMLStreamReader): com.sun.xml.internal.ws.streaming.Attributes
    public static verifyReaderState(arg0: javax.xml.stream.XMLStreamReader, arg1: int): void
    public static verifyTag(arg0: javax.xml.stream.XMLStreamReader, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public static verifyTag(arg0: javax.xml.stream.XMLStreamReader, arg1: javax.xml.namespace.QName): void
    public static getStateName(arg0: javax.xml.stream.XMLStreamReader): string
    public static getStateName(arg0: int): string
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}