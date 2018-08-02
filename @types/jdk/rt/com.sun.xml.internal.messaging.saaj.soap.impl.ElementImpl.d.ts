declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace soap {
                            namespace impl {
class ElementImpl extends com.sun.org.apache.xerces.internal.dom.ElementNSImpl implements javax.xml.soap.SOAPElement , javax.xml.soap.SOAPBodyElement {
    public static DSIG_NS: string
    public static XENC_NS: string
    public static WSU_NS: string
    protected elementQName: javax.xml.namespace.QName
    protected static log: java.util.logging.Logger
    public static XMLNS_URI: string
    public static XML_URI: string
    public constructor(arg0: com.sun.xml.internal.messaging.saaj.soap.SOAPDocumentImpl, arg1: javax.xml.soap.Name)
    public constructor(arg0: com.sun.xml.internal.messaging.saaj.soap.SOAPDocumentImpl, arg1: javax.xml.namespace.QName)
    public constructor(arg0: com.sun.xml.internal.messaging.saaj.soap.SOAPDocumentImpl, arg1: java.lang.String | string, arg2: java.lang.String | string)
    public ensureNamespaceIsDeclared(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public getOwnerDocument(): org.w3c.dom.Document
    public addChildElement(arg0: javax.xml.soap.Name): javax.xml.soap.SOAPElement
    public addChildElement(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPElement
    public addChildElement(arg0: java.lang.String | string): javax.xml.soap.SOAPElement
    public addChildElement(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.soap.SOAPElement
    public getNamespaceURI(arg0: java.lang.String | string): string
    public setElementQName(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPElement
    public createQName(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.namespace.QName
    public getNamespacePrefix(arg0: java.lang.String | string): string
    protected getNamespaceAttr(arg0: java.lang.String | string): org.w3c.dom.Attr
    public getNamespaceContextNodes(): com.sun.xml.internal.messaging.saaj.util.NamespaceContextIterator
    public getNamespaceContextNodes(arg0: boolean): com.sun.xml.internal.messaging.saaj.util.NamespaceContextIterator
    public addChildElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): javax.xml.soap.SOAPElement
    public addChildElement(arg0: javax.xml.soap.SOAPElement): javax.xml.soap.SOAPElement
    protected importElement(arg0: org.w3c.dom.Element): org.w3c.dom.Element
    protected addElement(arg0: javax.xml.soap.Name): javax.xml.soap.SOAPElement
    protected addElement(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPElement
    protected createElement(arg0: javax.xml.soap.Name): javax.xml.soap.SOAPElement
    protected createElement(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPElement
    protected addNode(arg0: org.w3c.dom.Node): void
    protected findChild(arg0: com.sun.xml.internal.messaging.saaj.soap.name.NameImpl): javax.xml.soap.SOAPElement
    public addTextNode(arg0: java.lang.String | string): javax.xml.soap.SOAPElement
    protected addCDATA(arg0: java.lang.String | string): javax.xml.soap.SOAPElement
    protected addText(arg0: java.lang.String | string): javax.xml.soap.SOAPElement
    public addAttribute(arg0: javax.xml.soap.Name, arg1: java.lang.String | string): javax.xml.soap.SOAPElement
    public addAttribute(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string): javax.xml.soap.SOAPElement
    public addNamespaceDeclaration(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.soap.SOAPElement
    public getAttributeValue(arg0: javax.xml.soap.Name): string
    public getAttributeValue(arg0: javax.xml.namespace.QName): string
    public getAllAttributes(): java.util.Iterator
    public getAllAttributesAsQNames(): java.util.Iterator
    public getNamespacePrefixes(): java.util.Iterator
    public getVisibleNamespacePrefixes(): java.util.Iterator
    protected doGetNamespacePrefixes(arg0: boolean): java.util.Iterator
    public getElementName(): javax.xml.soap.Name
    public getElementQName(): javax.xml.namespace.QName
    public removeAttribute(arg0: javax.xml.soap.Name): boolean
    public removeAttribute(arg0: javax.xml.namespace.QName): boolean
    public removeNamespaceDeclaration(arg0: java.lang.String | string): boolean
    public getChildElements(): java.util.Iterator
    protected convertToSoapElement(arg0: org.w3c.dom.Element): javax.xml.soap.SOAPElement
    protected static replaceElementWithSOAPElement(arg0: org.w3c.dom.Element, arg1: com.sun.xml.internal.messaging.saaj.soap.impl.ElementImpl): javax.xml.soap.SOAPElement
    protected getChildElementNodes(): java.util.Iterator
    public getChildElements(arg0: javax.xml.soap.Name): java.util.Iterator
    public getChildElements(arg0: javax.xml.namespace.QName): java.util.Iterator
    public removeContents(): void
    public setEncodingStyle(arg0: java.lang.String | string): void
    public getEncodingStyle(): string
    public getValue(): string
    public setValue(arg0: java.lang.String | string): void
    protected getValueNodeStrict(): org.w3c.dom.Node
    protected getValueNode(): javax.xml.soap.Node
    public setParentElement(arg0: javax.xml.soap.SOAPElement): void
    protected findEncodingStyleAttributeName(): void
    protected setEncodingStyleNamespace(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public getParentElement(): javax.xml.soap.SOAPElement
    protected getSOAPNamespace(): string
    public detachNode(): void
    public tryToFindEncodingStyleAttributeName(): void
    public recycleNode(): void
    protected static getNamespaceAttrFrom(arg0: org.w3c.dom.Element, arg1: java.lang.String | string): org.w3c.dom.Attr
    protected static getAllAttributesFrom(arg0: org.w3c.dom.Element): java.util.Iterator
    protected static getAttributeValueFrom(arg0: org.w3c.dom.Element, arg1: javax.xml.soap.Name): string
    protected static getChildElementsFrom(arg0: org.w3c.dom.Element): java.util.Iterator
    public static getQualifiedName(arg0: javax.xml.namespace.QName): string
    public static getLocalPart(arg0: java.lang.String | string): string
    public static getPrefix(arg0: java.lang.String | string): string
    protected isNamespaceQualified(arg0: javax.xml.soap.Name): boolean
    protected isNamespaceQualified(arg0: javax.xml.namespace.QName): boolean
    public setAttributeNS(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
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