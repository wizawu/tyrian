declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace pipe {
                            interface Fiber$CompletionCallback {
                                onCompletion(arg0: com.sun.xml.internal.ws.api.message.Packet): void
                                onCompletion(arg0: java.lang.Throwable): void
                            }
                        }
                    }
                }
            }
        }
    }
}