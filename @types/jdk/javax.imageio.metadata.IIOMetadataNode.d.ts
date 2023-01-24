declare namespace javax {
  namespace imageio {
    namespace metadata {
      class IIOMetadataNode implements org.w3c.dom.Element, org.w3c.dom.NodeList {
        public constructor()
        public constructor(arg0: java.lang.String | string)
        public getNodeName(): java.lang.String
        public getNodeValue(): java.lang.String
        public setNodeValue(arg0: java.lang.String | string): void
        public getNodeType(): number
        public getParentNode(): org.w3c.dom.Node
        public getChildNodes(): org.w3c.dom.NodeList
        public getFirstChild(): org.w3c.dom.Node
        public getLastChild(): org.w3c.dom.Node
        public getPreviousSibling(): org.w3c.dom.Node
        public getNextSibling(): org.w3c.dom.Node
        public getAttributes(): org.w3c.dom.NamedNodeMap
        public getOwnerDocument(): org.w3c.dom.Document
        public insertBefore(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): org.w3c.dom.Node
        public replaceChild(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): org.w3c.dom.Node
        public removeChild(arg0: org.w3c.dom.Node): org.w3c.dom.Node
        public appendChild(arg0: org.w3c.dom.Node): org.w3c.dom.Node
        public hasChildNodes(): boolean
        public cloneNode(arg0: boolean | java.lang.Boolean): org.w3c.dom.Node
        public normalize(): void
        public isSupported(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
        public getNamespaceURI(): java.lang.String
        public getPrefix(): java.lang.String
        public setPrefix(arg0: java.lang.String | string): void
        public getLocalName(): java.lang.String
        public getTagName(): java.lang.String
        public getAttribute(arg0: java.lang.String | string): java.lang.String
        public getAttributeNS(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
        public setAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
        public setAttributeNS(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string
        ): void
        public removeAttribute(arg0: java.lang.String | string): void
        public removeAttributeNS(arg0: java.lang.String | string, arg1: java.lang.String | string): void
        public getAttributeNode(arg0: java.lang.String | string): org.w3c.dom.Attr
        public getAttributeNodeNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.Attr
        public setAttributeNode(arg0: org.w3c.dom.Attr): org.w3c.dom.Attr
        public setAttributeNodeNS(arg0: org.w3c.dom.Attr): org.w3c.dom.Attr
        public removeAttributeNode(arg0: org.w3c.dom.Attr): org.w3c.dom.Attr
        public getElementsByTagName(arg0: java.lang.String | string): org.w3c.dom.NodeList
        public getElementsByTagNameNS(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string
        ): org.w3c.dom.NodeList
        public hasAttributes(): boolean
        public hasAttribute(arg0: java.lang.String | string): boolean
        public hasAttributeNS(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
        public getLength(): number
        public item(arg0: number | java.lang.Integer): org.w3c.dom.Node
        public getUserObject(): java.lang.Object
        public setUserObject(arg0: java.lang.Object | any): void
        public setIdAttribute(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean): void
        public setIdAttributeNS(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: boolean | java.lang.Boolean
        ): void
        public setIdAttributeNode(arg0: org.w3c.dom.Attr, arg1: boolean | java.lang.Boolean): void
        public getSchemaTypeInfo(): org.w3c.dom.TypeInfo
        public setUserData(
          arg0: java.lang.String | string,
          arg1: java.lang.Object | any,
          arg2: org.w3c.dom.UserDataHandler | org.w3c.dom.UserDataHandler$$lambda
        ): java.lang.Object
        public getUserData(arg0: java.lang.String | string): java.lang.Object
        public getFeature(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Object
        public isSameNode(arg0: org.w3c.dom.Node): boolean
        public isEqualNode(arg0: org.w3c.dom.Node): boolean
        public lookupNamespaceURI(arg0: java.lang.String | string): java.lang.String
        public isDefaultNamespace(arg0: java.lang.String | string): boolean
        public lookupPrefix(arg0: java.lang.String | string): java.lang.String
        public getTextContent(): java.lang.String
        public setTextContent(arg0: java.lang.String | string): void
        public compareDocumentPosition(arg0: org.w3c.dom.Node): number
        public getBaseURI(): java.lang.String
      }
    }
  }
}
