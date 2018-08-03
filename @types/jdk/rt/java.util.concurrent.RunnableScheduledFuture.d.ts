declare namespace java {
    namespace util {
        namespace concurrent {
            interface RunnableScheduledFuture<V> extends java.util.concurrent.RunnableFuture<V> , java.util.concurrent.ScheduledFuture<V> {
                isPeriodic(): boolean
            }
        }
    }
}