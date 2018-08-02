declare namespace java {
    namespace awt {
        namespace image {
            abstract class DataBuffer {
                public static TYPE_BYTE: int
                public static TYPE_USHORT: int
                public static TYPE_SHORT: int
                public static TYPE_INT: int
                public static TYPE_FLOAT: int
                public static TYPE_DOUBLE: int
                public static TYPE_UNDEFINED: int
                protected dataType: int
                protected banks: int
                protected offset: int
                protected size: int
                protected offsets: int[]
                public static getDataTypeSize(arg0: int): int
                protected constructor(arg0: int, arg1: int)
                protected constructor(arg0: int, arg1: int, arg2: int)
                protected constructor(arg0: int, arg1: int, arg2: int, arg3: int)
                protected constructor(arg0: int, arg1: int, arg2: int, arg3: int[])
                public getDataType(): int
                public getSize(): int
                public getOffset(): int
                public getOffsets(): int[]
                public getNumBanks(): int
                public getElem(arg0: int): int
                public getElem(arg0: int, arg1: int): int
                public setElem(arg0: int, arg1: int): void
                public setElem(arg0: int, arg1: int, arg2: int): void
                public getElemFloat(arg0: int): float
                public getElemFloat(arg0: int, arg1: int): float
                public setElemFloat(arg0: int, arg1: float): void
                public setElemFloat(arg0: int, arg1: int, arg2: float): void
                public getElemDouble(arg0: int): double
                public getElemDouble(arg0: int, arg1: int): double
                public setElemDouble(arg0: int, arg1: double): void
                public setElemDouble(arg0: int, arg1: int, arg2: double): void
                public static class: java.lang.Class<any>
            }
        }
    }
}