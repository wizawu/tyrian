declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace pipe {
                            namespace helper {
                                abstract class AbstractTubeImpl implements com.sun.xml.internal.ws.api.pipe.Tube , com.sun.xml.internal.ws.api.pipe.Pipe {
                                    protected constructor()
                                    protected constructor(arg0: com.sun.xml.internal.ws.api.pipe.helper.AbstractTubeImpl, arg1: com.sun.xml.internal.ws.api.pipe.TubeCloner)
                                    protected doInvoke(arg0: com.sun.xml.internal.ws.api.pipe.Tube, arg1: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.pipe.NextAction
                                    protected doInvokeAndForget(arg0: com.sun.xml.internal.ws.api.pipe.Tube, arg1: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.pipe.NextAction
                                    protected doReturnWith(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.pipe.NextAction
                                    protected doThrow(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: java.lang.Throwable): com.sun.xml.internal.ws.api.pipe.NextAction
                                    protected doSuspend(): com.sun.xml.internal.ws.api.pipe.NextAction
                                    protected doSuspend(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): com.sun.xml.internal.ws.api.pipe.NextAction
                                    protected doSuspend(arg0: com.sun.xml.internal.ws.api.pipe.Tube): com.sun.xml.internal.ws.api.pipe.NextAction
                                    protected doSuspend(arg0: com.sun.xml.internal.ws.api.pipe.Tube, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): com.sun.xml.internal.ws.api.pipe.NextAction
                                    protected doThrow(arg0: java.lang.Throwable): com.sun.xml.internal.ws.api.pipe.NextAction
                                    public process(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.message.Packet
                                    public copy(arg0: com.sun.xml.internal.ws.api.pipe.PipeCloner): com.sun.xml.internal.ws.api.pipe.helper.AbstractTubeImpl
                                    public copy(arg0: com.sun.xml.internal.ws.api.pipe.TubeCloner): com.sun.xml.internal.ws.api.pipe.helper.AbstractTubeImpl
                                    public copy(arg0: com.sun.xml.internal.ws.api.pipe.TubeCloner): com.sun.xml.internal.ws.api.pipe.Tube
                                    public copy(arg0: com.sun.xml.internal.ws.api.pipe.PipeCloner): com.sun.xml.internal.ws.api.pipe.Pipe
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