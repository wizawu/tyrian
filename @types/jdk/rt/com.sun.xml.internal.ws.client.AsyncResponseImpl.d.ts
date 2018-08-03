declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace client {
                        class AsyncResponseImpl<T> extends java.util.concurrent.FutureTask<T> implements javax.xml.ws.Response<T> , com.sun.xml.internal.ws.client.ResponseContextReceiver {
                            public constructor(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: javax.xml.ws.AsyncHandler<T> | javax.xml.ws.AsyncHandler$$Lambda<T>)
                            public run(): void
                            public getContext(): com.sun.xml.internal.ws.client.ResponseContext
                            public setResponseContext(arg0: com.sun.xml.internal.ws.client.ResponseContext): void
                            public set(arg0: T, arg1: java.lang.Throwable): void
                            public setCancelable(arg0: com.sun.xml.internal.ws.api.Cancelable | com.sun.xml.internal.ws.api.Cancelable$$Lambda): void
                            public cancel(arg0: boolean): boolean
                            public getContext(): java.util.Map
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}