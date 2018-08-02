declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace assembler {
                        class DefaultServerTubelineAssemblyContext extends com.sun.xml.internal.ws.assembler.TubelineAssemblyContextImpl implements com.sun.xml.internal.ws.assembler.dev.ServerTubelineAssemblyContext {
                            public constructor(arg0: com.sun.xml.internal.ws.api.pipe.ServerTubeAssemblerContext)
                            public getPolicyMap(): com.sun.xml.internal.ws.policy.PolicyMap
                            public isPolicyAvailable(): boolean
                            public getSEIModel(): com.sun.xml.internal.ws.api.model.SEIModel
                            public getWsdlPort(): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
                            public getEndpoint(): com.sun.xml.internal.ws.api.server.WSEndpoint
                            public getTerminalTube(): com.sun.xml.internal.ws.api.pipe.Tube
                            public isSynchronous(): boolean
                            public getCodec(): com.sun.xml.internal.ws.api.pipe.Codec
                            public setCodec(arg0: com.sun.xml.internal.ws.api.pipe.Codec): void
                            public getWrappedContext(): com.sun.xml.internal.ws.api.pipe.ServerTubeAssemblerContext
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}