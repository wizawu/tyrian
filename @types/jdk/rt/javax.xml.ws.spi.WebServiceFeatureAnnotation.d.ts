declare namespace javax {
    namespace xml {
        namespace ws {
            namespace spi {
                interface WebServiceFeatureAnnotation extends java.lang.annotation.Annotation {
                    id(): string
                    bean(): java.lang.Class<javax.xml.ws.WebServiceFeature>
                }
            }
        }
    }
}