declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
class AtomicMarkableReference<V> {
    public constructor(arg0: V, arg1: boolean)
    public getReference(): V
    public isMarked(): boolean
    public get(arg0: boolean[]): V
    public weakCompareAndSet(arg0: V, arg1: V, arg2: boolean, arg3: boolean): boolean
    public compareAndSet(arg0: V, arg1: V, arg2: boolean, arg3: boolean): boolean
    public set(arg0: V, arg1: boolean): void
    public attemptMark(arg0: V, arg1: boolean): boolean
    public static class: java.lang.Class<any>
}

            }
        }
    }
}