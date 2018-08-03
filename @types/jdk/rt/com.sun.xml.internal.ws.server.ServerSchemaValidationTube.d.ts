declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace server {
                        class ServerSchemaValidationTube extends com.sun.xml.internal.ws.util.pipe.AbstractSchemaValidationTube {
                            public constructor(arg0: com.sun.xml.internal.ws.api.server.WSEndpoint, arg1: com.sun.xml.internal.ws.api.WSBinding, arg2: com.sun.xml.internal.ws.api.model.SEIModel, arg3: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg4: com.sun.xml.internal.ws.api.pipe.Tube)
                            protected getValidator(): javax.xml.validation.Validator
                            protected isNoValidation(): boolean
                            public processRequest(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.api.pipe.NextAction
                            public processResponse(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.api.pipe.NextAction
                            protected constructor(arg0: com.sun.xml.internal.ws.server.ServerSchemaValidationTube, arg1: com.sun.xml.internal.ws.api.pipe.TubeCloner)
                            public copy(arg0: com.sun.xml.internal.ws.api.pipe.TubeCloner): com.sun.xml.internal.ws.api.pipe.helper.AbstractTubeImpl
                            public copy(arg0: com.sun.xml.internal.ws.api.pipe.TubeCloner): com.sun.xml.internal.ws.api.pipe.Tube
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}