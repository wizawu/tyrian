declare namespace java {
    namespace util {
        namespace stream {
            abstract class AbstractSpinedBuffer {
                public static MIN_CHUNK_POWER: int
                public static MIN_CHUNK_SIZE: int
                public static MAX_CHUNK_POWER: int
                public static MIN_SPINE_SIZE: int
                protected initialChunkPower: int
                protected elementIndex: int
                protected spineIndex: int
                protected priorElementCount: long[]
                protected constructor()
                protected constructor(arg0: int)
                public isEmpty(): boolean
                public count(): long
                protected chunkSize(arg0: int): int
                public clear(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}