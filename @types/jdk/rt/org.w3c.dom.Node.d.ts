declare namespace org {
    namespace w3c {
        namespace dom {
interface Node {
    ELEMENT_NODE: short
    ATTRIBUTE_NODE: short
    TEXT_NODE: short
    CDATA_SECTION_NODE: short
    ENTITY_REFERENCE_NODE: short
    ENTITY_NODE: short
    PROCESSING_INSTRUCTION_NODE: short
    COMMENT_NODE: short
    DOCUMENT_NODE: short
    DOCUMENT_TYPE_NODE: short
    DOCUMENT_FRAGMENT_NODE: short
    NOTATION_NODE: short
    DOCUMENT_POSITION_DISCONNECTED: short
    DOCUMENT_POSITION_PRECEDING: short
    DOCUMENT_POSITION_FOLLOWING: short
    DOCUMENT_POSITION_CONTAINS: short
    DOCUMENT_POSITION_CONTAINED_BY: short
    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: short
    getNodeName(): string
    getNodeValue(): string
    setNodeValue(arg0: java.lang.String | string): void
    getNodeType(): short
    getParentNode(): org.w3c.dom.Node
    getChildNodes(): org.w3c.dom.NodeList
    getFirstChild(): org.w3c.dom.Node
    getLastChild(): org.w3c.dom.Node
    getPreviousSibling(): org.w3c.dom.Node
    getNextSibling(): org.w3c.dom.Node
    getAttributes(): org.w3c.dom.NamedNodeMap
    getOwnerDocument(): org.w3c.dom.Document
    insertBefore(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): org.w3c.dom.Node
    replaceChild(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): org.w3c.dom.Node
    removeChild(arg0: org.w3c.dom.Node): org.w3c.dom.Node
    appendChild(arg0: org.w3c.dom.Node): org.w3c.dom.Node
    hasChildNodes(): boolean
    cloneNode(arg0: boolean): org.w3c.dom.Node
    normalize(): void
    isSupported(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
    getNamespaceURI(): string
    getPrefix(): string
    setPrefix(arg0: java.lang.String | string): void
    getLocalName(): string
    hasAttributes(): boolean
    getBaseURI(): string
    compareDocumentPosition(arg0: org.w3c.dom.Node): short
    getTextContent(): string
    setTextContent(arg0: java.lang.String | string): void
    isSameNode(arg0: org.w3c.dom.Node): boolean
    lookupPrefix(arg0: java.lang.String | string): string
    isDefaultNamespace(arg0: java.lang.String | string): boolean
    lookupNamespaceURI(arg0: java.lang.String | string): string
    isEqualNode(arg0: org.w3c.dom.Node): boolean
    getFeature(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Object
    setUserData(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: org.w3c.dom.UserDataHandler): java.lang.Object
    getUserData(arg0: java.lang.String | string): java.lang.Object
}

        }
    }
}