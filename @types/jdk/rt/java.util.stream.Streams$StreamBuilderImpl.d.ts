declare namespace java {
    namespace util {
        namespace stream {
class Streams$StreamBuilderImpl<T> extends java.util.stream.Streams$AbstractStreamBuilderImpl<T, java.util.Spliterator<T>> implements java.util.stream.Stream$Builder<T> {
    public accept(arg0: T): void
    public add(arg0: T): java.util.stream.Stream$Builder<T>
    public build(): java.util.stream.Stream<T>
    public tryAdvance(arg0: java.util.function$.Consumer$$TypeScript<T>): boolean
    public forEachRemaining(arg0: java.util.function$.Consumer$$TypeScript<T>): void
    public static class: java.lang.Class<any>
}

        }
    }
}