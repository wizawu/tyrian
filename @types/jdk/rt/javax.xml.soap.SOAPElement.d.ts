declare namespace javax {
    namespace xml {
        namespace soap {
interface SOAPElement extends javax.xml.soap.Node , org.w3c.dom.Element {
    addChildElement(arg0: javax.xml.soap.Name): javax.xml.soap.SOAPElement
    addChildElement(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPElement
    addChildElement(arg0: java.lang.String | string): javax.xml.soap.SOAPElement
    addChildElement(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.soap.SOAPElement
    addChildElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): javax.xml.soap.SOAPElement
    addChildElement(arg0: javax.xml.soap.SOAPElement): javax.xml.soap.SOAPElement
    removeContents(): void
    addTextNode(arg0: java.lang.String | string): javax.xml.soap.SOAPElement
    addAttribute(arg0: javax.xml.soap.Name, arg1: java.lang.String | string): javax.xml.soap.SOAPElement
    addAttribute(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string): javax.xml.soap.SOAPElement
    addNamespaceDeclaration(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.soap.SOAPElement
    getAttributeValue(arg0: javax.xml.soap.Name): string
    getAttributeValue(arg0: javax.xml.namespace.QName): string
    getAllAttributes(): java.util.Iterator
    getAllAttributesAsQNames(): java.util.Iterator
    getNamespaceURI(arg0: java.lang.String | string): string
    getNamespacePrefixes(): java.util.Iterator
    getVisibleNamespacePrefixes(): java.util.Iterator
    createQName(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.namespace.QName
    getElementName(): javax.xml.soap.Name
    getElementQName(): javax.xml.namespace.QName
    setElementQName(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPElement
    removeAttribute(arg0: javax.xml.soap.Name): boolean
    removeAttribute(arg0: javax.xml.namespace.QName): boolean
    removeNamespaceDeclaration(arg0: java.lang.String | string): boolean
    getChildElements(): java.util.Iterator
    getChildElements(arg0: javax.xml.soap.Name): java.util.Iterator
    getChildElements(arg0: javax.xml.namespace.QName): java.util.Iterator
    setEncodingStyle(arg0: java.lang.String | string): void
    getEncodingStyle(): string
}

        }
    }
}