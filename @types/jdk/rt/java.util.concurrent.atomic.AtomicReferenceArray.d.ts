declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                class AtomicReferenceArray<E> implements java.io.Serializable {
                    public constructor(arg0: int)
                    public constructor(arg0: E[])
                    public length(): int
                    public get(arg0: int): E
                    public set(arg0: int, arg1: E): void
                    public lazySet(arg0: int, arg1: E): void
                    public getAndSet(arg0: int, arg1: E): E
                    public compareAndSet(arg0: int, arg1: E, arg2: E): boolean
                    public weakCompareAndSet(arg0: int, arg1: E, arg2: E): boolean
                    public getAndUpdate(arg0: int, arg1: java.util.function$.UnaryOperator<E> | java.util.function$.UnaryOperator$$Lambda<E>): E
                    public updateAndGet(arg0: int, arg1: java.util.function$.UnaryOperator<E> | java.util.function$.UnaryOperator$$Lambda<E>): E
                    public getAndAccumulate(arg0: int, arg1: E, arg2: java.util.function$.BinaryOperator<E>): E
                    public accumulateAndGet(arg0: int, arg1: E, arg2: java.util.function$.BinaryOperator<E>): E
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}