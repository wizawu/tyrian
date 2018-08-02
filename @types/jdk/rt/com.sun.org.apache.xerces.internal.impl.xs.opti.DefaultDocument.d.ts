declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                namespace opti {
                                    class DefaultDocument extends com.sun.org.apache.xerces.internal.impl.xs.opti.NodeImpl implements org.w3c.dom.Document {
                                        public constructor()
                                        public getDoctype(): org.w3c.dom.DocumentType
                                        public getImplementation(): org.w3c.dom.DOMImplementation
                                        public getDocumentElement(): org.w3c.dom.Element
                                        public getElementsByTagName(arg0: java.lang.String | string): org.w3c.dom.NodeList
                                        public getElementsByTagNameNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.NodeList
                                        public getElementById(arg0: java.lang.String | string): org.w3c.dom.Element
                                        public importNode(arg0: org.w3c.dom.Node, arg1: boolean): org.w3c.dom.Node
                                        public createElement(arg0: java.lang.String | string): org.w3c.dom.Element
                                        public createDocumentFragment(): org.w3c.dom.DocumentFragment
                                        public createTextNode(arg0: java.lang.String | string): org.w3c.dom.Text
                                        public createComment(arg0: java.lang.String | string): org.w3c.dom.Comment
                                        public createCDATASection(arg0: java.lang.String | string): org.w3c.dom.CDATASection
                                        public createProcessingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.ProcessingInstruction
                                        public createAttribute(arg0: java.lang.String | string): org.w3c.dom.Attr
                                        public createEntityReference(arg0: java.lang.String | string): org.w3c.dom.EntityReference
                                        public createElementNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.Element
                                        public createAttributeNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.Attr
                                        public getInputEncoding(): string
                                        public getXmlEncoding(): string
                                        public getXmlStandalone(): boolean
                                        public setXmlStandalone(arg0: boolean): void
                                        public getXmlVersion(): string
                                        public setXmlVersion(arg0: java.lang.String | string): void
                                        public getStrictErrorChecking(): boolean
                                        public setStrictErrorChecking(arg0: boolean): void
                                        public getDocumentURI(): string
                                        public setDocumentURI(arg0: java.lang.String | string): void
                                        public adoptNode(arg0: org.w3c.dom.Node): org.w3c.dom.Node
                                        public normalizeDocument(): void
                                        public getDomConfig(): org.w3c.dom.DOMConfiguration
                                        public renameNode(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: java.lang.String | string): org.w3c.dom.Node
                                        public static class: java.lang.Class<any>
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}