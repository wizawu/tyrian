declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
                            class CoreDocumentImpl extends com.sun.org.apache.xerces.internal.dom.ParentNode implements org.w3c.dom.Document {
                                protected docType: com.sun.org.apache.xerces.internal.dom.DocumentTypeImpl
                                protected docElement: com.sun.org.apache.xerces.internal.dom.ElementImpl
                                protected encoding: string
                                protected actualEncoding: string
                                protected version: string
                                protected standalone: boolean
                                protected fDocumentURI: string
                                protected identifiers: java.util.Map<java.lang.String, org.w3c.dom.Node>
                                protected changes: int
                                protected allowGrammarAccess: boolean
                                protected errorChecking: boolean
                                protected ancestorChecking: boolean
                                protected xmlVersionChanged: boolean
                                public constructor()
                                public constructor(arg0: boolean)
                                public constructor(arg0: org.w3c.dom.DocumentType)
                                public constructor(arg0: org.w3c.dom.DocumentType, arg1: boolean)
                                public getOwnerDocument(): org.w3c.dom.Document
                                public getNodeType(): short
                                public getNodeName(): string
                                public cloneNode(arg0: boolean): org.w3c.dom.Node
                                protected cloneNode(arg0: com.sun.org.apache.xerces.internal.dom.CoreDocumentImpl, arg1: boolean): void
                                public insertBefore(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): org.w3c.dom.Node
                                public removeChild(arg0: org.w3c.dom.Node): org.w3c.dom.Node
                                public replaceChild(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): org.w3c.dom.Node
                                public getTextContent(): string
                                public setTextContent(arg0: java.lang.String | string): void
                                public getFeature(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Object
                                public createAttribute(arg0: java.lang.String | string): org.w3c.dom.Attr
                                public createCDATASection(arg0: java.lang.String | string): org.w3c.dom.CDATASection
                                public createComment(arg0: java.lang.String | string): org.w3c.dom.Comment
                                public createDocumentFragment(): org.w3c.dom.DocumentFragment
                                public createElement(arg0: java.lang.String | string): org.w3c.dom.Element
                                public createEntityReference(arg0: java.lang.String | string): org.w3c.dom.EntityReference
                                public createProcessingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.ProcessingInstruction
                                public createTextNode(arg0: java.lang.String | string): org.w3c.dom.Text
                                public getDoctype(): org.w3c.dom.DocumentType
                                public getDocumentElement(): org.w3c.dom.Element
                                public getElementsByTagName(arg0: java.lang.String | string): org.w3c.dom.NodeList
                                public getImplementation(): org.w3c.dom.DOMImplementation
                                public setErrorChecking(arg0: boolean): void
                                public setStrictErrorChecking(arg0: boolean): void
                                public getErrorChecking(): boolean
                                public getStrictErrorChecking(): boolean
                                public getInputEncoding(): string
                                public setInputEncoding(arg0: java.lang.String | string): void
                                public setXmlEncoding(arg0: java.lang.String | string): void
                                public setEncoding(arg0: java.lang.String | string): void
                                public getXmlEncoding(): string
                                public getEncoding(): string
                                public setXmlVersion(arg0: java.lang.String | string): void
                                public setVersion(arg0: java.lang.String | string): void
                                public getXmlVersion(): string
                                public getVersion(): string
                                public setXmlStandalone(arg0: boolean): void
                                public setStandalone(arg0: boolean): void
                                public getXmlStandalone(): boolean
                                public getStandalone(): boolean
                                public getDocumentURI(): string
                                public renameNode(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: java.lang.String | string): org.w3c.dom.Node
                                public normalizeDocument(): void
                                public getDomConfig(): org.w3c.dom.DOMConfiguration
                                public getBaseURI(): string
                                public setDocumentURI(arg0: java.lang.String | string): void
                                public getAsync(): boolean
                                public setAsync(arg0: boolean): void
                                public abort(): void
                                public load(arg0: java.lang.String | string): boolean
                                public loadXML(arg0: java.lang.String | string): boolean
                                public saveXML(arg0: org.w3c.dom.Node): string
                                public createDocumentType(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): org.w3c.dom.DocumentType
                                public createEntity(arg0: java.lang.String | string): org.w3c.dom.Entity
                                public createNotation(arg0: java.lang.String | string): org.w3c.dom.Notation
                                public createElementDefinition(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.dom.ElementDefinitionImpl
                                protected getNodeNumber(): int
                                protected getNodeNumber(arg0: org.w3c.dom.Node): int
                                public importNode(arg0: org.w3c.dom.Node, arg1: boolean): org.w3c.dom.Node
                                public adoptNode(arg0: org.w3c.dom.Node): org.w3c.dom.Node
                                protected undeferChildren(arg0: org.w3c.dom.Node): void
                                public getElementById(arg0: java.lang.String | string): org.w3c.dom.Element
                                protected clearIdentifiers(): void
                                public putIdentifier(arg0: java.lang.String | string, arg1: org.w3c.dom.Element): void
                                public getIdentifier(arg0: java.lang.String | string): org.w3c.dom.Element
                                public removeIdentifier(arg0: java.lang.String | string): void
                                public createElementNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.Element
                                public createElementNS(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): org.w3c.dom.Element
                                public createAttributeNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.Attr
                                public createAttributeNS(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): org.w3c.dom.Attr
                                public getElementsByTagNameNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.NodeList
                                public clone(): java.lang.Object
                                public static isXMLName(arg0: java.lang.String | string, arg1: boolean): boolean
                                public static isValidQName(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): boolean
                                protected isKidOK(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): boolean
                                protected changed(): void
                                protected changes(): int
                                public setUserData(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: java.lang.Object, arg3: org.w3c.dom.UserDataHandler): java.lang.Object
                                public getUserData(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): java.lang.Object
                                protected getUserDataRecord(arg0: org.w3c.dom.Node): java.util.Map<java.lang.String, com.sun.org.apache.xerces.internal.dom.ParentNode$UserDataRecord>
                                protected checkNamespaceWF(arg0: java.lang.String | string, arg1: int, arg2: int): void
                                protected checkDOMNSErr(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                protected checkQName(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                protected setUserData(arg0: com.sun.org.apache.xerces.internal.dom.NodeImpl, arg1: java.lang.Object): void
                                protected getUserData(arg0: com.sun.org.apache.xerces.internal.dom.NodeImpl): java.lang.Object
                                protected addEventListener(arg0: com.sun.org.apache.xerces.internal.dom.NodeImpl, arg1: java.lang.String | string, arg2: org.w3c.dom.events.EventListener | org.w3c.dom.events.EventListener$$Lambda, arg3: boolean): void
                                protected removeEventListener(arg0: com.sun.org.apache.xerces.internal.dom.NodeImpl, arg1: java.lang.String | string, arg2: org.w3c.dom.events.EventListener | org.w3c.dom.events.EventListener$$Lambda, arg3: boolean): void
                                protected copyEventListeners(arg0: com.sun.org.apache.xerces.internal.dom.NodeImpl, arg1: com.sun.org.apache.xerces.internal.dom.NodeImpl): void
                                protected dispatchEvent(arg0: com.sun.org.apache.xerces.internal.dom.NodeImpl, arg1: org.w3c.dom.events.Event): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}