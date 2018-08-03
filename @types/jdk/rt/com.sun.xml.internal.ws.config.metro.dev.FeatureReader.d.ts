declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace config {
                        namespace metro {
                            namespace dev {
                                interface FeatureReader<T extends javax.xml.ws.WebServiceFeature> {
                                    ENABLED_ATTRIBUTE_NAME: javax.xml.namespace.QName
                                    parse(arg0: javax.xml.stream.XMLEventReader): T
                                }
                                interface FeatureReader$$Lambda<T extends javax.xml.ws.WebServiceFeature> {
                                    ENABLED_ATTRIBUTE_NAME: javax.xml.namespace.QName
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}