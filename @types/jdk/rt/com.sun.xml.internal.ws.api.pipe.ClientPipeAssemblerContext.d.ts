declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace pipe {
class ClientPipeAssemblerContext extends com.sun.xml.internal.ws.api.pipe.ClientTubeAssemblerContext {
    public constructor(arg0: com.sun.xml.internal.ws.api.EndpointAddress, arg1: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg2: com.sun.xml.internal.ws.api.WSService, arg3: com.sun.xml.internal.ws.api.WSBinding)
    public constructor(arg0: com.sun.xml.internal.ws.api.EndpointAddress, arg1: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg2: com.sun.xml.internal.ws.api.WSService, arg3: com.sun.xml.internal.ws.api.WSBinding, arg4: com.sun.xml.internal.ws.api.server.Container)
    public createDumpPipe(arg0: java.lang.String | string, arg1: java.io.PrintStream, arg2: com.sun.xml.internal.ws.api.pipe.Pipe): com.sun.xml.internal.ws.api.pipe.Pipe
    public createWsaPipe(arg0: com.sun.xml.internal.ws.api.pipe.Pipe): com.sun.xml.internal.ws.api.pipe.Pipe
    public createClientMUPipe(arg0: com.sun.xml.internal.ws.api.pipe.Pipe): com.sun.xml.internal.ws.api.pipe.Pipe
    public createValidationPipe(arg0: com.sun.xml.internal.ws.api.pipe.Pipe): com.sun.xml.internal.ws.api.pipe.Pipe
    public createHandlerPipe(arg0: com.sun.xml.internal.ws.api.pipe.Pipe): com.sun.xml.internal.ws.api.pipe.Pipe
    public createSecurityPipe(arg0: com.sun.xml.internal.ws.api.pipe.Pipe): com.sun.xml.internal.ws.api.pipe.Pipe
    public createTransportPipe(): com.sun.xml.internal.ws.api.pipe.Pipe
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}