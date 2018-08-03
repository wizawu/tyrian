declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace model {
                        abstract class AbstractSEIModelImpl implements com.sun.xml.internal.ws.api.model.SEIModel {
                            protected jaxbContext: com.sun.xml.internal.bind.api.JAXBRIContext
                            protected bindingContext: com.sun.xml.internal.ws.spi.db.BindingContext
                            protected readonly emptyBodyName: javax.xml.namespace.QName
                            protected contractClass: java.lang.Class
                            protected endpointClass: java.lang.Class
                            protected classLoader: java.lang.ClassLoader
                            protected wsBinding: com.sun.xml.internal.ws.api.WSBinding
                            protected databindingInfo: com.sun.xml.internal.ws.spi.db.BindingInfo
                            protected defaultSchemaNamespaceSuffix: string
                            protected constructor(arg0: com.sun.xml.internal.ws.binding.WebServiceFeatureList)
                            public freeze(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort): void
                            protected abstract populateMaps(): void
                            public getMarshallerPool(): com.sun.xml.internal.ws.util.Pool$Marshaller
                            public getJAXBContext(): javax.xml.bind.JAXBContext
                            public getBindingContext(): com.sun.xml.internal.ws.spi.db.BindingContext
                            public getKnownNamespaceURIs(): java.util.List<java.lang.String>
                            public getBridge(arg0: com.sun.xml.internal.bind.api.TypeReference): com.sun.xml.internal.bind.api.Bridge
                            public getXMLBridge(arg0: com.sun.xml.internal.ws.spi.db.TypeInfo): com.sun.xml.internal.ws.spi.db.XMLBridge
                            public isKnownFault(arg0: javax.xml.namespace.QName, arg1: java.lang.reflect.Method): boolean
                            public isCheckedException(arg0: java.lang.reflect.Method, arg1: java.lang.Class): boolean
                            public getJavaMethod(arg0: java.lang.reflect.Method): com.sun.xml.internal.ws.model.JavaMethodImpl
                            public getJavaMethod(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.model.JavaMethodImpl
                            public getJavaMethodForWsdlOperation(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.JavaMethod
                            public getQNameForJM(arg0: com.sun.xml.internal.ws.model.JavaMethodImpl): javax.xml.namespace.QName
                            public getJavaMethods(): java.util.Collection<com.sun.xml.internal.ws.model.JavaMethodImpl>
                            public getWSDLLocation(): string
                            public getServiceQName(): javax.xml.namespace.QName
                            public getPort(): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
                            public getPortName(): javax.xml.namespace.QName
                            public getPortTypeName(): javax.xml.namespace.QName
                            public getTargetNamespace(): string
                            public getBoundPortTypeName(): javax.xml.namespace.QName
                            public addAdditionalClasses(...arg0: java.lang.Class[]): void
                            public getDatabinding(): com.sun.xml.internal.ws.api.databinding.Databinding
                            public setDatabinding(arg0: com.sun.xml.internal.ws.api.databinding.Databinding): void
                            public getWSBinding(): com.sun.xml.internal.ws.api.WSBinding
                            public getContractClass(): java.lang.Class
                            public getEndpointClass(): java.lang.Class
                            public getJavaMethod(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.JavaMethod
                            public getJavaMethod(arg0: java.lang.reflect.Method): com.sun.xml.internal.ws.api.model.JavaMethod
                            public static class: java.lang.Class<any>
                        }
                        interface AbstractSEIModelImpl$$Lambda implements com.sun.xml.internal.ws.api.model.SEIModel {
                            (): void
                        }
                    }
                }
            }
        }
    }
}