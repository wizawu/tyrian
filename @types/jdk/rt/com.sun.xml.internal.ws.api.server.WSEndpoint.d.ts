declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace server {
                            abstract class WSEndpoint<T> implements com.sun.xml.internal.ws.api.ComponentRegistry {
                                public constructor()
                                public abstract createCodec(): com.sun.xml.internal.ws.api.pipe.Codec
                                public abstract getServiceName(): javax.xml.namespace.QName
                                public abstract getPortName(): javax.xml.namespace.QName
                                public abstract getImplementationClass(): java.lang.Class<T>
                                public abstract getBinding(): com.sun.xml.internal.ws.api.WSBinding
                                public abstract getContainer(): com.sun.xml.internal.ws.api.server.Container
                                public abstract getPort(): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
                                public abstract setExecutor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): void
                                public schedule(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: com.sun.xml.internal.ws.api.server.WSEndpoint$CompletionCallback | com.sun.xml.internal.ws.api.server.WSEndpoint$CompletionCallback$$Lambda): void
                                public abstract schedule(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: com.sun.xml.internal.ws.api.server.WSEndpoint$CompletionCallback | com.sun.xml.internal.ws.api.server.WSEndpoint$CompletionCallback$$Lambda, arg2: com.sun.xml.internal.ws.api.pipe.FiberContextSwitchInterceptor | com.sun.xml.internal.ws.api.pipe.FiberContextSwitchInterceptor$$Lambda): void
                                public process(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: com.sun.xml.internal.ws.api.server.WSEndpoint$CompletionCallback | com.sun.xml.internal.ws.api.server.WSEndpoint$CompletionCallback$$Lambda, arg2: com.sun.xml.internal.ws.api.pipe.FiberContextSwitchInterceptor | com.sun.xml.internal.ws.api.pipe.FiberContextSwitchInterceptor$$Lambda): void
                                public getEngine(): com.sun.xml.internal.ws.api.pipe.Engine
                                public abstract createPipeHead(): com.sun.xml.internal.ws.api.server.WSEndpoint$PipeHead
                                public abstract dispose(): void
                                public abstract getServiceDefinition(): com.sun.xml.internal.ws.api.server.ServiceDefinition
                                public getBoundEndpoints(): java.util.List<com.sun.xml.internal.ws.api.server.BoundEndpoint>
                                public abstract getComponentRegistry(): java.util.Set<com.sun.xml.internal.ws.api.server.EndpointComponent>
                                public getComponents(): java.util.Set<com.sun.xml.internal.ws.api.Component>
                                public getSPI<S>(arg0: java.lang.Class<S>): S
                                public abstract getSEIModel<S>(): com.sun.xml.internal.ws.api.model.SEIModel
                                public abstract getPolicyMap<S>(): com.sun.xml.internal.ws.policy.PolicyMap
                                public abstract getManagedObjectManager<S>(): com.sun.org.glassfish.gmbal.ManagedObjectManager
                                public abstract closeManagedObjectManager<S>(): void
                                public abstract getAssemblerContext<S>(): com.sun.xml.internal.ws.api.pipe.ServerTubeAssemblerContext
                                public static create<T>(arg0: java.lang.Class<T>, arg1: boolean, arg2: com.sun.xml.internal.ws.api.server.Invoker, arg3: javax.xml.namespace.QName, arg4: javax.xml.namespace.QName, arg5: com.sun.xml.internal.ws.api.server.Container, arg6: com.sun.xml.internal.ws.api.WSBinding, arg7: com.sun.xml.internal.ws.api.server.SDDocumentSource, arg8: java.util.Collection<com.sun.xml.internal.ws.api.server.SDDocumentSource>, arg9: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda, arg10: boolean): com.sun.xml.internal.ws.api.server.WSEndpoint<T>
                                public static create<T>(arg0: java.lang.Class<T>, arg1: boolean, arg2: com.sun.xml.internal.ws.api.server.Invoker, arg3: javax.xml.namespace.QName, arg4: javax.xml.namespace.QName, arg5: com.sun.xml.internal.ws.api.server.Container, arg6: com.sun.xml.internal.ws.api.WSBinding, arg7: com.sun.xml.internal.ws.api.server.SDDocumentSource, arg8: java.util.Collection<com.sun.xml.internal.ws.api.server.SDDocumentSource>, arg9: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda, arg10: boolean, arg11: boolean): com.sun.xml.internal.ws.api.server.WSEndpoint<T>
                                public static create<T>(arg0: java.lang.Class<T>, arg1: boolean, arg2: com.sun.xml.internal.ws.api.server.Invoker, arg3: javax.xml.namespace.QName, arg4: javax.xml.namespace.QName, arg5: com.sun.xml.internal.ws.api.server.Container, arg6: com.sun.xml.internal.ws.api.WSBinding, arg7: com.sun.xml.internal.ws.api.server.SDDocumentSource, arg8: java.util.Collection<com.sun.xml.internal.ws.api.server.SDDocumentSource>, arg9: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda): com.sun.xml.internal.ws.api.server.WSEndpoint<T>
                                public static create<T>(arg0: java.lang.Class<T>, arg1: boolean, arg2: com.sun.xml.internal.ws.api.server.Invoker, arg3: javax.xml.namespace.QName, arg4: javax.xml.namespace.QName, arg5: com.sun.xml.internal.ws.api.server.Container, arg6: com.sun.xml.internal.ws.api.WSBinding, arg7: com.sun.xml.internal.ws.api.server.SDDocumentSource, arg8: java.util.Collection<com.sun.xml.internal.ws.api.server.SDDocumentSource>, arg9: java.net.URL): com.sun.xml.internal.ws.api.server.WSEndpoint<T>
                                public static getDefaultServiceName<T>(arg0: java.lang.Class): javax.xml.namespace.QName
                                public static getDefaultServiceName<T>(arg0: java.lang.Class, arg1: com.sun.xml.internal.ws.api.databinding.MetadataReader): javax.xml.namespace.QName
                                public static getDefaultServiceName<T>(arg0: java.lang.Class, arg1: boolean): javax.xml.namespace.QName
                                public static getDefaultServiceName<T>(arg0: java.lang.Class, arg1: boolean, arg2: com.sun.xml.internal.ws.api.databinding.MetadataReader): javax.xml.namespace.QName
                                public static getDefaultPortName<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class): javax.xml.namespace.QName
                                public static getDefaultPortName<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class, arg2: com.sun.xml.internal.ws.api.databinding.MetadataReader): javax.xml.namespace.QName
                                public static getDefaultPortName<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class, arg2: boolean): javax.xml.namespace.QName
                                public static getDefaultPortName<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class, arg2: boolean, arg3: com.sun.xml.internal.ws.api.databinding.MetadataReader): javax.xml.namespace.QName
                                public abstract getEndpointReference<T extends javax.xml.ws.EndpointReference>(arg0: java.lang.Class<T>, arg1: java.lang.String | string, arg2: java.lang.String | string, ...arg3: org.w3c.dom.Element[]): T
                                public abstract getEndpointReference<T extends javax.xml.ws.EndpointReference>(arg0: java.lang.Class<T>, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.List<org.w3c.dom.Element>, arg4: java.util.List<org.w3c.dom.Element>): T
                                public equalsProxiedInstance<T extends javax.xml.ws.EndpointReference>(arg0: com.sun.xml.internal.ws.api.server.WSEndpoint): boolean
                                public abstract getOperationDispatcher<T extends javax.xml.ws.EndpointReference>(): com.sun.xml.internal.ws.wsdl.OperationDispatcher
                                public abstract createServiceResponseForException<T extends javax.xml.ws.EndpointReference>(arg0: com.sun.xml.internal.ws.api.pipe.ThrowableContainerPropertySet, arg1: com.sun.xml.internal.ws.api.message.Packet, arg2: com.sun.xml.internal.ws.api.SOAPVersion, arg3: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg4: com.sun.xml.internal.ws.api.model.SEIModel, arg5: com.sun.xml.internal.ws.api.WSBinding): com.sun.xml.internal.ws.api.message.Packet
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}