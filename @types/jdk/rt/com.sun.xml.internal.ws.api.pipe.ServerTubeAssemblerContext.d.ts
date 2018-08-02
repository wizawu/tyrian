declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace pipe {
                            class ServerTubeAssemblerContext {
                                public constructor(arg0: com.sun.xml.internal.ws.api.model.SEIModel, arg1: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg2: com.sun.xml.internal.ws.api.server.WSEndpoint, arg3: com.sun.xml.internal.ws.api.pipe.Tube, arg4: boolean)
                                public getSEIModel(): com.sun.xml.internal.ws.api.model.SEIModel
                                public getWsdlModel(): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
                                public getEndpoint(): com.sun.xml.internal.ws.api.server.WSEndpoint<any>
                                public getTerminalTube(): com.sun.xml.internal.ws.api.pipe.Tube
                                public isSynchronous(): boolean
                                public createServerMUTube(arg0: com.sun.xml.internal.ws.api.pipe.Tube): com.sun.xml.internal.ws.api.pipe.Tube
                                public createHandlerTube(arg0: com.sun.xml.internal.ws.api.pipe.Tube): com.sun.xml.internal.ws.api.pipe.Tube
                                public createMonitoringTube(arg0: com.sun.xml.internal.ws.api.pipe.Tube): com.sun.xml.internal.ws.api.pipe.Tube
                                public createSecurityTube(arg0: com.sun.xml.internal.ws.api.pipe.Tube): com.sun.xml.internal.ws.api.pipe.Tube
                                public createDumpTube(arg0: java.lang.String | string, arg1: java.io.PrintStream, arg2: com.sun.xml.internal.ws.api.pipe.Tube): com.sun.xml.internal.ws.api.pipe.Tube
                                public createValidationTube(arg0: com.sun.xml.internal.ws.api.pipe.Tube): com.sun.xml.internal.ws.api.pipe.Tube
                                public createWsaTube(arg0: com.sun.xml.internal.ws.api.pipe.Tube): com.sun.xml.internal.ws.api.pipe.Tube
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