declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace client {
                        class ClientSchemaValidationTube extends com.sun.xml.internal.ws.util.pipe.AbstractSchemaValidationTube {
                            public constructor(arg0: com.sun.xml.internal.ws.api.WSBinding, arg1: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg2: com.sun.xml.internal.ws.api.pipe.Tube)
                            protected getValidator(): javax.xml.validation.Validator
                            protected isNoValidation(): boolean
                            protected constructor(arg0: com.sun.xml.internal.ws.client.ClientSchemaValidationTube, arg1: com.sun.xml.internal.ws.api.pipe.TubeCloner)
                            public copy(arg0: com.sun.xml.internal.ws.api.pipe.TubeCloner): com.sun.xml.internal.ws.api.pipe.helper.AbstractTubeImpl
                            public processRequest(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.pipe.NextAction
                            public processResponse(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.pipe.NextAction
                            public copy(arg0: com.sun.xml.internal.ws.api.pipe.TubeCloner): com.sun.xml.internal.ws.api.pipe.Tube
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}