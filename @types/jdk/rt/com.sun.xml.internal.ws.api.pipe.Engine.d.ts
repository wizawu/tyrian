declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace pipe {
                            class Engine {
                                public id: string
                                public constructor(arg0: java.lang.String | string, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda)
                                public constructor(arg0: java.lang.String | string, arg1: com.sun.xml.internal.ws.api.server.Container, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda)
                                public constructor(arg0: java.lang.String | string)
                                public constructor(arg0: java.lang.String | string, arg1: com.sun.xml.internal.ws.api.server.Container)
                                public setExecutor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): void
                                public createFiber(): com.sun.xml.internal.ws.api.pipe.Fiber
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}