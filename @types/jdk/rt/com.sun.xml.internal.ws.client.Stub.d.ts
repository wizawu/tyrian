declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace client {
                        abstract class Stub implements com.sun.xml.internal.ws.developer.WSBindingProvider , com.sun.xml.internal.ws.client.ResponseContextReceiver , com.sun.xml.internal.ws.api.ComponentRegistry {
                            public static readonly PREVENT_SYNC_START_FOR_ASYNC_INVOKE: string
                            protected readonly owner: com.sun.xml.internal.ws.client.WSServiceDelegate
                            protected endpointReference: com.sun.xml.internal.ws.api.addressing.WSEndpointReference
                            protected readonly binding: com.sun.xml.internal.ws.binding.BindingImpl
                            protected readonly portInfo: com.sun.xml.internal.ws.api.client.WSPortInfo
                            protected addrVersion: com.sun.xml.internal.ws.api.addressing.AddressingVersion
                            public requestContext: com.sun.xml.internal.ws.client.RequestContext
                            protected readonly wsdlPort: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
                            protected portname: javax.xml.namespace.QName
                            protected operationDispatcher: com.sun.xml.internal.ws.wsdl.OperationDispatcher
                            protected constructor(arg0: com.sun.xml.internal.ws.client.WSServiceDelegate, arg1: com.sun.xml.internal.ws.api.pipe.Tube, arg2: com.sun.xml.internal.ws.binding.BindingImpl, arg3: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg4: com.sun.xml.internal.ws.api.EndpointAddress, arg5: com.sun.xml.internal.ws.api.addressing.WSEndpointReference)
                            protected constructor(arg0: javax.xml.namespace.QName, arg1: com.sun.xml.internal.ws.client.WSServiceDelegate, arg2: com.sun.xml.internal.ws.api.pipe.Tube, arg3: com.sun.xml.internal.ws.binding.BindingImpl, arg4: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg5: com.sun.xml.internal.ws.api.EndpointAddress, arg6: com.sun.xml.internal.ws.api.addressing.WSEndpointReference)
                            protected constructor(arg0: com.sun.xml.internal.ws.api.client.WSPortInfo, arg1: com.sun.xml.internal.ws.binding.BindingImpl, arg2: com.sun.xml.internal.ws.api.pipe.Tube, arg3: com.sun.xml.internal.ws.api.EndpointAddress, arg4: com.sun.xml.internal.ws.api.addressing.WSEndpointReference)
                            protected constructor(arg0: com.sun.xml.internal.ws.api.client.WSPortInfo, arg1: com.sun.xml.internal.ws.binding.BindingImpl, arg2: com.sun.xml.internal.ws.api.EndpointAddress, arg3: com.sun.xml.internal.ws.api.addressing.WSEndpointReference)
                            public getWSDLPort(): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
                            public getService(): com.sun.xml.internal.ws.api.WSService
                            public getTubes(): com.sun.xml.internal.ws.util.Pool<com.sun.xml.internal.ws.api.pipe.Tube>
                            public getPortInfo(): com.sun.xml.internal.ws.api.client.WSPortInfo
                            public getOperationDispatcher(): com.sun.xml.internal.ws.wsdl.OperationDispatcher
                            protected abstract getPortName(): javax.xml.namespace.QName
                            protected getServiceName(): javax.xml.namespace.QName
                            public getExecutor(): java.util.concurrent.Executor
                            protected process(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: com.sun.xml.internal.ws.client.RequestContext, arg2: com.sun.xml.internal.ws.client.ResponseContextReceiver | com.sun.xml.internal.ws.client.ResponseContextReceiver$$Lambda): com.sun.xml.internal.ws.api.message.Packet
                            protected processAsync(arg0: com.sun.xml.internal.ws.client.AsyncResponseImpl<any>, arg1: com.sun.xml.internal.ws.api.message.Packet, arg2: com.sun.xml.internal.ws.client.RequestContext, arg3: com.sun.xml.internal.ws.api.pipe.Fiber$CompletionCallback): void
                            protected configureFiber(arg0: com.sun.xml.internal.ws.api.pipe.Fiber): void
                            public close(): void
                            public getBinding(): com.sun.xml.internal.ws.api.WSBinding
                            public getRequestContext(): java.util.Map<java.lang.String, java.lang.Object>
                            public resetRequestContext(): void
                            public getResponseContext(): com.sun.xml.internal.ws.client.ResponseContext
                            public setResponseContext(arg0: com.sun.xml.internal.ws.client.ResponseContext): void
                            public toString(): string
                            public getWSEndpointReference(): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
                            public getEndpointReference(): javax.xml.ws.wsaddressing.W3CEndpointReference
                            public getEndpointReference<T extends javax.xml.ws.EndpointReference>(arg0: java.lang.Class<T>): T
                            public getManagedObjectManager<T extends javax.xml.ws.EndpointReference>(): com.sun.org.glassfish.gmbal.ManagedObjectManager
                            public setOutboundHeaders<T extends javax.xml.ws.EndpointReference>(arg0: java.util.List<com.sun.xml.internal.ws.api.message.Header>): void
                            public setOutboundHeaders<T extends javax.xml.ws.EndpointReference>(...arg0: com.sun.xml.internal.ws.api.message.Header[]): void
                            public getInboundHeaders<T extends javax.xml.ws.EndpointReference>(): java.util.List<com.sun.xml.internal.ws.api.message.Header>
                            public setAddress<T extends javax.xml.ws.EndpointReference>(arg0: java.lang.String | string): void
                            public getSPI<S>(arg0: java.lang.Class<S>): S
                            public getComponents<S>(): java.util.Set<com.sun.xml.internal.ws.api.Component>
                            public getEndpointReference<S>(): javax.xml.ws.EndpointReference
                            public getBinding<S>(): javax.xml.ws.Binding
                            public getResponseContext<S>(): java.util.Map
                            public static class: java.lang.Class<any>
                        }
                        interface Stub$$Lambda implements com.sun.xml.internal.ws.developer.WSBindingProvider , com.sun.xml.internal.ws.client.ResponseContextReceiver , com.sun.xml.internal.ws.api.ComponentRegistry {
                            (): javax.xml.namespace.QName
                        }
                    }
                }
            }
        }
    }
}