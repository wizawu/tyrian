declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace soap {
                            abstract class SOAPPartImpl extends javax.xml.soap.SOAPPart implements com.sun.xml.internal.messaging.saaj.soap.SOAPDocument {
                                protected static readonly log: java.util.logging.Logger
                                protected headers: javax.xml.soap.MimeHeaders
                                protected envelope: com.sun.xml.internal.messaging.saaj.soap.Envelope
                                protected source: javax.xml.transform.Source
                                protected document: com.sun.xml.internal.messaging.saaj.soap.SOAPDocumentImpl
                                protected omitXmlDecl: boolean
                                protected sourceCharsetEncoding: string
                                protected message: com.sun.xml.internal.messaging.saaj.soap.MessageImpl
                                protected constructor()
                                protected constructor(arg0: com.sun.xml.internal.messaging.saaj.soap.MessageImpl)
                                protected abstract getContentType(): string
                                protected abstract createEnvelopeFromSource(): com.sun.xml.internal.messaging.saaj.soap.Envelope
                                protected abstract createEmptyEnvelope(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.Envelope
                                protected abstract duplicateType(): com.sun.xml.internal.messaging.saaj.soap.SOAPPartImpl
                                protected getContentTypeString(): string
                                public isFastInfoset(): boolean
                                public getEnvelope(): javax.xml.soap.SOAPEnvelope
                                protected lookForEnvelope(): void
                                public removeAllMimeHeaders(): void
                                public removeMimeHeader(arg0: java.lang.String | string): void
                                public getMimeHeader(arg0: java.lang.String | string): java.lang.String[]
                                public setMimeHeader(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public addMimeHeader(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public getAllMimeHeaders(): java.util.Iterator
                                public getMatchingMimeHeaders(arg0: java.lang.String[]): java.util.Iterator
                                public getNonMatchingMimeHeaders(arg0: java.lang.String[]): java.util.Iterator
                                public getContent(): javax.xml.transform.Source
                                public setContent(arg0: javax.xml.transform.Source): void
                                public getContentAsStream(): java.io.InputStream
                                public getDocument(): com.sun.xml.internal.messaging.saaj.soap.SOAPDocumentImpl
                                public getSOAPPart(): com.sun.xml.internal.messaging.saaj.soap.SOAPPartImpl
                                public getDoctype(): org.w3c.dom.DocumentType
                                public getImplementation(): org.w3c.dom.DOMImplementation
                                public getDocumentElement(): org.w3c.dom.Element
                                protected doGetDocumentElement(): void
                                public createElement(arg0: java.lang.String | string): org.w3c.dom.Element
                                public createDocumentFragment(): org.w3c.dom.DocumentFragment
                                public createTextNode(arg0: java.lang.String | string): org.w3c.dom.Text
                                public createComment(arg0: java.lang.String | string): org.w3c.dom.Comment
                                public createCDATASection(arg0: java.lang.String | string): org.w3c.dom.CDATASection
                                public createProcessingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.ProcessingInstruction
                                public createAttribute(arg0: java.lang.String | string): org.w3c.dom.Attr
                                public createEntityReference(arg0: java.lang.String | string): org.w3c.dom.EntityReference
                                public getElementsByTagName(arg0: java.lang.String | string): org.w3c.dom.NodeList
                                public importNode(arg0: org.w3c.dom.Node, arg1: boolean): org.w3c.dom.Node
                                public createElementNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.Element
                                public createAttributeNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.Attr
                                public getElementsByTagNameNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.NodeList
                                public getElementById(arg0: java.lang.String | string): org.w3c.dom.Element
                                public appendChild(arg0: org.w3c.dom.Node): org.w3c.dom.Node
                                public cloneNode(arg0: boolean): org.w3c.dom.Node
                                protected doCloneNode(): com.sun.xml.internal.messaging.saaj.soap.SOAPPartImpl
                                public getAttributes(): org.w3c.dom.NamedNodeMap
                                public getChildNodes(): org.w3c.dom.NodeList
                                public getFirstChild(): org.w3c.dom.Node
                                public getLastChild(): org.w3c.dom.Node
                                public getLocalName(): string
                                public getNamespaceURI(): string
                                public getNextSibling(): org.w3c.dom.Node
                                public getNodeName(): string
                                public getNodeType(): short
                                public getNodeValue(): string
                                public getOwnerDocument(): org.w3c.dom.Document
                                public getParentNode(): org.w3c.dom.Node
                                public getPrefix(): string
                                public getPreviousSibling(): org.w3c.dom.Node
                                public hasAttributes(): boolean
                                public hasChildNodes(): boolean
                                public insertBefore(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): org.w3c.dom.Node
                                public isSupported(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                                public normalize(): void
                                public removeChild(arg0: org.w3c.dom.Node): org.w3c.dom.Node
                                public replaceChild(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): org.w3c.dom.Node
                                public setNodeValue(arg0: java.lang.String | string): void
                                public setPrefix(arg0: java.lang.String | string): void
                                protected lookForXmlDecl(): com.sun.xml.internal.messaging.saaj.util.XMLDeclarationParser
                                public setSourceCharsetEncoding(arg0: java.lang.String | string): void
                                public renameNode(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: java.lang.String | string): org.w3c.dom.Node
                                public normalizeDocument(): void
                                public getDomConfig(): org.w3c.dom.DOMConfiguration
                                public adoptNode(arg0: org.w3c.dom.Node): org.w3c.dom.Node
                                public setDocumentURI(arg0: java.lang.String | string): void
                                public getDocumentURI(): string
                                public setStrictErrorChecking(arg0: boolean): void
                                public getInputEncoding(): string
                                public getXmlEncoding(): string
                                public getXmlStandalone(): boolean
                                public setXmlStandalone(arg0: boolean): void
                                public getXmlVersion(): string
                                public setXmlVersion(arg0: java.lang.String | string): void
                                public getStrictErrorChecking(): boolean
                                public getBaseURI(): string
                                public compareDocumentPosition(arg0: org.w3c.dom.Node): short
                                public getTextContent(): string
                                public setTextContent(arg0: java.lang.String | string): void
                                public isSameNode(arg0: org.w3c.dom.Node): boolean
                                public lookupPrefix(arg0: java.lang.String | string): string
                                public isDefaultNamespace(arg0: java.lang.String | string): boolean
                                public lookupNamespaceURI(arg0: java.lang.String | string): string
                                public isEqualNode(arg0: org.w3c.dom.Node): boolean
                                public getFeature(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Object
                                public setUserData(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: org.w3c.dom.UserDataHandler | org.w3c.dom.UserDataHandler$$Lambda): java.lang.Object
                                public getUserData(arg0: java.lang.String | string): java.lang.Object
                                public recycleNode(): void
                                public getValue(): string
                                public setValue(arg0: java.lang.String | string): void
                                public setParentElement(arg0: javax.xml.soap.SOAPElement): void
                                public getParentElement(): javax.xml.soap.SOAPElement
                                public detachNode(): void
                                public getSourceCharsetEncoding(): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}