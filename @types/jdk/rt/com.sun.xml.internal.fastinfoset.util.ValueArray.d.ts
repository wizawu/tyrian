declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace util {
                        abstract class ValueArray {
                            public static readonly DEFAULT_CAPACITY: int
                            public static readonly MAXIMUM_CAPACITY: int
                            protected _size: int
                            protected _readOnlyArraySize: int
                            protected _maximumCapacity: int
                            public constructor()
                            public getSize(): int
                            public getMaximumCapacity(): int
                            public setMaximumCapacity(arg0: int): void
                            public abstract setReadOnlyArray(arg0: com.sun.xml.internal.fastinfoset.util.ValueArray, arg1: boolean): void
                            public abstract clear(): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}