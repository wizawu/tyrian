declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace soap {
                            namespace impl {
                                abstract class BodyImpl extends com.sun.xml.internal.messaging.saaj.soap.impl.ElementImpl implements javax.xml.soap.SOAPBody {
                                    protected constructor(arg0: com.sun.xml.internal.messaging.saaj.soap.SOAPDocumentImpl, arg1: com.sun.xml.internal.messaging.saaj.soap.name.NameImpl)
                                    protected abstract getFaultName(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
                                    protected abstract isFault(arg0: javax.xml.soap.SOAPElement): boolean
                                    protected abstract createBodyElement(arg0: javax.xml.soap.Name): javax.xml.soap.SOAPBodyElement
                                    protected abstract createBodyElement(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPBodyElement
                                    protected abstract createFaultElement(): javax.xml.soap.SOAPFault
                                    protected abstract getDefaultFaultCode(): javax.xml.namespace.QName
                                    public addFault(): javax.xml.soap.SOAPFault
                                    public addFault(arg0: javax.xml.soap.Name, arg1: java.lang.String | string, arg2: java.util.Locale): javax.xml.soap.SOAPFault
                                    public addFault(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string, arg2: java.util.Locale): javax.xml.soap.SOAPFault
                                    public addFault(arg0: javax.xml.soap.Name, arg1: java.lang.String | string): javax.xml.soap.SOAPFault
                                    public addFault(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string): javax.xml.soap.SOAPFault
                                    protected findFault(): javax.xml.soap.SOAPElement
                                    public hasFault(): boolean
                                    public getFault(): javax.xml.soap.SOAPFault
                                    public addBodyElement(arg0: javax.xml.soap.Name): javax.xml.soap.SOAPBodyElement
                                    public addBodyElement(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPBodyElement
                                    public setParentElement(arg0: javax.xml.soap.SOAPElement): void
                                    protected addElement(arg0: javax.xml.soap.Name): javax.xml.soap.SOAPElement
                                    protected addElement(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPElement
                                    public addDocument(arg0: org.w3c.dom.Document): javax.xml.soap.SOAPBodyElement
                                    protected convertToSoapElement(arg0: org.w3c.dom.Element): javax.xml.soap.SOAPElement
                                    public setElementQName(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPElement
                                    public extractContentAsDocument(): org.w3c.dom.Document
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