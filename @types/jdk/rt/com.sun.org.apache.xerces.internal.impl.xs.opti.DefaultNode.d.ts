declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                namespace opti {
                                    class DefaultNode implements org.w3c.dom.Node {
                                        public constructor()
                                        public getNodeName(): string
                                        public getNodeValue(): string
                                        public getNodeType(): short
                                        public getParentNode(): org.w3c.dom.Node
                                        public getChildNodes(): org.w3c.dom.NodeList
                                        public getFirstChild(): org.w3c.dom.Node
                                        public getLastChild(): org.w3c.dom.Node
                                        public getPreviousSibling(): org.w3c.dom.Node
                                        public getNextSibling(): org.w3c.dom.Node
                                        public getAttributes(): org.w3c.dom.NamedNodeMap
                                        public getOwnerDocument(): org.w3c.dom.Document
                                        public hasChildNodes(): boolean
                                        public cloneNode(arg0: boolean): org.w3c.dom.Node
                                        public normalize(): void
                                        public isSupported(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                                        public getNamespaceURI(): string
                                        public getPrefix(): string
                                        public getLocalName(): string
                                        public getBaseURI(): string
                                        public hasAttributes(): boolean
                                        public setNodeValue(arg0: java.lang.String | string): void
                                        public insertBefore(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): org.w3c.dom.Node
                                        public replaceChild(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): org.w3c.dom.Node
                                        public removeChild(arg0: org.w3c.dom.Node): org.w3c.dom.Node
                                        public appendChild(arg0: org.w3c.dom.Node): org.w3c.dom.Node
                                        public setPrefix(arg0: java.lang.String | string): void
                                        public compareDocumentPosition(arg0: org.w3c.dom.Node): short
                                        public getTextContent(): string
                                        public setTextContent(arg0: java.lang.String | string): void
                                        public isSameNode(arg0: org.w3c.dom.Node): boolean
                                        public lookupPrefix(arg0: java.lang.String | string): string
                                        public isDefaultNamespace(arg0: java.lang.String | string): boolean
                                        public lookupNamespaceURI(arg0: java.lang.String | string): string
                                        public isEqualNode(arg0: org.w3c.dom.Node): boolean
                                        public getFeature(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Object
                                        public setUserData(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: org.w3c.dom.UserDataHandler): java.lang.Object
                                        public getUserData(arg0: java.lang.String | string): java.lang.Object
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