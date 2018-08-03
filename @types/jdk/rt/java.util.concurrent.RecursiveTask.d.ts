declare namespace java {
    namespace util {
        namespace concurrent {
            abstract class RecursiveTask<V> extends java.util.concurrent.ForkJoinTask<V> {
                public constructor()
                protected abstract compute(): V
                public getRawResult(): V
                protected setRawResult(arg0: V): void
                protected exec(): boolean
                public static class: java.lang.Class<any>
            }
            interface RecursiveTask$$Lambda<V> extends java.util.concurrent.ForkJoinTask<V> {
                (): V
            }
        }
    }
}