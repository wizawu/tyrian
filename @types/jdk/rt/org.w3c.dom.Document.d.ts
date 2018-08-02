declare namespace org {
    namespace w3c {
        namespace dom {
interface Document extends org.w3c.dom.Node {
    getDoctype(): org.w3c.dom.DocumentType
    getImplementation(): org.w3c.dom.DOMImplementation
    getDocumentElement(): org.w3c.dom.Element
    createElement(arg0: java.lang.String | string): org.w3c.dom.Element
    createDocumentFragment(): org.w3c.dom.DocumentFragment
    createTextNode(arg0: java.lang.String | string): org.w3c.dom.Text
    createComment(arg0: java.lang.String | string): org.w3c.dom.Comment
    createCDATASection(arg0: java.lang.String | string): org.w3c.dom.CDATASection
    createProcessingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.ProcessingInstruction
    createAttribute(arg0: java.lang.String | string): org.w3c.dom.Attr
    createEntityReference(arg0: java.lang.String | string): org.w3c.dom.EntityReference
    getElementsByTagName(arg0: java.lang.String | string): org.w3c.dom.NodeList
    importNode(arg0: org.w3c.dom.Node, arg1: boolean): org.w3c.dom.Node
    createElementNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.Element
    createAttributeNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.Attr
    getElementsByTagNameNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.NodeList
    getElementById(arg0: java.lang.String | string): org.w3c.dom.Element
    getInputEncoding(): string
    getXmlEncoding(): string
    getXmlStandalone(): boolean
    setXmlStandalone(arg0: boolean): void
    getXmlVersion(): string
    setXmlVersion(arg0: java.lang.String | string): void
    getStrictErrorChecking(): boolean
    setStrictErrorChecking(arg0: boolean): void
    getDocumentURI(): string
    setDocumentURI(arg0: java.lang.String | string): void
    adoptNode(arg0: org.w3c.dom.Node): org.w3c.dom.Node
    getDomConfig(): org.w3c.dom.DOMConfiguration
    normalizeDocument(): void
    renameNode(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: java.lang.String | string): org.w3c.dom.Node
}

        }
    }
}