declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace client {
                        class WSServiceDelegate extends com.sun.xml.internal.ws.api.WSService {
                            protected static readonly EMPTY_FEATURES: javax.xml.ws.WebServiceFeature[]
                            protected getQNameToPortInfoMap(): java.util.Map<javax.xml.namespace.QName, com.sun.xml.internal.ws.client.PortInfo>
                            public constructor(arg0: java.net.URL, arg1: javax.xml.namespace.QName, arg2: java.lang.Class<javax.xml.ws.Service>, ...arg3: javax.xml.ws.WebServiceFeature[])
                            protected constructor(arg0: java.net.URL, arg1: javax.xml.namespace.QName, arg2: java.lang.Class<javax.xml.ws.Service>, arg3: com.sun.xml.internal.ws.binding.WebServiceFeatureList)
                            public constructor(arg0: javax.xml.transform.Source, arg1: javax.xml.namespace.QName, arg2: java.lang.Class<javax.xml.ws.Service>, ...arg3: javax.xml.ws.WebServiceFeature[])
                            protected constructor(arg0: javax.xml.transform.Source, arg1: javax.xml.namespace.QName, arg2: java.lang.Class<javax.xml.ws.Service>, arg3: com.sun.xml.internal.ws.binding.WebServiceFeatureList)
                            public constructor(arg0: javax.xml.transform.Source, arg1: com.sun.xml.internal.ws.api.model.wsdl.WSDLService, arg2: javax.xml.namespace.QName, arg3: java.lang.Class<javax.xml.ws.Service>, ...arg4: javax.xml.ws.WebServiceFeature[])
                            public constructor(arg0: javax.xml.transform.Source, arg1: com.sun.xml.internal.ws.api.model.wsdl.WSDLService, arg2: javax.xml.namespace.QName, arg3: java.lang.Class<javax.xml.ws.Service>, arg4: com.sun.xml.internal.ws.binding.WebServiceFeatureList)
                            protected createCatalogResolver(): org.xml.sax.EntityResolver
                            public getExecutor(): java.util.concurrent.Executor
                            public setExecutor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): void
                            public getHandlerResolver(): javax.xml.ws.handler.HandlerResolver
                            public setHandlerResolver(arg0: javax.xml.ws.handler.HandlerResolver | javax.xml.ws.handler.HandlerResolver$$Lambda): void
                            public getPort<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class<T>): T
                            public getPort<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class<T>, ...arg2: javax.xml.ws.WebServiceFeature[]): T
                            public getPort<T>(arg0: javax.xml.ws.EndpointReference | javax.xml.ws.EndpointReference$$Lambda, arg1: java.lang.Class<T>, ...arg2: javax.xml.ws.WebServiceFeature[]): T
                            public getPort<T>(arg0: com.sun.xml.internal.ws.api.addressing.WSEndpointReference, arg1: java.lang.Class<T>, ...arg2: javax.xml.ws.WebServiceFeature[]): T
                            protected getPort<T>(arg0: com.sun.xml.internal.ws.api.addressing.WSEndpointReference, arg1: javax.xml.namespace.QName, arg2: java.lang.Class<T>, arg3: com.sun.xml.internal.ws.binding.WebServiceFeatureList): T
                            public getPort<T>(arg0: java.lang.Class<T>, ...arg1: javax.xml.ws.WebServiceFeature[]): T
                            public getPort<T>(arg0: java.lang.Class<T>): T
                            public addPort<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public createDispatch<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class<T>, arg2: javax.xml.ws.Service$Mode): javax.xml.ws.Dispatch<T>
                            public createDispatch<T>(arg0: javax.xml.namespace.QName, arg1: com.sun.xml.internal.ws.api.addressing.WSEndpointReference, arg2: java.lang.Class<T>, arg3: javax.xml.ws.Service$Mode, ...arg4: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Dispatch<T>
                            public createDispatch<T>(arg0: javax.xml.namespace.QName, arg1: com.sun.xml.internal.ws.api.addressing.WSEndpointReference, arg2: java.lang.Class<T>, arg3: javax.xml.ws.Service$Mode, arg4: com.sun.xml.internal.ws.binding.WebServiceFeatureList): javax.xml.ws.Dispatch<T>
                            public createDispatch<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class<T>, arg2: javax.xml.ws.Service$Mode, ...arg3: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Dispatch<T>
                            public createDispatch<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class<T>, arg2: javax.xml.ws.Service$Mode, arg3: com.sun.xml.internal.ws.binding.WebServiceFeatureList): javax.xml.ws.Dispatch<T>
                            public createDispatch<T>(arg0: javax.xml.ws.EndpointReference | javax.xml.ws.EndpointReference$$Lambda, arg1: java.lang.Class<T>, arg2: javax.xml.ws.Service$Mode, ...arg3: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Dispatch<T>
                            public safeGetPort<T>(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.client.PortInfo
                            public getEndpointAddress<T>(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.EndpointAddress
                            public createDispatch<T>(arg0: javax.xml.namespace.QName, arg1: javax.xml.bind.JAXBContext, arg2: javax.xml.ws.Service$Mode): javax.xml.ws.Dispatch<java.lang.Object>
                            public createDispatch<T>(arg0: javax.xml.namespace.QName, arg1: com.sun.xml.internal.ws.api.addressing.WSEndpointReference, arg2: javax.xml.bind.JAXBContext, arg3: javax.xml.ws.Service$Mode, ...arg4: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Dispatch<java.lang.Object>
                            protected createDispatch<T>(arg0: javax.xml.namespace.QName, arg1: com.sun.xml.internal.ws.api.addressing.WSEndpointReference, arg2: javax.xml.bind.JAXBContext, arg3: javax.xml.ws.Service$Mode, arg4: com.sun.xml.internal.ws.binding.WebServiceFeatureList): javax.xml.ws.Dispatch<java.lang.Object>
                            public getContainer<T>(): com.sun.xml.internal.ws.api.server.Container
                            public createDispatch<T>(arg0: javax.xml.namespace.QName, arg1: javax.xml.bind.JAXBContext, arg2: javax.xml.ws.Service$Mode, ...arg3: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Dispatch<java.lang.Object>
                            protected createDispatch<T>(arg0: javax.xml.namespace.QName, arg1: javax.xml.bind.JAXBContext, arg2: javax.xml.ws.Service$Mode, arg3: com.sun.xml.internal.ws.binding.WebServiceFeatureList): javax.xml.ws.Dispatch<java.lang.Object>
                            public createDispatch<T>(arg0: javax.xml.ws.EndpointReference | javax.xml.ws.EndpointReference$$Lambda, arg1: javax.xml.bind.JAXBContext, arg2: javax.xml.ws.Service$Mode, ...arg3: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Dispatch<java.lang.Object>
                            public getServiceName<T>(): javax.xml.namespace.QName
                            public getServiceClass<T>(): java.lang.Class
                            public getPorts<T>(): java.util.Iterator<javax.xml.namespace.QName>
                            public getWSDLDocumentLocation<T>(): java.net.URL
                            protected getStubHandler<T>(arg0: com.sun.xml.internal.ws.binding.BindingImpl, arg1: com.sun.xml.internal.ws.client.SEIPortInfo, arg2: com.sun.xml.internal.ws.api.addressing.WSEndpointReference): java.lang.reflect.InvocationHandler
                            public getPortModel<T>(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLService, arg1: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
                            public buildRuntimeModel<T>(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.QName, arg2: java.lang.Class, arg3: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg4: com.sun.xml.internal.ws.binding.WebServiceFeatureList): com.sun.xml.internal.ws.api.model.SEIModel
                            public getWsdlService<T>(): com.sun.xml.internal.ws.api.model.wsdl.WSDLService
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}