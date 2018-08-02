declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace utils {
                            class UnImplNode implements org.w3c.dom.Node , org.w3c.dom.Element , org.w3c.dom.NodeList , org.w3c.dom.Document {
                                protected fDocumentURI: string
                                protected actualEncoding: string
                                public constructor()
                                public error(arg0: java.lang.String | string): void
                                public error(arg0: java.lang.String | string, arg1: java.lang.Object[]): void
                                public appendChild(arg0: org.w3c.dom.Node): org.w3c.dom.Node
                                public hasChildNodes(): boolean
                                public getNodeType(): short
                                public getParentNode(): org.w3c.dom.Node
                                public getChildNodes(): org.w3c.dom.NodeList
                                public getFirstChild(): org.w3c.dom.Node
                                public getLastChild(): org.w3c.dom.Node
                                public getNextSibling(): org.w3c.dom.Node
                                public getLength(): int
                                public item(arg0: int): org.w3c.dom.Node
                                public getOwnerDocument(): org.w3c.dom.Document
                                public getTagName(): string
                                public getNodeName(): string
                                public normalize(): void
                                public getElementsByTagName(arg0: java.lang.String | string): org.w3c.dom.NodeList
                                public removeAttributeNode(arg0: org.w3c.dom.Attr): org.w3c.dom.Attr
                                public setAttributeNode(arg0: org.w3c.dom.Attr): org.w3c.dom.Attr
                                public hasAttribute(arg0: java.lang.String | string): boolean
                                public hasAttributeNS(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                                public getAttributeNode(arg0: java.lang.String | string): org.w3c.dom.Attr
                                public removeAttribute(arg0: java.lang.String | string): void
                                public setAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public getAttribute(arg0: java.lang.String | string): string
                                public hasAttributes(): boolean
                                public getElementsByTagNameNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.NodeList
                                public setAttributeNodeNS(arg0: org.w3c.dom.Attr): org.w3c.dom.Attr
                                public getAttributeNodeNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.Attr
                                public removeAttributeNS(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public setAttributeNS(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public getAttributeNS(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                public getPreviousSibling(): org.w3c.dom.Node
                                public cloneNode(arg0: boolean): org.w3c.dom.Node
                                public getNodeValue(): string
                                public setNodeValue(arg0: java.lang.String | string): void
                                public setValue(arg0: java.lang.String | string): void
                                public getOwnerElement(): org.w3c.dom.Element
                                public getSpecified(): boolean
                                public getAttributes(): org.w3c.dom.NamedNodeMap
                                public insertBefore(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): org.w3c.dom.Node
                                public replaceChild(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): org.w3c.dom.Node
                                public removeChild(arg0: org.w3c.dom.Node): org.w3c.dom.Node
                                public isSupported(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                                public getNamespaceURI(): string
                                public getPrefix(): string
                                public setPrefix(arg0: java.lang.String | string): void
                                public getLocalName(): string
                                public getDoctype(): org.w3c.dom.DocumentType
                                public getImplementation(): org.w3c.dom.DOMImplementation
                                public getDocumentElement(): org.w3c.dom.Element
                                public createElement(arg0: java.lang.String | string): org.w3c.dom.Element
                                public createDocumentFragment(): org.w3c.dom.DocumentFragment
                                public createTextNode(arg0: java.lang.String | string): org.w3c.dom.Text
                                public createComment(arg0: java.lang.String | string): org.w3c.dom.Comment
                                public createCDATASection(arg0: java.lang.String | string): org.w3c.dom.CDATASection
                                public createProcessingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.ProcessingInstruction
                                public createAttribute(arg0: java.lang.String | string): org.w3c.dom.Attr
                                public createEntityReference(arg0: java.lang.String | string): org.w3c.dom.EntityReference
                                public importNode(arg0: org.w3c.dom.Node, arg1: boolean): org.w3c.dom.Node
                                public createElementNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.Element
                                public createAttributeNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.Attr
                                public getElementById(arg0: java.lang.String | string): org.w3c.dom.Element
                                public setData(arg0: java.lang.String | string): void
                                public substringData(arg0: int, arg1: int): string
                                public appendData(arg0: java.lang.String | string): void
                                public insertData(arg0: int, arg1: java.lang.String | string): void
                                public deleteData(arg0: int, arg1: int): void
                                public replaceData(arg0: int, arg1: int, arg2: java.lang.String | string): void
                                public splitText(arg0: int): org.w3c.dom.Text
                                public adoptNode(arg0: org.w3c.dom.Node): org.w3c.dom.Node
                                public getInputEncoding(): string
                                public setInputEncoding(arg0: java.lang.String | string): void
                                public getStandalone(): boolean
                                public setStandalone(arg0: boolean): void
                                public getStrictErrorChecking(): boolean
                                public setStrictErrorChecking(arg0: boolean): void
                                public getVersion(): string
                                public setVersion(arg0: java.lang.String | string): void
                                public setUserData(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: org.w3c.dom.UserDataHandler): java.lang.Object
                                public getUserData(arg0: java.lang.String | string): java.lang.Object
                                public getFeature(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Object
                                public isEqualNode(arg0: org.w3c.dom.Node): boolean
                                public lookupNamespaceURI(arg0: java.lang.String | string): string
                                public isDefaultNamespace(arg0: java.lang.String | string): boolean
                                public lookupPrefix(arg0: java.lang.String | string): string
                                public isSameNode(arg0: org.w3c.dom.Node): boolean
                                public setTextContent(arg0: java.lang.String | string): void
                                public getTextContent(): string
                                public compareDocumentPosition(arg0: org.w3c.dom.Node): short
                                public getBaseURI(): string
                                public renameNode(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: java.lang.String | string): org.w3c.dom.Node
                                public normalizeDocument(): void
                                public getDomConfig(): org.w3c.dom.DOMConfiguration
                                public setDocumentURI(arg0: java.lang.String | string): void
                                public getDocumentURI(): string
                                public getActualEncoding(): string
                                public setActualEncoding(arg0: java.lang.String | string): void
                                public replaceWholeText(arg0: java.lang.String | string): org.w3c.dom.Text
                                public getWholeText(): string
                                public isWhitespaceInElementContent(): boolean
                                public setIdAttribute(arg0: boolean): void
                                public setIdAttribute(arg0: java.lang.String | string, arg1: boolean): void
                                public setIdAttributeNode(arg0: org.w3c.dom.Attr, arg1: boolean): void
                                public setIdAttributeNS(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): void
                                public getSchemaTypeInfo(): org.w3c.dom.TypeInfo
                                public isId(): boolean
                                public getXmlEncoding(): string
                                public setXmlEncoding(arg0: java.lang.String | string): void
                                public getXmlStandalone(): boolean
                                public setXmlStandalone(arg0: boolean): void
                                public getXmlVersion(): string
                                public setXmlVersion(arg0: java.lang.String | string): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}