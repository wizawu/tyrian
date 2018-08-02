declare namespace sun {
    namespace security {
        namespace util {
            class BitArray {
                public constructor(arg0: int)
                public constructor(arg0: int, arg1: byte[])
                public constructor(arg0: boolean[])
                public get(arg0: int): boolean
                public set(arg0: int, arg1: boolean): void
                public length(): int
                public toByteArray(): byte[]
                public equals(arg0: java.lang.Object): boolean
                public toBooleanArray(): boolean[]
                public hashCode(): int
                public clone(): java.lang.Object
                public toString(): string
                public truncate(): sun.security.util.BitArray
                public static class: java.lang.Class<any>
            }
        }
    }
}