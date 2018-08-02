declare namespace java {
    namespace util {
        namespace concurrent {
interface ForkJoinPool$ManagedBlocker {
    block(): boolean
    isReleasable(): boolean
}

        }
    }
}