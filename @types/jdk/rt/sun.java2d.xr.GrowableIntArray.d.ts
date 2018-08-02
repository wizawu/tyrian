declare namespace sun {
    namespace java2d {
        namespace xr {
            class GrowableIntArray {
                public constructor(arg0: int, arg1: int)
                public getArray(): int[]
                public getSizedArray(): int[]
                public getNextIndex(): int
                protected getCellIndex(arg0: int): int
                public getInt(arg0: int): int
                public addInt(arg0: int): void
                public getSize(): int
                public clear(): void
                protected growArray(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}