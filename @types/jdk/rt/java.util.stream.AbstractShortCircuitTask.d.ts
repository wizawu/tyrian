declare namespace java {
    namespace util {
        namespace stream {
            abstract class AbstractShortCircuitTask<P_IN, P_OUT, R, K extends java.util.stream.AbstractShortCircuitTask<P_IN, P_OUT, R, K>> extends java.util.stream.AbstractTask<P_IN, P_OUT, R, K> {
                protected sharedResult: java.util.concurrent.atomic.AtomicReference<R>
                protected canceled: boolean
                protected constructor(arg0: java.util.stream.PipelineHelper<P_OUT>, arg1: java.util.Spliterator<P_IN>)
                protected constructor(arg0: K, arg1: java.util.Spliterator<P_IN>)
                protected getEmptyResult(): R
                public compute(): void
                protected shortCircuit(arg0: R): void
                protected setLocalResult(arg0: R): void
                public getRawResult(): R
                public getLocalResult(): R
                protected cancel(): void
                protected taskCanceled(): boolean
                protected cancelLaterNodes(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}