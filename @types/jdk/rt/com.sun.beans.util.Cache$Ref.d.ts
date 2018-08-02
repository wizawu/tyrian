declare namespace com {
    namespace sun {
        namespace beans {
            namespace util {
interface Cache$Ref<T> {
    getOwner(): java.lang.Object
    getReferent(): T
    isStale(): boolean
    removeOwner(): void
}

            }
        }
    }
}