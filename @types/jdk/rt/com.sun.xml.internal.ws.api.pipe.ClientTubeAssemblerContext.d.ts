declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace pipe {
                            class ClientTubeAssemblerContext {
                                public constructor(arg0: com.sun.xml.internal.ws.api.EndpointAddress, arg1: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg2: com.sun.xml.internal.ws.api.WSService, arg3: com.sun.xml.internal.ws.api.WSBinding)
                                public constructor(arg0: com.sun.xml.internal.ws.api.EndpointAddress, arg1: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg2: com.sun.xml.internal.ws.api.WSService, arg3: com.sun.xml.internal.ws.api.WSBinding, arg4: com.sun.xml.internal.ws.api.server.Container)
                                public constructor(arg0: com.sun.xml.internal.ws.api.EndpointAddress, arg1: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg2: com.sun.xml.internal.ws.api.WSService, arg3: com.sun.xml.internal.ws.api.WSBinding, arg4: com.sun.xml.internal.ws.api.server.Container, arg5: com.sun.xml.internal.ws.api.pipe.Codec)
                                public constructor(arg0: com.sun.xml.internal.ws.api.EndpointAddress, arg1: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg2: com.sun.xml.internal.ws.api.WSService, arg3: com.sun.xml.internal.ws.api.WSBinding, arg4: com.sun.xml.internal.ws.api.server.Container, arg5: com.sun.xml.internal.ws.api.pipe.Codec, arg6: com.sun.xml.internal.ws.api.model.SEIModel, arg7: java.lang.Class)
                                public constructor(arg0: com.sun.xml.internal.ws.api.EndpointAddress, arg1: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg2: com.sun.xml.internal.ws.developer.WSBindingProvider, arg3: com.sun.xml.internal.ws.api.WSBinding, arg4: com.sun.xml.internal.ws.api.server.Container, arg5: com.sun.xml.internal.ws.api.pipe.Codec, arg6: com.sun.xml.internal.ws.api.model.SEIModel, arg7: java.lang.Class)
                                public getAddress(): com.sun.xml.internal.ws.api.EndpointAddress
                                public getWsdlModel(): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
                                public getService(): com.sun.xml.internal.ws.api.WSService
                                public getPortInfo(): com.sun.xml.internal.ws.api.client.WSPortInfo
                                public getBindingProvider(): com.sun.xml.internal.ws.developer.WSBindingProvider
                                public getBinding(): com.sun.xml.internal.ws.api.WSBinding
                                public getSEIModel(): com.sun.xml.internal.ws.api.model.SEIModel
                                public getSEI(): java.lang.Class
                                public getContainer(): com.sun.xml.internal.ws.api.server.Container
                                public createDumpTube(arg0: java.lang.String | string, arg1: java.io.PrintStream, arg2: com.sun.xml.internal.ws.api.pipe.Tube): com.sun.xml.internal.ws.api.pipe.Tube
                                public createSecurityTube(arg0: com.sun.xml.internal.ws.api.pipe.Tube): com.sun.xml.internal.ws.api.pipe.Tube
                                public createWsaTube(arg0: com.sun.xml.internal.ws.api.pipe.Tube): com.sun.xml.internal.ws.api.pipe.Tube
                                public createHandlerTube(arg0: com.sun.xml.internal.ws.api.pipe.Tube): com.sun.xml.internal.ws.api.pipe.Tube
                                public createClientMUTube(arg0: com.sun.xml.internal.ws.api.pipe.Tube): com.sun.xml.internal.ws.api.pipe.Tube
                                public createValidationTube(arg0: com.sun.xml.internal.ws.api.pipe.Tube): com.sun.xml.internal.ws.api.pipe.Tube
                                public createTransportTube(): com.sun.xml.internal.ws.api.pipe.Tube
                                public getCodec(): com.sun.xml.internal.ws.api.pipe.Codec
                                public setCodec(arg0: com.sun.xml.internal.ws.api.pipe.Codec): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}