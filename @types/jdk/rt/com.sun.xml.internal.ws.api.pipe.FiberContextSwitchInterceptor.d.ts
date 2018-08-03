declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace pipe {
                            interface FiberContextSwitchInterceptor {
                                execute<R, P>(arg0: com.sun.xml.internal.ws.api.pipe.Fiber, arg1: P, arg2: com.sun.xml.internal.ws.api.pipe.FiberContextSwitchInterceptor$Work<R, P> | com.sun.xml.internal.ws.api.pipe.FiberContextSwitchInterceptor$Work$$Lambda<R, P>): R
                            }
                            interface FiberContextSwitchInterceptor$$Lambda {
                                (arg0: com.sun.xml.internal.ws.api.pipe.Fiber, arg1: P, arg2: com.sun.xml.internal.ws.api.pipe.FiberContextSwitchInterceptor$Work<R, P> | com.sun.xml.internal.ws.api.pipe.FiberContextSwitchInterceptor$Work$$Lambda<R, P>): R
                            }
                        }
                    }
                }
            }
        }
    }
}