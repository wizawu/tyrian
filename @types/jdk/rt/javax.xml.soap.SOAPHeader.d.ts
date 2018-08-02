declare namespace javax {
    namespace xml {
        namespace soap {
interface SOAPHeader extends javax.xml.soap.SOAPElement {
    addHeaderElement(arg0: javax.xml.soap.Name): javax.xml.soap.SOAPHeaderElement
    addHeaderElement(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPHeaderElement
    examineMustUnderstandHeaderElements(arg0: java.lang.String | string): java.util.Iterator
    examineHeaderElements(arg0: java.lang.String | string): java.util.Iterator
    extractHeaderElements(arg0: java.lang.String | string): java.util.Iterator
    addNotUnderstoodHeaderElement(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPHeaderElement
    addUpgradeHeaderElement(arg0: java.util.Iterator): javax.xml.soap.SOAPHeaderElement
    addUpgradeHeaderElement(arg0: java.lang.String[]): javax.xml.soap.SOAPHeaderElement
    addUpgradeHeaderElement(arg0: java.lang.String | string): javax.xml.soap.SOAPHeaderElement
    examineAllHeaderElements(): java.util.Iterator
    extractAllHeaderElements(): java.util.Iterator
}

        }
    }
}