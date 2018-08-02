declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace soap {
                            namespace ver1_2 {
                                class Header1_2Impl extends com.sun.xml.internal.messaging.saaj.soap.impl.HeaderImpl {
                                    protected static log: java.util.logging.Logger
                                    public constructor(arg0: com.sun.xml.internal.messaging.saaj.soap.SOAPDocumentImpl, arg1: java.lang.String | string)
                                    protected getNotUnderstoodName(): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
                                    protected getUpgradeName(): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
                                    protected getSupportedEnvelopeName(): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
                                    public addNotUnderstoodHeaderElement(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPHeaderElement
                                    public addTextNode(arg0: java.lang.String | string): javax.xml.soap.SOAPElement
                                    protected createHeaderElement(arg0: javax.xml.soap.Name): javax.xml.soap.SOAPHeaderElement
                                    protected createHeaderElement(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPHeaderElement
                                    public setEncodingStyle(arg0: java.lang.String | string): void
                                    public addAttribute(arg0: javax.xml.soap.Name, arg1: java.lang.String | string): javax.xml.soap.SOAPElement
                                    public addAttribute(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string): javax.xml.soap.SOAPElement
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