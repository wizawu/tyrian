declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace client {
                        abstract class AsyncInvoker implements java.lang.Runnable {
                            protected responseImpl: com.sun.xml.internal.ws.client.AsyncResponseImpl
                            protected nonNullAsyncHandlerGiven: boolean
                            public constructor()
                            public setReceiver(arg0: com.sun.xml.internal.ws.client.AsyncResponseImpl): void
                            public getResponseImpl(): com.sun.xml.internal.ws.client.AsyncResponseImpl
                            public setResponseImpl(arg0: com.sun.xml.internal.ws.client.AsyncResponseImpl): void
                            public isNonNullAsyncHandlerGiven(): boolean
                            public setNonNullAsyncHandlerGiven(arg0: boolean): void
                            public run(): void
                            public abstract do_run(): void
                            public static class: java.lang.Class<any>
                        }
                        interface AsyncInvoker$$Lambda implements java.lang.Runnable {
                            (): void
                        }
                    }
                }
            }
        }
    }
}