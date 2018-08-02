declare namespace java {
    namespace util {
        class BitSet implements java.lang.Cloneable , java.io.Serializable {
            public constructor()
            public constructor(arg0: int)
            public static valueOf(arg0: long[]): java.util.BitSet
            public static valueOf(arg0: java.nio.LongBuffer): java.util.BitSet
            public static valueOf(arg0: byte[]): java.util.BitSet
            public static valueOf(arg0: java.nio.ByteBuffer): java.util.BitSet
            public toByteArray(): byte[]
            public toLongArray(): long[]
            public flip(arg0: int): void
            public flip(arg0: int, arg1: int): void
            public set(arg0: int): void
            public set(arg0: int, arg1: boolean): void
            public set(arg0: int, arg1: int): void
            public set(arg0: int, arg1: int, arg2: boolean): void
            public clear(arg0: int): void
            public clear(arg0: int, arg1: int): void
            public clear(): void
            public get(arg0: int): boolean
            public get(arg0: int, arg1: int): java.util.BitSet
            public nextSetBit(arg0: int): int
            public nextClearBit(arg0: int): int
            public previousSetBit(arg0: int): int
            public previousClearBit(arg0: int): int
            public length(): int
            public isEmpty(): boolean
            public intersects(arg0: java.util.BitSet): boolean
            public cardinality(): int
            public and(arg0: java.util.BitSet): void
            public or(arg0: java.util.BitSet): void
            public xor(arg0: java.util.BitSet): void
            public andNot(arg0: java.util.BitSet): void
            public hashCode(): int
            public size(): int
            public equals(arg0: java.lang.Object): boolean
            public clone(): java.lang.Object
            public toString(): string
            public stream(): java.util.stream.IntStream
            public static class: java.lang.Class<any>
        }
    }
}