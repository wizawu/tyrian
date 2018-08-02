declare namespace java {
    namespace awt {
        namespace image {
class DataBufferDouble extends java.awt.image.DataBuffer {
    public constructor(arg0: int)
    public constructor(arg0: int, arg1: int)
    public constructor(arg0: double[], arg1: int)
    public constructor(arg0: double[], arg1: int, arg2: int)
    public constructor(arg0: double[][], arg1: int)
    public constructor(arg0: double[][], arg1: int, arg2: int[])
    public getData(): double[]
    public getData(arg0: int): double[]
    public getBankData(): double[][]
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