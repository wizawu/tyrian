declare namespace java {
    namespace util {
        namespace concurrent {
            abstract class CompletableFuture$Completion extends java.util.concurrent.ForkJoinTask<java.lang.Void> implements java.lang.Runnable , java.util.concurrent.CompletableFuture$AsynchronousCompletionTask {
                public run(): void
                public exec(): boolean
                public getRawResult(): java.lang.Void
                public setRawResult(arg0: java.lang.Void): void
                public setRawResult(arg0: java.lang.Object): void
                public getRawResult(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}