declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace model {
                            namespace wsdl {
interface WSDLFeaturedObject extends com.sun.xml.internal.ws.api.model.wsdl.WSDLObject {
    getFeature<F extends javax.xml.ws.WebServiceFeature>(arg0: java.lang.Class<F>): F
    getFeatures(): com.sun.xml.internal.ws.api.WSFeatureList
    addFeature(arg0: javax.xml.ws.WebServiceFeature): void
}

                            }
                        }
                    }
                }
            }
        }
    }
}