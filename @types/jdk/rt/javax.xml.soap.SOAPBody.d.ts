declare namespace javax {
    namespace xml {
        namespace soap {
interface SOAPBody extends javax.xml.soap.SOAPElement {
    addFault(): javax.xml.soap.SOAPFault
    addFault(arg0: javax.xml.soap.Name, arg1: java.lang.String | string, arg2: java.util.Locale): javax.xml.soap.SOAPFault
    addFault(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string, arg2: java.util.Locale): javax.xml.soap.SOAPFault
    addFault(arg0: javax.xml.soap.Name, arg1: java.lang.String | string): javax.xml.soap.SOAPFault
    addFault(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string): javax.xml.soap.SOAPFault
    hasFault(): boolean
    getFault(): javax.xml.soap.SOAPFault
    addBodyElement(arg0: javax.xml.soap.Name): javax.xml.soap.SOAPBodyElement
    addBodyElement(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPBodyElement
    addDocument(arg0: org.w3c.dom.Document): javax.xml.soap.SOAPBodyElement
    extractContentAsDocument(): org.w3c.dom.Document
}

        }
    }
}