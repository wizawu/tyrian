declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace pipe {
class ServerPipeAssemblerContext extends com.sun.xml.internal.ws.api.pipe.ServerTubeAssemblerContext {
    public constructor(arg0: com.sun.xml.internal.ws.api.model.SEIModel, arg1: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg2: com.sun.xml.internal.ws.api.server.WSEndpoint, arg3: com.sun.xml.internal.ws.api.pipe.Tube, arg4: boolean)
    public createServerMUPipe(arg0: com.sun.xml.internal.ws.api.pipe.Pipe): com.sun.xml.internal.ws.api.pipe.Pipe
    public createDumpPipe(arg0: java.lang.String | string, arg1: java.io.PrintStream, arg2: com.sun.xml.internal.ws.api.pipe.Pipe): com.sun.xml.internal.ws.api.pipe.Pipe
    public createMonitoringPipe(arg0: com.sun.xml.internal.ws.api.pipe.Pipe): com.sun.xml.internal.ws.api.pipe.Pipe
    public createSecurityPipe(arg0: com.sun.xml.internal.ws.api.pipe.Pipe): com.sun.xml.internal.ws.api.pipe.Pipe
    public createValidationPipe(arg0: com.sun.xml.internal.ws.api.pipe.Pipe): com.sun.xml.internal.ws.api.pipe.Pipe
    public createHandlerPipe(arg0: com.sun.xml.internal.ws.api.pipe.Pipe): com.sun.xml.internal.ws.api.pipe.Pipe
    public getTerminalPipe(): com.sun.xml.internal.ws.api.pipe.Pipe
    public createWsaPipe(arg0: com.sun.xml.internal.ws.api.pipe.Pipe): com.sun.xml.internal.ws.api.pipe.Pipe
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}