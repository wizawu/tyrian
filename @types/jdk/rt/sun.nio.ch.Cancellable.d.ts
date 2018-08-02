declare namespace sun {
    namespace nio {
        namespace ch {
            interface Cancellable {
                onCancel(arg0: sun.nio.ch.PendingFuture<any, any>): void
            }
            interface Cancellable$$Lambda {
                (arg0: sun.nio.ch.PendingFuture<any, any>): void
            }
        }
    }
}