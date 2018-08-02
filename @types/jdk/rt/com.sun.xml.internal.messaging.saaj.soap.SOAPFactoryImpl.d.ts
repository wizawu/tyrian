declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace soap {
                            abstract class SOAPFactoryImpl extends javax.xml.soap.SOAPFactory {
                                protected static log: java.util.logging.Logger
                                public constructor()
                                protected createDocument(): com.sun.xml.internal.messaging.saaj.soap.SOAPDocumentImpl
                                public createElement(arg0: java.lang.String | string): javax.xml.soap.SOAPElement
                                public createElement(arg0: javax.xml.soap.Name): javax.xml.soap.SOAPElement
                                public createElement(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPElement
                                public createElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): javax.xml.soap.SOAPElement
                                public createName(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): javax.xml.soap.Name
                                public createName(arg0: java.lang.String | string): javax.xml.soap.Name
                                public createElement(arg0: org.w3c.dom.Element): javax.xml.soap.SOAPElement
                                public createDetail(): javax.xml.soap.Detail
                                public createFault(arg0: java.lang.String | string, arg1: javax.xml.namespace.QName): javax.xml.soap.SOAPFault
                                public createFault(): javax.xml.soap.SOAPFault
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}