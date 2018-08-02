declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace server {
abstract class WSEndpoint<T> implements com.sun.xml.internal.ws.api.ComponentRegistry {
    public constructor()
    public createCodec(): com.sun.xml.internal.ws.api.pipe.Codec
    public getServiceName(): javax.xml.namespace.QName
    public getPortName(): javax.xml.namespace.QName
    public getImplementationClass(): java.lang.Class<T>
    public getBinding(): com.sun.xml.internal.ws.api.WSBinding
    public getContainer(): com.sun.xml.internal.ws.api.server.Container
    public getPort(): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
    public setExecutor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): void
    public schedule(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: com.sun.xml.internal.ws.api.server.WSEndpoint$CompletionCallback | com.sun.xml.internal.ws.api.server.WSEndpoint$CompletionCallback$$Lambda): void
    public schedule(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: com.sun.xml.internal.ws.api.server.WSEndpoint$CompletionCallback | com.sun.xml.internal.ws.api.server.WSEndpoint$CompletionCallback$$Lambda, arg2: com.sun.xml.internal.ws.api.pipe.FiberContextSwitchInterceptor | com.sun.xml.internal.ws.api.pipe.FiberContextSwitchInterceptor$$Lambda): void
    public process(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: com.sun.xml.internal.ws.api.server.WSEndpoint$CompletionCallback | com.sun.xml.internal.ws.api.server.WSEndpoint$CompletionCallback$$Lambda, arg2: com.sun.xml.internal.ws.api.pipe.FiberContextSwitchInterceptor | com.sun.xml.internal.ws.api.pipe.FiberContextSwitchInterceptor$$Lambda): void
    public getEngine(): com.sun.xml.internal.ws.api.pipe.Engine
    public createPipeHead(): com.sun.xml.internal.ws.api.server.WSEndpoint$PipeHead
    public dispose(): void
    public getServiceDefinition(): com.sun.xml.internal.ws.api.server.ServiceDefinition
    public getBoundEndpoints(): java.util.List<com.sun.xml.internal.ws.api.server.BoundEndpoint>
    public getComponentRegistry(): java.util.Set<com.sun.xml.internal.ws.api.server.EndpointComponent>
    public getComponents(): java.util.Set<com.sun.xml.internal.ws.api.Component>
    public getSPI<S>(arg0: java.lang.Class<S>): S
    public getSEIModel<S>(): com.sun.xml.internal.ws.api.model.SEIModel
    public getPolicyMap<S>(): com.sun.xml.internal.ws.policy.PolicyMap
    public getManagedObjectManager<S>(): com.sun.org.glassfish.gmbal.ManagedObjectManager
    public closeManagedObjectManager<S>(): void
    public getAssemblerContext<S>(): com.sun.xml.internal.ws.api.pipe.ServerTubeAssemblerContext
    public static create<T>(arg0: java.lang.Class<T>, arg1: boolean, arg2: com.sun.xml.internal.ws.api.server.Invoker, arg3: javax.xml.namespace.QName, arg4: javax.xml.namespace.QName, arg5: com.sun.xml.internal.ws.api.server.Container, arg6: com.sun.xml.internal.ws.api.WSBinding, arg7: com.sun.xml.internal.ws.api.server.SDDocumentSource, arg8: java.util.Collection<com.sun.xml.internal.ws.api.server.SDDocumentSource>, arg9: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda, arg10: boolean): com.sun.xml.internal.ws.api.server.WSEndpoint<T>
    public static create<T>(arg0: java.lang.Class<T>, arg1: boolean, arg2: com.sun.xml.internal.ws.api.server.Invoker, arg3: javax.xml.namespace.QName, arg4: javax.xml.namespace.QName, arg5: com.sun.xml.internal.ws.api.server.Container, arg6: com.sun.xml.internal.ws.api.WSBinding, arg7: com.sun.xml.internal.ws.api.server.SDDocumentSource, arg8: java.util.Collection<com.sun.xml.internal.ws.api.server.SDDocumentSource>, arg9: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda, arg10: boolean, arg11: boolean): com.sun.xml.internal.ws.api.server.WSEndpoint<T>
    public static create<T>(arg0: java.lang.Class<T>, arg1: boolean, arg2: com.sun.xml.internal.ws.api.server.Invoker, arg3: javax.xml.namespace.QName, arg4: javax.xml.namespace.QName, arg5: com.sun.xml.internal.ws.api.server.Container, arg6: com.sun.xml.internal.ws.api.WSBinding, arg7: com.sun.xml.internal.ws.api.server.SDDocumentSource, arg8: java.util.Collection<com.sun.xml.internal.ws.api.server.SDDocumentSource>, arg9: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda): com.sun.xml.internal.ws.api.server.WSEndpoint<T>
    public static create<T>(arg0: java.lang.Class<T>, arg1: boolean, arg2: com.sun.xml.internal.ws.api.server.Invoker, arg3: javax.xml.namespace.QName, arg4: javax.xml.namespace.QName, arg5: com.sun.xml.internal.ws.api.server.Container, arg6: com.sun.xml.internal.ws.api.WSBinding, arg7: com.sun.xml.internal.ws.api.server.SDDocumentSource, arg8: java.util.Collection<com.sun.xml.internal.ws.api.server.SDDocumentSource>, arg9: java.net.URL): com.sun.xml.internal.ws.api.server.WSEndpoint<T>
    public static getDefaultServiceName<S>(arg0: java.lang.Class): javax.xml.namespace.QName
    public static getDefaultServiceName<S>(arg0: java.lang.Class, arg1: com.sun.xml.internal.ws.api.databinding.MetadataReader): javax.xml.namespace.QName
    public static getDefaultServiceName<S>(arg0: java.lang.Class, arg1: boolean): javax.xml.namespace.QName
    public static getDefaultServiceName<S>(arg0: java.lang.Class, arg1: boolean, arg2: com.sun.xml.internal.ws.api.databinding.MetadataReader): javax.xml.namespace.QName
    public static getDefaultPortName<S>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class): javax.xml.namespace.QName
    public static getDefaultPortName<S>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class, arg2: com.sun.xml.internal.ws.api.databinding.MetadataReader): javax.xml.namespace.QName
    public static getDefaultPortName<S>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class, arg2: boolean): javax.xml.namespace.QName
    public static getDefaultPortName<S>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class, arg2: boolean, arg3: com.sun.xml.internal.ws.api.databinding.MetadataReader): javax.xml.namespace.QName
    public getEndpointReference<T extends javax.xml.ws.EndpointReference>(arg0: java.lang.Class<T>, arg1: java.lang.String | string, arg2: java.lang.String | string, ...arg3: org.w3c.dom.Element[]): T
    public getEndpointReference<T extends javax.xml.ws.EndpointReference>(arg0: java.lang.Class<T>, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.List<org.w3c.dom.Element>, arg4: java.util.List<org.w3c.dom.Element>): T
    public equalsProxiedInstance<S>(arg0: com.sun.xml.internal.ws.api.server.WSEndpoint): boolean
    public getOperationDispatcher<S>(): com.sun.xml.internal.ws.wsdl.OperationDispatcher
    public createServiceResponseForException<S>(arg0: com.sun.xml.internal.ws.api.pipe.ThrowableContainerPropertySet, arg1: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg2: com.sun.xml.internal.ws.api.SOAPVersion, arg3: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg4: com.sun.xml.internal.ws.api.model.SEIModel, arg5: com.sun.xml.internal.ws.api.WSBinding): com.sun.xml.internal.ws.api.message.Packet
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}