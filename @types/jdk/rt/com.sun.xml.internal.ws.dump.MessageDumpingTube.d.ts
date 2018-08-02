declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace dump {
                        class MessageDumpingTube extends com.sun.xml.internal.ws.api.pipe.helper.AbstractFilterTubeImpl {
                            public copy(arg0: com.sun.xml.internal.ws.api.pipe.TubeCloner): com.sun.xml.internal.ws.dump.MessageDumpingTube
                            public processRequest(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.pipe.NextAction
                            public processResponse(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.pipe.NextAction
                            public processException(arg0: java.lang.Throwable): com.sun.xml.internal.ws.api.pipe.NextAction
                            protected dump(arg0: com.sun.xml.internal.ws.dump.MessageDumper$MessageType, arg1: java.lang.String | string, arg2: java.lang.String | string): void
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