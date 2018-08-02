declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace client {
                        class PortInfo implements com.sun.xml.internal.ws.api.client.WSPortInfo {
                            public portName: javax.xml.namespace.QName
                            public targetEndpoint: com.sun.xml.internal.ws.api.EndpointAddress
                            public bindingId: com.sun.xml.internal.ws.api.BindingID
                            public policyMap: com.sun.xml.internal.ws.policy.PolicyMap
                            public portModel: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
                            public constructor(arg0: com.sun.xml.internal.ws.client.WSServiceDelegate, arg1: com.sun.xml.internal.ws.api.EndpointAddress, arg2: javax.xml.namespace.QName, arg3: com.sun.xml.internal.ws.api.BindingID)
                            public constructor(arg0: com.sun.xml.internal.ws.client.WSServiceDelegate, arg1: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort)
                            public getPolicyMap(): com.sun.xml.internal.ws.policy.PolicyMap
                            public createPolicyMap(): com.sun.xml.internal.ws.policy.PolicyMap
                            public createBinding(arg0: javax.xml.ws.WebServiceFeature[], arg1: java.lang.Class<any>): com.sun.xml.internal.ws.binding.BindingImpl
                            public createBinding(arg0: com.sun.xml.internal.ws.binding.WebServiceFeatureList, arg1: java.lang.Class<any>, arg2: com.sun.xml.internal.ws.binding.BindingImpl): com.sun.xml.internal.ws.binding.BindingImpl
                            public getPort(): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
                            public getOwner(): com.sun.xml.internal.ws.api.WSService
                            public getBindingId(): com.sun.xml.internal.ws.api.BindingID
                            public getEndpointAddress(): com.sun.xml.internal.ws.api.EndpointAddress
                            public getServiceName(): javax.xml.namespace.QName
                            public getPortName(): javax.xml.namespace.QName
                            public getBindingID(): string
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}