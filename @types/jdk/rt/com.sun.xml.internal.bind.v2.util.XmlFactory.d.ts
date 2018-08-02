declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace util {
                            class XmlFactory {
                                public static ACCESS_EXTERNAL_SCHEMA: string
                                public static ACCESS_EXTERNAL_DTD: string
                                public constructor()
                                public static createSchemaFactory(arg0: java.lang.String | string, arg1: boolean): javax.xml.validation.SchemaFactory
                                public static createParserFactory(arg0: boolean): javax.xml.parsers.SAXParserFactory
                                public static createXPathFactory(arg0: boolean): javax.xml.xpath.XPathFactory
                                public static createTransformerFactory(arg0: boolean): javax.xml.transform.TransformerFactory
                                public static createDocumentBuilderFactory(arg0: boolean): javax.xml.parsers.DocumentBuilderFactory
                                public static allowExternalAccess(arg0: javax.xml.validation.SchemaFactory, arg1: java.lang.String | string, arg2: boolean): javax.xml.validation.SchemaFactory
                                public static allowExternalDTDAccess(arg0: javax.xml.validation.SchemaFactory, arg1: java.lang.String | string, arg2: boolean): javax.xml.validation.SchemaFactory
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}