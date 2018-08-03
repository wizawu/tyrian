declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace model {
                        namespace wsdl {
                            abstract class WSDLProperties extends com.oracle.webservices.internal.api.message.BasePropertySet {
                                protected constructor(arg0: com.sun.xml.internal.ws.api.model.SEIModel)
                                public abstract getWSDLService(): javax.xml.namespace.QName
                                public abstract getWSDLPort(): javax.xml.namespace.QName
                                public abstract getWSDLPortType(): javax.xml.namespace.QName
                                public getWSDLDescription(): org.xml.sax.InputSource
                                protected getPropertyMap(): com.oracle.webservices.internal.api.message.BasePropertySet$PropertyMap
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}