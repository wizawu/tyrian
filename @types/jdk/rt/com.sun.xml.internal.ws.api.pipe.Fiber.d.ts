declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace pipe {
                            class Fiber implements java.lang.Runnable , com.sun.xml.internal.ws.api.Cancelable , com.sun.xml.internal.ws.api.ComponentRegistry {
                                public owner: com.sun.xml.internal.ws.api.pipe.Engine
                                public static serializeExecution: boolean
                                public addListener(arg0: com.sun.xml.internal.ws.api.pipe.Fiber$Listener): void
                                public removeListener(arg0: com.sun.xml.internal.ws.api.pipe.Fiber$Listener): void
                                public setDeliverThrowableInPacket(arg0: boolean): void
                                public start(arg0: com.sun.xml.internal.ws.api.pipe.Tube, arg1: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg2: com.sun.xml.internal.ws.api.pipe.Fiber$CompletionCallback): void
                                public start(arg0: com.sun.xml.internal.ws.api.pipe.Tube, arg1: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg2: com.sun.xml.internal.ws.api.pipe.Fiber$CompletionCallback, arg3: boolean): void
                                public resume(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): void
                                public resume(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: boolean): void
                                public resume(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: boolean, arg2: com.sun.xml.internal.ws.api.pipe.Fiber$CompletionCallback): void
                                public resumeAndReturn(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: boolean): void
                                public resume(arg0: java.lang.Throwable): void
                                public resume(arg0: java.lang.Throwable, arg1: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): void
                                public resume(arg0: java.lang.Throwable, arg1: boolean): void
                                public resume(arg0: java.lang.Throwable, arg1: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg2: boolean): void
                                public cancel(arg0: boolean): void
                                public addInterceptor(arg0: com.sun.xml.internal.ws.api.pipe.FiberContextSwitchInterceptor | com.sun.xml.internal.ws.api.pipe.FiberContextSwitchInterceptor$$Lambda): void
                                public removeInterceptor(arg0: com.sun.xml.internal.ws.api.pipe.FiberContextSwitchInterceptor | com.sun.xml.internal.ws.api.pipe.FiberContextSwitchInterceptor$$Lambda): boolean
                                public getContextClassLoader(): java.lang.ClassLoader
                                public setContextClassLoader(arg0: java.lang.ClassLoader): java.lang.ClassLoader
                                public run(): void
                                public runSync(arg0: com.sun.xml.internal.ws.api.pipe.Tube, arg1: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.message.Packet
                                public resetCont(arg0: com.sun.xml.internal.ws.api.pipe.Tube[], arg1: int): void
                                public toString(): string
                                public getPacket(): com.sun.xml.internal.ws.api.message.Packet
                                public getCompletionCallback(): com.sun.xml.internal.ws.api.pipe.Fiber$CompletionCallback
                                public setCompletionCallback(arg0: com.sun.xml.internal.ws.api.pipe.Fiber$CompletionCallback): void
                                public static isSynchronous(): boolean
                                public isStartedSync(): boolean
                                public static current(): com.sun.xml.internal.ws.api.pipe.Fiber
                                public static getCurrentIfSet(): com.sun.xml.internal.ws.api.pipe.Fiber
                                public getSPI<S>(arg0: java.lang.Class<S>): S
                                public getComponents<S>(): java.util.Set<com.sun.xml.internal.ws.api.Component>
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}