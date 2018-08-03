declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace server {
                        class EndpointFactory {
                            public constructor()
                            public static getInstance(): com.sun.xml.internal.ws.server.EndpointFactory
                            public static createEndpoint<T>(arg0: java.lang.Class<T>, arg1: boolean, arg2: com.sun.xml.internal.ws.api.server.Invoker, arg3: javax.xml.namespace.QName, arg4: javax.xml.namespace.QName, arg5: com.sun.xml.internal.ws.api.server.Container, arg6: com.sun.xml.internal.ws.api.WSBinding, arg7: com.sun.xml.internal.ws.api.server.SDDocumentSource, arg8: java.util.Collection<com.sun.xml.internal.ws.api.server.SDDocumentSource>, arg9: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda, arg10: boolean): com.sun.xml.internal.ws.api.server.WSEndpoint<T>
                            public static createEndpoint<T>(arg0: java.lang.Class<T>, arg1: boolean, arg2: com.sun.xml.internal.ws.api.server.Invoker, arg3: javax.xml.namespace.QName, arg4: javax.xml.namespace.QName, arg5: com.sun.xml.internal.ws.api.server.Container, arg6: com.sun.xml.internal.ws.api.WSBinding, arg7: com.sun.xml.internal.ws.api.server.SDDocumentSource, arg8: java.util.Collection<com.sun.xml.internal.ws.api.server.SDDocumentSource>, arg9: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda, arg10: boolean, arg11: boolean): com.sun.xml.internal.ws.api.server.WSEndpoint<T>
                            public create<T>(arg0: java.lang.Class<T>, arg1: boolean, arg2: com.sun.xml.internal.ws.api.server.Invoker, arg3: javax.xml.namespace.QName, arg4: javax.xml.namespace.QName, arg5: com.sun.xml.internal.ws.api.server.Container, arg6: com.sun.xml.internal.ws.api.WSBinding, arg7: com.sun.xml.internal.ws.api.server.SDDocumentSource, arg8: java.util.Collection<com.sun.xml.internal.ws.api.server.SDDocumentSource>, arg9: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda, arg10: boolean): com.sun.xml.internal.ws.api.server.WSEndpoint<T>
                            public create<T>(arg0: java.lang.Class<T>, arg1: boolean, arg2: com.sun.xml.internal.ws.api.server.Invoker, arg3: javax.xml.namespace.QName, arg4: javax.xml.namespace.QName, arg5: com.sun.xml.internal.ws.api.server.Container, arg6: com.sun.xml.internal.ws.api.WSBinding, arg7: com.sun.xml.internal.ws.api.server.SDDocumentSource, arg8: java.util.Collection<com.sun.xml.internal.ws.api.server.SDDocumentSource>, arg9: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda, arg10: boolean, arg11: boolean): com.sun.xml.internal.ws.api.server.WSEndpoint<T>
                            protected create<T>(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.QName, arg2: com.sun.xml.internal.ws.api.WSBinding, arg3: com.sun.xml.internal.ws.api.server.Container, arg4: com.sun.xml.internal.ws.api.model.SEIModel, arg5: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg6: java.lang.Class<T>, arg7: com.sun.xml.internal.ws.server.ServiceDefinitionImpl, arg8: com.sun.xml.internal.ws.server.EndpointAwareTube | com.sun.xml.internal.ws.server.EndpointAwareTube$$Lambda, arg9: boolean, arg10: com.sun.xml.internal.ws.policy.PolicyMap): com.sun.xml.internal.ws.api.server.WSEndpoint<T>
                            protected isUseProviderTube<T>(arg0: java.lang.Class<any>, arg1: boolean): boolean
                            protected createSEIInvokerTube<T>(arg0: com.sun.xml.internal.ws.model.AbstractSEIModelImpl, arg1: com.sun.xml.internal.ws.api.server.Invoker, arg2: com.sun.xml.internal.ws.api.WSBinding): com.sun.xml.internal.ws.server.EndpointAwareTube
                            protected createProviderInvokerTube<T>(arg0: java.lang.Class<T>, arg1: com.sun.xml.internal.ws.api.WSBinding, arg2: com.sun.xml.internal.ws.api.server.Invoker, arg3: com.sun.xml.internal.ws.api.server.Container): com.sun.xml.internal.ws.server.EndpointAwareTube
                            public static verifyImplementorClass<T>(arg0: java.lang.Class<any>): boolean
                            public static verifyImplementorClass<T>(arg0: java.lang.Class<any>, arg1: com.sun.xml.internal.ws.api.databinding.MetadataReader): boolean
                            public static getExternalMetadatReader<T>(arg0: java.lang.Class<any>, arg1: com.sun.xml.internal.ws.api.WSBinding): com.sun.xml.internal.ws.api.databinding.MetadataReader
                            public static getDefaultServiceName<T>(arg0: java.lang.Class<any>): javax.xml.namespace.QName
                            public static getDefaultServiceName<T>(arg0: java.lang.Class<any>, arg1: com.sun.xml.internal.ws.api.databinding.MetadataReader): javax.xml.namespace.QName
                            public static getDefaultServiceName<T>(arg0: java.lang.Class<any>, arg1: boolean): javax.xml.namespace.QName
                            public static getDefaultServiceName<T>(arg0: java.lang.Class<any>, arg1: boolean, arg2: com.sun.xml.internal.ws.api.databinding.MetadataReader): javax.xml.namespace.QName
                            public static getDefaultPortName<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class<any>): javax.xml.namespace.QName
                            public static getDefaultPortName<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class<any>, arg2: com.sun.xml.internal.ws.api.databinding.MetadataReader): javax.xml.namespace.QName
                            public static getDefaultPortName<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class<any>, arg2: boolean): javax.xml.namespace.QName
                            public static getDefaultPortName<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class<any>, arg2: boolean, arg3: com.sun.xml.internal.ws.api.databinding.MetadataReader): javax.xml.namespace.QName
                            public static getWsdlLocation<T>(arg0: java.lang.Class<any>): string
                            public static getWsdlLocation<T>(arg0: java.lang.Class<any>, arg1: com.sun.xml.internal.ws.api.databinding.MetadataReader): string
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}