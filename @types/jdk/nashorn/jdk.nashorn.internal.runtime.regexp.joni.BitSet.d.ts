declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
                        class BitSet {
                            public static readonly SINGLE_BYTE_SIZE: int
                            public constructor()
                            public toString(): string
                            public at(arg0: int): boolean
                            public set(arg0: int): void
                            public clear(arg0: int): void
                            public clear(): void
                            public isEmpty(): boolean
                            public setRange(arg0: int, arg1: int): void
                            public invert(): void
                            public invertTo(arg0: jdk.nashorn.internal.runtime.regexp.joni.BitSet): void
                            public and(arg0: jdk.nashorn.internal.runtime.regexp.joni.BitSet): void
                            public or(arg0: jdk.nashorn.internal.runtime.regexp.joni.BitSet): void
                            public copy(arg0: jdk.nashorn.internal.runtime.regexp.joni.BitSet): void
                            public numOn(): int
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}