declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace dump {
                        class LoggingDumpTube extends com.sun.xml.internal.ws.api.pipe.helper.AbstractFilterTubeImpl {
                            public constructor(arg0: java.util.logging.Level, arg1: com.sun.xml.internal.ws.dump.LoggingDumpTube$Position, arg2: com.sun.xml.internal.ws.api.pipe.Tube)
                            public setLoggedTubeName(arg0: java.lang.String | string): void
                            public copy(arg0: com.sun.xml.internal.ws.api.pipe.TubeCloner): com.sun.xml.internal.ws.dump.LoggingDumpTube
                            public processRequest(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.api.pipe.NextAction
                            public processResponse(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.api.pipe.NextAction
                            public processException(arg0: java.lang.Throwable): com.sun.xml.internal.ws.api.pipe.NextAction
                            public preDestroy(): void
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