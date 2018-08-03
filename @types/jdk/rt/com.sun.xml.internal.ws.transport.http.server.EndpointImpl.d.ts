declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace transport {
                        namespace http {
                            namespace server {
                                class EndpointImpl extends javax.xml.ws.Endpoint {
                                    public constructor(arg0: com.sun.xml.internal.ws.api.BindingID, arg1: java.lang.Object, ...arg2: javax.xml.ws.WebServiceFeature[])
                                    public constructor(arg0: com.sun.xml.internal.ws.api.BindingID, arg1: java.lang.Class, arg2: javax.xml.ws.spi.Invoker, ...arg3: javax.xml.ws.WebServiceFeature[])
                                    public constructor(arg0: com.sun.xml.internal.ws.api.server.WSEndpoint, arg1: java.lang.Object)
                                    public constructor(arg0: com.sun.xml.internal.ws.api.server.WSEndpoint, arg1: java.lang.Object, arg2: javax.xml.ws.EndpointContext | javax.xml.ws.EndpointContext$$Lambda)
                                    public constructor(arg0: com.sun.xml.internal.ws.api.server.WSEndpoint, arg1: java.lang.String | string)
                                    public constructor(arg0: com.sun.xml.internal.ws.api.server.WSEndpoint, arg1: java.lang.String | string, arg2: javax.xml.ws.EndpointContext | javax.xml.ws.EndpointContext$$Lambda)
                                    public getBinding(): javax.xml.ws.Binding
                                    public getImplementor(): java.lang.Object
                                    public publish(arg0: java.lang.String | string): void
                                    public publish(arg0: java.lang.Object): void
                                    public publish(arg0: javax.xml.ws.spi.http.HttpContext): void
                                    public stop(): void
                                    public isPublished(): boolean
                                    public getMetadata(): java.util.List<javax.xml.transform.Source>
                                    public setMetadata(arg0: java.util.List<javax.xml.transform.Source>): void
                                    public getExecutor(): java.util.concurrent.Executor
                                    public setExecutor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): void
                                    public getProperties(): java.util.Map<java.lang.String, java.lang.Object>
                                    public setProperties(arg0: java.util.Map<java.lang.String, java.lang.Object>): void
                                    public getEndpointReference(...arg0: org.w3c.dom.Element[]): javax.xml.ws.EndpointReference
                                    public getEndpointReference<T extends javax.xml.ws.EndpointReference>(arg0: java.lang.Class<T>, ...arg1: org.w3c.dom.Element[]): T
                                    public setEndpointContext<T extends javax.xml.ws.EndpointReference>(arg0: javax.xml.ws.EndpointContext | javax.xml.ws.EndpointContext$$Lambda): void
                                    public static class: java.lang.Class<any>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}