declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace jaxp {
                            class SAXParserImpl extends javax.xml.parsers.SAXParser implements com.sun.org.apache.xerces.internal.jaxp.JAXPConstants , com.sun.org.apache.xerces.internal.xs.PSVIProvider {
                                public getParser(): org.xml.sax.Parser
                                public getXMLReader(): org.xml.sax.XMLReader
                                public isNamespaceAware(): boolean
                                public isValidating(): boolean
                                public isXIncludeAware(): boolean
                                public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                public getProperty(arg0: java.lang.String | string): java.lang.Object
                                public parse(arg0: org.xml.sax.InputSource, arg1: org.xml.sax.helpers.DefaultHandler): void
                                public parse(arg0: org.xml.sax.InputSource, arg1: org.xml.sax.HandlerBase): void
                                public getSchema(): javax.xml.validation.Schema
                                public reset(): void
                                public getElementPSVI(): com.sun.org.apache.xerces.internal.xs.ElementPSVI
                                public getAttributePSVI(arg0: int): com.sun.org.apache.xerces.internal.xs.AttributePSVI
                                public getAttributePSVIByName(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.AttributePSVI
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}