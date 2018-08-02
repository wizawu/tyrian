declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace server {
class WSEndpointMOMProxy extends com.sun.xml.internal.ws.api.server.WSEndpoint implements com.sun.org.glassfish.gmbal.ManagedObjectManager {
    public getManagedObjectManager(): com.sun.org.glassfish.gmbal.ManagedObjectManager
    public isInitialized(): boolean
    public getWsEndpoint(): com.sun.xml.internal.ws.server.WSEndpointImpl
    public suspendJMXRegistration(): void
    public resumeJMXRegistration(): void
    public isManagedObject(arg0: java.lang.Object): boolean
    public createRoot(): com.sun.org.glassfish.gmbal.GmbalMBean
    public createRoot(arg0: java.lang.Object): com.sun.org.glassfish.gmbal.GmbalMBean
    public createRoot(arg0: java.lang.Object, arg1: java.lang.String | string): com.sun.org.glassfish.gmbal.GmbalMBean
    public getRoot(): java.lang.Object
    public register(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.String | string): com.sun.org.glassfish.gmbal.GmbalMBean
    public register(arg0: java.lang.Object, arg1: java.lang.Object): com.sun.org.glassfish.gmbal.GmbalMBean
    public registerAtRoot(arg0: java.lang.Object, arg1: java.lang.String | string): com.sun.org.glassfish.gmbal.GmbalMBean
    public registerAtRoot(arg0: java.lang.Object): com.sun.org.glassfish.gmbal.GmbalMBean
    public unregister(arg0: java.lang.Object): void
    public getObjectName(arg0: java.lang.Object): javax.management.ObjectName
    public getAMXClient(arg0: java.lang.Object): com.sun.org.glassfish.gmbal.AMXClient
    public getObject(arg0: javax.management.ObjectName): java.lang.Object
    public stripPrefix(...arg0: java.lang.String[]): void
    public stripPackagePrefix(): void
    public getDomain(): string
    public setMBeanServer(arg0: javax.management.MBeanServer): void
    public getMBeanServer(): javax.management.MBeanServer
    public setResourceBundle(arg0: java.util.ResourceBundle): void
    public getResourceBundle(): java.util.ResourceBundle
    public addAnnotation(arg0: java.lang.reflect.AnnotatedElement, arg1: java.lang.annotation.Annotation): void
    public setRegistrationDebug(arg0: com.sun.org.glassfish.gmbal.ManagedObjectManager$RegistrationDebugLevel): void
    public setRuntimeDebug(arg0: boolean): void
    public setTypelibDebug(arg0: int): void
    public setJMXRegistrationDebug(arg0: boolean): void
    public dumpSkeleton(arg0: java.lang.Object): string
    public suppressDuplicateRootReport(arg0: boolean): void
    public close(): void
    public equalsProxiedInstance(arg0: com.sun.xml.internal.ws.api.server.WSEndpoint): boolean
    public createCodec(): com.sun.xml.internal.ws.api.pipe.Codec
    public getServiceName(): javax.xml.namespace.QName
    public getPortName(): javax.xml.namespace.QName
    public getImplementationClass(): java.lang.Class
    public getBinding(): com.sun.xml.internal.ws.api.WSBinding
    public getContainer(): com.sun.xml.internal.ws.api.server.Container
    public getPort(): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
    public setExecutor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): void
    public schedule(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: com.sun.xml.internal.ws.api.server.WSEndpoint$CompletionCallback | com.sun.xml.internal.ws.api.server.WSEndpoint$CompletionCallback$$Lambda, arg2: com.sun.xml.internal.ws.api.pipe.FiberContextSwitchInterceptor | com.sun.xml.internal.ws.api.pipe.FiberContextSwitchInterceptor$$Lambda): void
    public createPipeHead(): com.sun.xml.internal.ws.api.server.WSEndpoint$PipeHead
    public dispose(): void
    public getServiceDefinition(): com.sun.xml.internal.ws.api.server.ServiceDefinition
    public getComponentRegistry(): java.util.Set
    public getSEIModel(): com.sun.xml.internal.ws.api.model.SEIModel
    public getPolicyMap(): com.sun.xml.internal.ws.policy.PolicyMap
    public closeManagedObjectManager(): void
    public getAssemblerContext(): com.sun.xml.internal.ws.api.pipe.ServerTubeAssemblerContext
    public getEndpointReference(arg0: java.lang.Class, arg1: java.lang.String | string, arg2: java.lang.String | string, ...arg3: org.w3c.dom.Element[]): javax.xml.ws.EndpointReference
    public getEndpointReference(arg0: java.lang.Class, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.List, arg4: java.util.List): javax.xml.ws.EndpointReference
    public getOperationDispatcher(): com.sun.xml.internal.ws.wsdl.OperationDispatcher
    public createServiceResponseForException(arg0: com.sun.xml.internal.ws.api.pipe.ThrowableContainerPropertySet, arg1: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg2: com.sun.xml.internal.ws.api.SOAPVersion, arg3: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg4: com.sun.xml.internal.ws.api.model.SEIModel, arg5: com.sun.xml.internal.ws.api.WSBinding): com.sun.xml.internal.ws.api.message.Packet
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}