declare namespace org {
  namespace w3c {
    namespace dom {
      interface Node {
        readonly ELEMENT_NODE: short
        readonly ATTRIBUTE_NODE: short
        readonly TEXT_NODE: short
        readonly CDATA_SECTION_NODE: short
        readonly ENTITY_REFERENCE_NODE: short
        readonly ENTITY_NODE: short
        readonly PROCESSING_INSTRUCTION_NODE: short
        readonly COMMENT_NODE: short
        readonly DOCUMENT_NODE: short
        readonly DOCUMENT_TYPE_NODE: short
        readonly DOCUMENT_FRAGMENT_NODE: short
        readonly NOTATION_NODE: short
        readonly DOCUMENT_POSITION_DISCONNECTED: short
        readonly DOCUMENT_POSITION_PRECEDING: short
        readonly DOCUMENT_POSITION_FOLLOWING: short
        readonly DOCUMENT_POSITION_CONTAINS: short
        readonly DOCUMENT_POSITION_CONTAINED_BY: short
        readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: short
        getNodeName(): java.lang.String
        getNodeValue(): java.lang.String
        setNodeValue(arg0: java.lang.String | string): void
        getNodeType(): number
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
        cloneNode(arg0: boolean | java.lang.Boolean): org.w3c.dom.Node
        normalize(): void
        isSupported(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
        getNamespaceURI(): java.lang.String
        getPrefix(): java.lang.String
        setPrefix(arg0: java.lang.String | string): void
        getLocalName(): java.lang.String
        hasAttributes(): boolean
        getBaseURI(): java.lang.String
        compareDocumentPosition(arg0: org.w3c.dom.Node): number
        getTextContent(): java.lang.String
        setTextContent(arg0: java.lang.String | string): void
        isSameNode(arg0: org.w3c.dom.Node): boolean
        lookupPrefix(arg0: java.lang.String | string): java.lang.String
        isDefaultNamespace(arg0: java.lang.String | string): boolean
        lookupNamespaceURI(arg0: java.lang.String | string): java.lang.String
        isEqualNode(arg0: org.w3c.dom.Node): boolean
        getFeature(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Object
        setUserData(
          arg0: java.lang.String | string,
          arg1: java.lang.Object | any,
          arg2: org.w3c.dom.UserDataHandler | org.w3c.dom.UserDataHandler$$lambda
        ): java.lang.Object
        getUserData(arg0: java.lang.String | string): java.lang.Object
      }
    }
  }
}
