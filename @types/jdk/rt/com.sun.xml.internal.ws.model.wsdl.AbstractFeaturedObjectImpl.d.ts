declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace model {
                        namespace wsdl {
                            abstract class AbstractFeaturedObjectImpl extends com.sun.xml.internal.ws.model.wsdl.AbstractExtensibleImpl implements com.sun.xml.internal.ws.api.model.wsdl.WSDLFeaturedObject {
                                protected features: com.sun.xml.internal.ws.binding.WebServiceFeatureList
                                protected constructor(arg0: javax.xml.stream.XMLStreamReader)
                                protected constructor(arg0: java.lang.String | string, arg1: int)
                                public addFeature(arg0: javax.xml.ws.WebServiceFeature | javax.xml.ws.WebServiceFeature$$Lambda): void
                                public getFeatures(): com.sun.xml.internal.ws.binding.WebServiceFeatureList
                                public getFeature(arg0: java.lang.String | string): javax.xml.ws.WebServiceFeature
                                public getFeature<F extends javax.xml.ws.WebServiceFeature>(arg0: java.lang.Class<F>): F
                                public getFeatures<F extends javax.xml.ws.WebServiceFeature>(): com.sun.xml.internal.ws.api.WSFeatureList
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}