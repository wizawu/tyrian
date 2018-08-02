declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace pipe {
                            namespace helper {
                                abstract class AbstractFilterPipeImpl extends com.sun.xml.internal.ws.api.pipe.helper.AbstractPipeImpl {
                                    protected next: com.sun.xml.internal.ws.api.pipe.Pipe
                                    protected constructor(arg0: com.sun.xml.internal.ws.api.pipe.Pipe)
                                    protected constructor(arg0: com.sun.xml.internal.ws.api.pipe.helper.AbstractFilterPipeImpl, arg1: com.sun.xml.internal.ws.api.pipe.PipeCloner)
                                    public process(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.message.Packet
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