declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace server {
                        namespace sei {
                            interface InvokerSource<T extends com.sun.xml.internal.ws.server.sei.Invoker> {
                                getInvoker(arg0: com.sun.xml.internal.ws.api.message.Packet): T
                            }
                        }
                    }
                }
            }
        }
    }
}