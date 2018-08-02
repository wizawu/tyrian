declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace transport {
                        namespace http {
                            namespace client {
                                class HttpTransportPipe extends com.sun.xml.internal.ws.api.pipe.helper.AbstractTubeImpl {
                                    public static dump: boolean
                                    public constructor(arg0: com.sun.xml.internal.ws.api.pipe.Codec, arg1: com.sun.xml.internal.ws.api.WSBinding)
                                    public processException(arg0: java.lang.Throwable): com.sun.xml.internal.ws.api.pipe.NextAction
                                    public processRequest(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.pipe.NextAction
                                    public processResponse(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.pipe.NextAction
                                    protected getTransport(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: java.util.Map<java.lang.String, java.util.List<java.lang.String>>): com.sun.xml.internal.ws.transport.http.client.HttpClientTransport
                                    public process(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.message.Packet
                                    public preDestroy(): void
                                    public copy(arg0: com.sun.xml.internal.ws.api.pipe.TubeCloner): com.sun.xml.internal.ws.transport.http.client.HttpTransportPipe
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
    }
}