declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace util {
                        namespace xml {
                            class XmlUtil {
                                public static DRACONIAN_ERROR_HANDLER: org.xml.sax.ErrorHandler
                                public constructor()
                                public static getPrefix(arg0: java.lang.String | string): string
                                public static getLocalPart(arg0: java.lang.String | string): string
                                public static getAttributeOrNull(arg0: org.w3c.dom.Element, arg1: java.lang.String | string): string
                                public static getAttributeNSOrNull(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: java.lang.String | string): string
                                public static getAttributeNSOrNull(arg0: org.w3c.dom.Element, arg1: javax.xml.namespace.QName): string
                                public static getAllChildren(arg0: org.w3c.dom.Element): java.util.Iterator
                                public static getAllAttributes(arg0: org.w3c.dom.Element): java.util.Iterator
                                public static parseTokenList(arg0: java.lang.String | string): java.util.List<java.lang.String>
                                public static getTextForNode(arg0: org.w3c.dom.Node): string
                                public static getUTF8Stream(arg0: java.lang.String | string): java.io.InputStream
                                public static newTransformer(): javax.xml.transform.Transformer
                                public static identityTransform<T extends javax.xml.transform.Result>(arg0: javax.xml.transform.Source, arg1: T): T
                                public static createEntityResolver(arg0: java.net.URL): org.xml.sax.EntityResolver
                                public static createDefaultCatalogResolver(): org.xml.sax.EntityResolver
                                public static newDocumentBuilderFactory(): javax.xml.parsers.DocumentBuilderFactory
                                public static newDocumentBuilderFactory(arg0: boolean): javax.xml.parsers.DocumentBuilderFactory
                                public static newTransformerFactory(arg0: boolean): javax.xml.transform.TransformerFactory
                                public static newTransformerFactory(): javax.xml.transform.TransformerFactory
                                public static newSAXParserFactory(arg0: boolean): javax.xml.parsers.SAXParserFactory
                                public static newXPathFactory(arg0: boolean): javax.xml.xpath.XPathFactory
                                public static newXMLInputFactory(arg0: boolean): javax.xml.stream.XMLInputFactory
                                public static allowExternalAccess(arg0: javax.xml.validation.SchemaFactory, arg1: java.lang.String | string, arg2: boolean): javax.xml.validation.SchemaFactory
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}