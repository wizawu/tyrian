declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        interface WSBinding extends javax.xml.ws.Binding {
                            getSOAPVersion(): com.sun.xml.internal.ws.api.SOAPVersion
                            getAddressingVersion(): com.sun.xml.internal.ws.api.addressing.AddressingVersion
                            getBindingId(): com.sun.xml.internal.ws.api.BindingID
                            getHandlerChain(): java.util.List<javax.xml.ws.handler.Handler>
                            isFeatureEnabled(arg0: java.lang.Class<javax.xml.ws.WebServiceFeature>): boolean
                            isOperationFeatureEnabled(arg0: java.lang.Class<javax.xml.ws.WebServiceFeature>, arg1: javax.xml.namespace.QName): boolean
                            getFeature<F extends javax.xml.ws.WebServiceFeature>(arg0: java.lang.Class<F>): F
                            getOperationFeature<F extends javax.xml.ws.WebServiceFeature>(arg0: java.lang.Class<F>, arg1: javax.xml.namespace.QName): F
                            getFeatures(): com.sun.xml.internal.ws.api.WSFeatureList
                            getOperationFeatures(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.WSFeatureList
                            getInputMessageFeatures(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.WSFeatureList
                            getOutputMessageFeatures(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.WSFeatureList
                            getFaultMessageFeatures(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.WSFeatureList
                            getKnownHeaders(): java.util.Set<javax.xml.namespace.QName>
                            addKnownHeader(arg0: javax.xml.namespace.QName): boolean
                            getMessageContextFactory(): com.oracle.webservices.internal.api.message.MessageContextFactory
                        }
                    }
                }
            }
        }
    }
}