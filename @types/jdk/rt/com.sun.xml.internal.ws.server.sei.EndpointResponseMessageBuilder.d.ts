declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace server {
                        namespace sei {
                            abstract class EndpointResponseMessageBuilder {
                                public static readonly EMPTY_SOAP11: com.sun.xml.internal.ws.server.sei.EndpointResponseMessageBuilder
                                public static readonly EMPTY_SOAP12: com.sun.xml.internal.ws.server.sei.EndpointResponseMessageBuilder
                                public constructor()
                                public abstract createMessage(arg0: java.lang.Object[], arg1: java.lang.Object): com.sun.xml.internal.ws.api.message.Message
                                public static class: java.lang.Class<any>
                            }
                            interface EndpointResponseMessageBuilder$$Lambda {
                                (arg0: java.lang.Object[], arg1: java.lang.Object): com.sun.xml.internal.ws.api.message.Message
                            }
                        }
                    }
                }
            }
        }
    }
}