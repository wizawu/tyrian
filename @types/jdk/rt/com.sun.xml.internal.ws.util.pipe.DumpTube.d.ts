declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace util {
                        namespace pipe {
class DumpTube extends com.sun.xml.internal.ws.api.pipe.helper.AbstractFilterTubeImpl {
    public constructor(arg0: java.lang.String | string, arg1: java.io.PrintStream, arg2: com.sun.xml.internal.ws.api.pipe.Tube)
    protected constructor(arg0: com.sun.xml.internal.ws.util.pipe.DumpTube, arg1: com.sun.xml.internal.ws.api.pipe.TubeCloner)
    public processRequest(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.pipe.NextAction
    public processResponse(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.pipe.NextAction
    protected dump(arg0: java.lang.String | string, arg1: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): void
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