declare namespace java {
    namespace util {
        namespace zip {
            class Deflater {
                public static readonly DEFLATED: int
                public static readonly NO_COMPRESSION: int
                public static readonly BEST_SPEED: int
                public static readonly BEST_COMPRESSION: int
                public static readonly DEFAULT_COMPRESSION: int
                public static readonly FILTERED: int
                public static readonly HUFFMAN_ONLY: int
                public static readonly DEFAULT_STRATEGY: int
                public static readonly NO_FLUSH: int
                public static readonly SYNC_FLUSH: int
                public static readonly FULL_FLUSH: int
                public constructor(arg0: int, arg1: boolean)
                public constructor(arg0: int)
                public constructor()
                public setInput(arg0: byte[], arg1: int, arg2: int): void
                public setInput(arg0: byte[]): void
                public setDictionary(arg0: byte[], arg1: int, arg2: int): void
                public setDictionary(arg0: byte[]): void
                public setStrategy(arg0: int): void
                public setLevel(arg0: int): void
                public needsInput(): boolean
                public finish(): void
                public finished(): boolean
                public deflate(arg0: byte[], arg1: int, arg2: int): int
                public deflate(arg0: byte[]): int
                public deflate(arg0: byte[], arg1: int, arg2: int, arg3: int): int
                public getAdler(): int
                public getTotalIn(): int
                public getBytesRead(): long
                public getTotalOut(): int
                public getBytesWritten(): long
                public reset(): void
                public end(): void
                protected finalize(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}