declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace assembler {
                        namespace dev {
                            interface ServerTubelineAssemblyContext extends com.sun.xml.internal.ws.assembler.dev.TubelineAssemblyContext {
                                getCodec(): com.sun.xml.internal.ws.api.pipe.Codec
                                getEndpoint(): com.sun.xml.internal.ws.api.server.WSEndpoint
                                getPolicyMap(): com.sun.xml.internal.ws.policy.PolicyMap
                                getSEIModel(): com.sun.xml.internal.ws.api.model.SEIModel
                                getTerminalTube(): com.sun.xml.internal.ws.api.pipe.Tube
                                getWrappedContext(): com.sun.xml.internal.ws.api.pipe.ServerTubeAssemblerContext
                                getWsdlPort(): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
                                isPolicyAvailable(): boolean
                                isSynchronous(): boolean
                                setCodec(arg0: com.sun.xml.internal.ws.api.pipe.Codec): void
                            }
                        }
                    }
                }
            }
        }
    }
}