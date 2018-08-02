declare namespace java {
    namespace util {
        namespace stream {
abstract class AbstractTask<P_IN, P_OUT, R, K extends java.util.stream.AbstractTask<P_IN, P_OUT, R, K>> extends java.util.concurrent.CountedCompleter<R> {
    protected helper: java.util.stream.PipelineHelper<P_OUT>
    protected spliterator: java.util.Spliterator<P_IN>
    protected targetSize: long
    protected leftChild: K
    protected rightChild: K
    protected constructor(arg0: java.util.stream.PipelineHelper<P_OUT>, arg1: java.util.Spliterator<P_IN>)
    protected constructor(arg0: K, arg1: java.util.Spliterator<P_IN>)
    protected makeChild(arg0: java.util.Spliterator<P_IN>): K
    protected doLeaf(): R
    public static suggestTargetSize(arg0: long): long
    protected getTargetSize(arg0: long): long
    public getRawResult(): R
    protected setRawResult(arg0: R): void
    protected getLocalResult(): R
    protected setLocalResult(arg0: R): void
    protected isLeaf(): boolean
    protected isRoot(): boolean
    protected getParent(): K
    public compute(): void
    public onCompletion(arg0: java.util.concurrent.CountedCompleter<any>): void
    protected isLeftmostNode(): boolean
    public static class: java.lang.Class<any>
}

        }
    }
}