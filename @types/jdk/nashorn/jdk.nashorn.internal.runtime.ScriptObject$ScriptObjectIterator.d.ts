declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
abstract class ScriptObject$ScriptObjectIterator<T> implements java.util.Iterator<T> {
    protected values: T[]
    protected object: jdk.nashorn.internal.runtime.ScriptObject
    protected init(): void
    public hasNext(): boolean
    public next(): T
    public remove(): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}