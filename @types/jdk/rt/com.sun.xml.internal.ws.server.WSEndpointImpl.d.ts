declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace server {
                        class WSEndpointImpl<T> extends com.sun.xml.internal.ws.api.server.WSEndpoint<T> implements com.sun.xml.internal.ws.api.server.LazyMOMProvider$WSEndpointScopeChangeListener {
                            protected binding: com.sun.xml.internal.ws.api.WSBinding
                            protected masterTubeline: com.sun.xml.internal.ws.api.pipe.Tube
                            protected constructor(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.QName, arg2: com.sun.xml.internal.ws.api.WSBinding, arg3: com.sun.xml.internal.ws.api.server.Container, arg4: com.sun.xml.internal.ws.api.model.SEIModel, arg5: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg6: java.lang.Class<T>, arg7: com.sun.xml.internal.ws.server.ServiceDefinitionImpl | com.sun.xml.internal.ws.server.ServiceDefinitionImpl$$Lambda, arg8: com.sun.xml.internal.ws.server.EndpointAwareTube, arg9: boolean, arg10: com.sun.xml.internal.ws.policy.PolicyMap)
                            protected createServerTubeAssemblerContext(arg0: com.sun.xml.internal.ws.server.EndpointAwareTube, arg1: boolean): com.sun.xml.internal.ws.api.pipe.ServerTubeAssemblerContext
                            protected constructor(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.QName, arg2: com.sun.xml.internal.ws.api.WSBinding, arg3: com.sun.xml.internal.ws.api.server.Container, arg4: com.sun.xml.internal.ws.api.model.SEIModel, arg5: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg6: com.sun.xml.internal.ws.api.pipe.Tube)
                            public getEndpointReferenceExtensions(): java.util.Collection<com.sun.xml.internal.ws.api.addressing.WSEndpointReference$EPRExtension>
                            public getOperationDispatcher(): com.sun.xml.internal.ws.wsdl.OperationDispatcher
                            public getPolicyMap(): com.sun.xml.internal.ws.policy.PolicyMap
                            public getImplementationClass(): java.lang.Class<T>
                            public getBinding(): com.sun.xml.internal.ws.api.WSBinding
                            public getContainer(): com.sun.xml.internal.ws.api.server.Container
                            public getPort(): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
                            public getSEIModel(): com.sun.xml.internal.ws.api.model.SEIModel
                            public setExecutor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): void
                            public getEngine(): com.sun.xml.internal.ws.api.pipe.Engine
                            public schedule(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: com.sun.xml.internal.ws.api.server.WSEndpoint$CompletionCallback | com.sun.xml.internal.ws.api.server.WSEndpoint$CompletionCallback$$Lambda, arg2: com.sun.xml.internal.ws.api.pipe.FiberContextSwitchInterceptor | com.sun.xml.internal.ws.api.pipe.FiberContextSwitchInterceptor$$Lambda): void
                            public createServiceResponseForException(arg0: com.sun.xml.internal.ws.api.pipe.ThrowableContainerPropertySet, arg1: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg2: com.sun.xml.internal.ws.api.SOAPVersion, arg3: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg4: com.sun.xml.internal.ws.api.model.SEIModel, arg5: com.sun.xml.internal.ws.api.WSBinding): com.sun.xml.internal.ws.api.message.Packet
                            public process(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: com.sun.xml.internal.ws.api.server.WSEndpoint$CompletionCallback | com.sun.xml.internal.ws.api.server.WSEndpoint$CompletionCallback$$Lambda, arg2: com.sun.xml.internal.ws.api.pipe.FiberContextSwitchInterceptor | com.sun.xml.internal.ws.api.pipe.FiberContextSwitchInterceptor$$Lambda): void
                            public createPipeHead(): com.sun.xml.internal.ws.api.server.WSEndpoint$PipeHead
                            public dispose(): void
                            public getServiceDefinition(): com.sun.xml.internal.ws.server.ServiceDefinitionImpl
                            public getComponentRegistry(): java.util.Set<com.sun.xml.internal.ws.api.server.EndpointComponent>
                            public getComponents(): java.util.Set<com.sun.xml.internal.ws.api.Component>
                            public getEndpointReference<T extends javax.xml.ws.EndpointReference>(arg0: java.lang.Class<T>, arg1: java.lang.String | string, arg2: java.lang.String | string, ...arg3: org.w3c.dom.Element[]): T
                            public getEndpointReference<T extends javax.xml.ws.EndpointReference>(arg0: java.lang.Class<T>, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.List<org.w3c.dom.Element>, arg4: java.util.List<org.w3c.dom.Element>): T
                            public getPortName<T extends javax.xml.ws.EndpointReference>(): javax.xml.namespace.QName
                            public createCodec<T extends javax.xml.ws.EndpointReference>(): com.sun.xml.internal.ws.api.pipe.Codec
                            public getServiceName<T extends javax.xml.ws.EndpointReference>(): javax.xml.namespace.QName
                            public getManagedObjectManager<T extends javax.xml.ws.EndpointReference>(): com.sun.org.glassfish.gmbal.ManagedObjectManager
                            public scopeChanged<T extends javax.xml.ws.EndpointReference>(arg0: com.sun.xml.internal.ws.api.server.LazyMOMProvider$Scope): void
                            public closeManagedObjectManager<T extends javax.xml.ws.EndpointReference>(): void
                            public getAssemblerContext<T extends javax.xml.ws.EndpointReference>(): com.sun.xml.internal.ws.api.pipe.ServerTubeAssemblerContext
                            public getServiceDefinition<T extends javax.xml.ws.EndpointReference>(): com.sun.xml.internal.ws.api.server.ServiceDefinition
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}