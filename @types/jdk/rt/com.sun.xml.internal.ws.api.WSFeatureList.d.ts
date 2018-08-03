declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        interface WSFeatureList extends java.lang.Iterable<javax.xml.ws.WebServiceFeature> {
                            isEnabled(arg0: java.lang.Class<javax.xml.ws.WebServiceFeature>): boolean
                            get<F extends javax.xml.ws.WebServiceFeature>(arg0: java.lang.Class<F>): F
                            toArray<F extends javax.xml.ws.WebServiceFeature>(): javax.xml.ws.WebServiceFeature[]
                            mergeFeatures<F extends javax.xml.ws.WebServiceFeature>(arg0: javax.xml.ws.WebServiceFeature[], arg1: boolean): void
                            mergeFeatures<F extends javax.xml.ws.WebServiceFeature>(arg0: java.lang.Iterable<javax.xml.ws.WebServiceFeature>, arg1: boolean): void
                        }
                    }
                }
            }
        }
    }
}