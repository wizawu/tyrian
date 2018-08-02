declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace util {
                        class DOMUtil {
                            public constructor()
                            public static createDom(): org.w3c.dom.Document
                            public static serializeNode(arg0: org.w3c.dom.Element, arg1: javax.xml.stream.XMLStreamWriter): void
                            public static writeTagWithAttributes(arg0: org.w3c.dom.Element, arg1: javax.xml.stream.XMLStreamWriter): void
                            public static getFirstChild(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: java.lang.String | string): org.w3c.dom.Element
                            public static getFirstElementChild(arg0: org.w3c.dom.Node): org.w3c.dom.Element
                            public static getChildElements(arg0: org.w3c.dom.Node): java.util.List<org.w3c.dom.Element>
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}