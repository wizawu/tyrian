declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace pipe {
                            namespace helper {
                                class PipeAdapter extends com.sun.xml.internal.ws.api.pipe.helper.AbstractTubeImpl {
                                    public static adapt(arg0: com.sun.xml.internal.ws.api.pipe.Pipe): com.sun.xml.internal.ws.api.pipe.Tube
                                    public static adapt(arg0: com.sun.xml.internal.ws.api.pipe.Tube): com.sun.xml.internal.ws.api.pipe.Pipe
                                    public processRequest(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.api.pipe.NextAction
                                    public processResponse(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.api.pipe.NextAction
                                    public processException(arg0: java.lang.Throwable): com.sun.xml.internal.ws.api.pipe.NextAction
                                    public preDestroy(): void
                                    public copy(arg0: com.sun.xml.internal.ws.api.pipe.TubeCloner): com.sun.xml.internal.ws.api.pipe.helper.PipeAdapter
                                    public toString(): string
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