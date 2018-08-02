declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace soap {
                            namespace ver1_2 {
class Body1_2Impl extends com.sun.xml.internal.messaging.saaj.soap.impl.BodyImpl {
    protected static log: java.util.logging.Logger
    public constructor(arg0: com.sun.xml.internal.messaging.saaj.soap.SOAPDocumentImpl, arg1: java.lang.String | string)
    protected getFaultName(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    protected createBodyElement(arg0: javax.xml.soap.Name): javax.xml.soap.SOAPBodyElement
    protected createBodyElement(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPBodyElement
    protected getDefaultFaultCode(): javax.xml.namespace.QName
    public addFault(): javax.xml.soap.SOAPFault
    public setEncodingStyle(arg0: java.lang.String | string): void
    public addAttribute(arg0: javax.xml.soap.Name, arg1: java.lang.String | string): javax.xml.soap.SOAPElement
    public addAttribute(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string): javax.xml.soap.SOAPElement
    protected isFault(arg0: javax.xml.soap.SOAPElement): boolean
    protected createFaultElement(): javax.xml.soap.SOAPFault
    public addBodyElement(arg0: javax.xml.soap.Name): javax.xml.soap.SOAPBodyElement
    public addBodyElement(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPBodyElement
    protected addElement(arg0: javax.xml.soap.Name): javax.xml.soap.SOAPElement
    protected addElement(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPElement
    public addChildElement(arg0: javax.xml.soap.Name): javax.xml.soap.SOAPElement
    public addChildElement(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPElement
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