declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace server {
                        namespace sei {
                            abstract class InvokerTube<T extends com.sun.xml.internal.ws.server.sei.Invoker> extends com.sun.xml.internal.ws.api.pipe.helper.AbstractTubeImpl implements com.sun.xml.internal.ws.server.sei.InvokerSource<T> {
                                protected readonly invoker: T
                                protected constructor(arg0: T)
                                protected constructor(arg0: com.sun.xml.internal.ws.server.sei.InvokerTube<T>, arg1: com.sun.xml.internal.ws.api.pipe.TubeCloner)
                                public getInvoker(arg0: com.sun.xml.internal.ws.api.message.Packet): T
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}