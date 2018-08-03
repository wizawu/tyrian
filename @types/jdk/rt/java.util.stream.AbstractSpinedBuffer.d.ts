declare namespace java {
    namespace util {
        namespace stream {
            abstract class AbstractSpinedBuffer {
                public static readonly MIN_CHUNK_POWER: int
                public static readonly MIN_CHUNK_SIZE: int
                public static readonly MAX_CHUNK_POWER: int
                public static readonly MIN_SPINE_SIZE: int
                protected readonly initialChunkPower: int
                protected elementIndex: int
                protected spineIndex: int
                protected priorElementCount: long[]
                protected constructor()
                protected constructor(arg0: int)
                public isEmpty(): boolean
                public count(): long
                protected chunkSize(arg0: int): int
                public abstract clear(): void
                public static class: java.lang.Class<any>
            }
            interface AbstractSpinedBuffer$$Lambda {
                (): void
            }
        }
    }
}