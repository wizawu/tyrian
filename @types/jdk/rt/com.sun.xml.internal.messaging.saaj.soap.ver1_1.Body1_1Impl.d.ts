declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace soap {
                            namespace ver1_1 {
class Body1_1Impl extends com.sun.xml.internal.messaging.saaj.soap.impl.BodyImpl {
    public constructor(arg0: com.sun.xml.internal.messaging.saaj.soap.SOAPDocumentImpl, arg1: java.lang.String | string)
    public addSOAP12Fault(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string, arg2: java.util.Locale): javax.xml.soap.SOAPFault
    protected getFaultName(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    protected createBodyElement(arg0: javax.xml.soap.Name): javax.xml.soap.SOAPBodyElement
    protected createBodyElement(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPBodyElement
    protected getDefaultFaultCode(): javax.xml.namespace.QName
    protected isFault(arg0: javax.xml.soap.SOAPElement): boolean
    protected createFaultElement(): javax.xml.soap.SOAPFault
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