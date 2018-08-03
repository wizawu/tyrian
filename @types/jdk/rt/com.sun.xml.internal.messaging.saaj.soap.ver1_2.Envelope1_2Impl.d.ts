declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace soap {
                            namespace ver1_2 {
                                class Envelope1_2Impl extends com.sun.xml.internal.messaging.saaj.soap.impl.EnvelopeImpl {
                                    protected static readonly log: java.util.logging.Logger
                                    public constructor(arg0: com.sun.xml.internal.messaging.saaj.soap.SOAPDocumentImpl, arg1: java.lang.String | string)
                                    public constructor(arg0: com.sun.xml.internal.messaging.saaj.soap.SOAPDocumentImpl, arg1: java.lang.String | string, arg2: boolean, arg3: boolean)
                                    protected getBodyName(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
                                    protected getHeaderName(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
                                    public setEncodingStyle(arg0: java.lang.String | string): void
                                    public addAttribute(arg0: javax.xml.soap.Name, arg1: java.lang.String | string): javax.xml.soap.SOAPElement
                                    public addAttribute(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string): javax.xml.soap.SOAPElement
                                    public addChildElement(arg0: javax.xml.soap.Name): javax.xml.soap.SOAPElement
                                    public addChildElement(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPElement
                                    public addTextNode(arg0: java.lang.String | string): javax.xml.soap.SOAPElement
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