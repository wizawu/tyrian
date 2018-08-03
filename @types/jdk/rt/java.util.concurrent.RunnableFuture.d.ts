declare namespace java {
    namespace util {
        namespace concurrent {
            interface RunnableFuture<V> extends java.lang.Runnable , java.util.concurrent.Future<V> {
                run(): void
            }
            interface RunnableFuture$$Lambda<V> extends java.lang.Runnable , java.util.concurrent.Future<V> {
                (): void
            }
        }
    }
}