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
                            getFeatures<F extends javax.xml.ws.WebServiceFeature>(): com.sun.xml.internal.ws.api.WSFeatureList
                            getOperationFeatures<F extends javax.xml.ws.WebServiceFeature>(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.WSFeatureList
                            getInputMessageFeatures<F extends javax.xml.ws.WebServiceFeature>(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.WSFeatureList
                            getOutputMessageFeatures<F extends javax.xml.ws.WebServiceFeature>(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.WSFeatureList
                            getFaultMessageFeatures<F extends javax.xml.ws.WebServiceFeature>(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.WSFeatureList
                            getKnownHeaders<F extends javax.xml.ws.WebServiceFeature>(): java.util.Set<javax.xml.namespace.QName>
                            addKnownHeader<F extends javax.xml.ws.WebServiceFeature>(arg0: javax.xml.namespace.QName): boolean
                            getMessageContextFactory<F extends javax.xml.ws.WebServiceFeature>(): com.oracle.webservices.internal.api.message.MessageContextFactory
                        }
                    }
                }
            }
        }
    }
}