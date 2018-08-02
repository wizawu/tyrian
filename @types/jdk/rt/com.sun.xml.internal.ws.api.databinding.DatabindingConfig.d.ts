declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace databinding {
                            class DatabindingConfig {
                                protected contractClass: java.lang.Class
                                protected endpointClass: java.lang.Class
                                protected additionalValueTypes: java.util.Set<java.lang.Class>
                                protected mappingInfo: com.sun.xml.internal.ws.api.databinding.MappingInfo
                                protected wsdlURL: java.net.URL
                                protected classLoader: java.lang.ClassLoader
                                protected features: java.lang.Iterable<javax.xml.ws.WebServiceFeature>
                                protected wsBinding: com.sun.xml.internal.ws.api.WSBinding
                                protected wsdlPort: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
                                protected metadataReader: com.sun.xml.internal.ws.api.databinding.MetadataReader
                                protected properties: java.util.Map<java.lang.String, java.lang.Object>
                                protected wsdlSource: javax.xml.transform.Source
                                protected entityResolver: org.xml.sax.EntityResolver
                                public constructor()
                                public getContractClass(): java.lang.Class
                                public setContractClass(arg0: java.lang.Class): void
                                public getEndpointClass(): java.lang.Class
                                public setEndpointClass(arg0: java.lang.Class): void
                                public getMappingInfo(): com.sun.xml.internal.ws.api.databinding.MappingInfo
                                public setMappingInfo(arg0: com.sun.xml.internal.ws.api.databinding.MappingInfo): void
                                public getWsdlURL(): java.net.URL
                                public setWsdlURL(arg0: java.net.URL): void
                                public getClassLoader(): java.lang.ClassLoader
                                public setClassLoader(arg0: java.lang.ClassLoader): void
                                public getFeatures(): java.lang.Iterable<javax.xml.ws.WebServiceFeature>
                                public setFeatures(arg0: javax.xml.ws.WebServiceFeature[]): void
                                public setFeatures(arg0: java.lang.Iterable<javax.xml.ws.WebServiceFeature>): void
                                public getWsdlPort(): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
                                public setWsdlPort(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort): void
                                public additionalValueTypes(): java.util.Set<java.lang.Class>
                                public properties(): java.util.Map<java.lang.String, java.lang.Object>
                                public getWSBinding(): com.sun.xml.internal.ws.api.WSBinding
                                public setWSBinding(arg0: com.sun.xml.internal.ws.api.WSBinding): void
                                public getMetadataReader(): com.sun.xml.internal.ws.api.databinding.MetadataReader
                                public setMetadataReader(arg0: com.sun.xml.internal.ws.api.databinding.MetadataReader): void
                                public getWsdlSource(): javax.xml.transform.Source
                                public setWsdlSource(arg0: javax.xml.transform.Source): void
                                public getEntityResolver(): org.xml.sax.EntityResolver
                                public setEntityResolver(arg0: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}