declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace jaxp {
                            class DocumentBuilderImpl extends javax.xml.parsers.DocumentBuilder implements com.sun.org.apache.xerces.internal.jaxp.JAXPConstants {
                                public static ACCESS_EXTERNAL_DTD: string
                                public static ACCESS_EXTERNAL_SCHEMA: string
                                public newDocument(): org.w3c.dom.Document
                                public getDOMImplementation(): org.w3c.dom.DOMImplementation
                                public parse(arg0: org.xml.sax.InputSource): org.w3c.dom.Document
                                public isNamespaceAware(): boolean
                                public isValidating(): boolean
                                public isXIncludeAware(): boolean
                                public setEntityResolver(arg0: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda): void
                                public setErrorHandler(arg0: org.xml.sax.ErrorHandler): void
                                public getSchema(): javax.xml.validation.Schema
                                public reset(): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}