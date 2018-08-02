declare namespace javax {
    namespace xml {
        namespace soap {
interface SOAPEnvelope extends javax.xml.soap.SOAPElement {
    createName(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): javax.xml.soap.Name
    createName(arg0: java.lang.String | string): javax.xml.soap.Name
    getHeader(): javax.xml.soap.SOAPHeader
    getBody(): javax.xml.soap.SOAPBody
    addHeader(): javax.xml.soap.SOAPHeader
    addBody(): javax.xml.soap.SOAPBody
}

        }
    }
}