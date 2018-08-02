declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace assembler {
                        namespace dev {
                            interface ClientTubelineAssemblyContext extends com.sun.xml.internal.ws.assembler.dev.TubelineAssemblyContext {
                                getAddress(): com.sun.xml.internal.ws.api.EndpointAddress
                                getBinding(): com.sun.xml.internal.ws.api.WSBinding
                                getCodec(): com.sun.xml.internal.ws.api.pipe.Codec
                                getContainer(): com.sun.xml.internal.ws.api.server.Container
                                getPolicyMap(): com.sun.xml.internal.ws.policy.PolicyMap
                                getPortInfo(): com.sun.xml.internal.ws.api.client.WSPortInfo
                                getSEIModel(): com.sun.xml.internal.ws.api.model.SEIModel
                                getService(): com.sun.xml.internal.ws.api.WSService
                                getWrappedContext(): com.sun.xml.internal.ws.api.pipe.ClientTubeAssemblerContext
                                getWsdlPort(): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
                                isPolicyAvailable(): boolean
                                setCodec(arg0: com.sun.xml.internal.ws.api.pipe.Codec): void
                            }
                        }
                    }
                }
            }
        }
    }
}