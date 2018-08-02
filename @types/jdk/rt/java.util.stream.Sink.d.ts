declare namespace java {
    namespace util {
        namespace stream {
interface Sink<T> extends java.util.function$.Consumer<T> {
    begin(arg0: long): void
    end(): void
    cancellationRequested(): boolean
    accept(arg0: int): void
    accept(arg0: long): void
    accept(arg0: double): void
}

        }
    }
}