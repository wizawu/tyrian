declare namespace java {
    namespace lang {
class ThreadLocal<T> {
    protected initialValue(): T
    public static withInitial<S>(arg0: java.util.function$.Supplier<S> | java.util.function$.Supplier$$Lambda<S>): java.lang.ThreadLocal<S>
    public constructor()
    public get(): T
    public set(arg0: T): void
    public remove(): void
    public static class: java.lang.Class<any>
}

    }
}