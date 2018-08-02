declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace server {
                        namespace provider {
                            abstract class ProviderArgumentsBuilder<T> {
                                public constructor()
                                protected getResponseMessage(arg0: java.lang.Exception): com.sun.xml.internal.ws.api.message.Message
                                protected getResponse(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: java.lang.Exception, arg2: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg3: com.sun.xml.internal.ws.api.WSBinding): com.sun.xml.internal.ws.api.message.Packet
                                public getParameter(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): T
                                protected getResponseMessage(arg0: T): com.sun.xml.internal.ws.api.message.Message
                                protected getResponse(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: T, arg2: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg3: com.sun.xml.internal.ws.api.WSBinding): com.sun.xml.internal.ws.api.message.Packet
                                public static create(arg0: com.sun.xml.internal.ws.server.provider.ProviderEndpointModel, arg1: com.sun.xml.internal.ws.api.WSBinding): com.sun.xml.internal.ws.server.provider.ProviderArgumentsBuilder<any>
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}