declare namespace jdk {
    namespace xml {
        namespace internal {
            class JdkXmlUtils {
                public static NAMESPACES_FEATURE: string
                public static NAMESPACE_PREFIXES_FEATURE: string
                public static OVERRIDE_PARSER: string
                public static OVERRIDE_PARSER_DEFAULT: boolean
                public static FEATURE_TRUE: string
                public static FEATURE_FALSE: string
                public constructor()
                public static getValue(arg0: java.lang.Object, arg1: int): int
                public static setXMLReaderPropertyIfSupport(arg0: org.xml.sax.XMLReader, arg1: java.lang.String | string, arg2: java.lang.Object, arg3: boolean): void
                public static getXMLReader(arg0: boolean, arg1: boolean): org.xml.sax.XMLReader
                public static getDOMDocument(): org.w3c.dom.Document
                public static getDOMFactory(arg0: boolean): javax.xml.parsers.DocumentBuilderFactory
                public static getSAXFactory(arg0: boolean): javax.xml.parsers.SAXParserFactory
                public static getSAXTransformFactory(arg0: boolean): javax.xml.transform.sax.SAXTransformerFactory
                public static class: java.lang.Class<any>
            }
        }
    }
}