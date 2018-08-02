declare namespace com {
    namespace sun {
        namespace istack {
            namespace internal {
interface Pool<T> {
    take(): T
    recycle(arg0: T): void
}

            }
        }
    }
}