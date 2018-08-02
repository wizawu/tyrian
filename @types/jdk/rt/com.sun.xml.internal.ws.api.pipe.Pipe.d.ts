declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace pipe {
                            interface Pipe {
                                process(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.message.Packet
                                preDestroy(): void
                                copy(arg0: com.sun.xml.internal.ws.api.pipe.PipeCloner): com.sun.xml.internal.ws.api.pipe.Pipe
                            }
                        }
                    }
                }
            }
        }
    }
}