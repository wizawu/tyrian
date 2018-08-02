declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace pipe {
                            class NextAction {
                                public constructor()
                                public invoke(arg0: com.sun.xml.internal.ws.api.pipe.Tube, arg1: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): void
                                public invokeAndForget(arg0: com.sun.xml.internal.ws.api.pipe.Tube, arg1: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): void
                                public returnWith(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): void
                                public throwException(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: java.lang.Throwable): void
                                public throwException(arg0: java.lang.Throwable): void
                                public throwExceptionAbortResponse(arg0: java.lang.Throwable): void
                                public abortResponse(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): void
                                public invokeAsync(arg0: com.sun.xml.internal.ws.api.pipe.Tube, arg1: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): void
                                public suspend(): void
                                public suspend(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): void
                                public suspend(arg0: com.sun.xml.internal.ws.api.pipe.Tube): void
                                public suspend(arg0: com.sun.xml.internal.ws.api.pipe.Tube, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): void
                                public getNext(): com.sun.xml.internal.ws.api.pipe.Tube
                                public setNext(arg0: com.sun.xml.internal.ws.api.pipe.Tube): void
                                public getPacket(): com.sun.xml.internal.ws.api.message.Packet
                                public getThrowable(): java.lang.Throwable
                                public toString(): string
                                public getKindString(): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}