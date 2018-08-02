declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace pipe {
                            namespace helper {
abstract class AbstractFilterTubeImpl extends com.sun.xml.internal.ws.api.pipe.helper.AbstractTubeImpl {
    protected next: com.sun.xml.internal.ws.api.pipe.Tube
    protected constructor(arg0: com.sun.xml.internal.ws.api.pipe.Tube)
    protected constructor(arg0: com.sun.xml.internal.ws.api.pipe.helper.AbstractFilterTubeImpl, arg1: com.sun.xml.internal.ws.api.pipe.TubeCloner)
    public processRequest(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.pipe.NextAction
    public processResponse(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.pipe.NextAction
    public processException(arg0: java.lang.Throwable): com.sun.xml.internal.ws.api.pipe.NextAction
    public preDestroy(): void
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