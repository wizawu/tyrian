declare namespace java {
    namespace awt {
        namespace image {
            class DataBufferInt extends java.awt.image.DataBuffer {
                public constructor(arg0: int)
                public constructor(arg0: int, arg1: int)
                public constructor(arg0: int[], arg1: int)
                public constructor(arg0: int[], arg1: int, arg2: int)
                public constructor(arg0: int[][], arg1: int)
                public constructor(arg0: int[][], arg1: int, arg2: int[])
                public getData(): int[]
                public getData(arg0: int): int[]
                public getBankData(): int[][]
                public getElem(arg0: int): int
                public getElem(arg0: int, arg1: int): int
                public setElem(arg0: int, arg1: int): void
                public setElem(arg0: int, arg1: int, arg2: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}