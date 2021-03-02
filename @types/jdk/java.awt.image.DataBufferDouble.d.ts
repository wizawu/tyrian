declare namespace java {
  namespace awt {
    namespace image {

      class DataBufferDouble extends java.awt.image.DataBuffer {
        bankdata: double[][]
        data: double[]
        public constructor(arg0: number | java.lang.Integer)
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
        public constructor(arg0: double[], arg1: number | java.lang.Integer)
        public constructor(arg0: double[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
        public constructor(arg0: double[][], arg1: number | java.lang.Integer)
        public constructor(arg0: double[][], arg1: number | java.lang.Integer, arg2: int[])
        public getData(): number[]
        public getData(arg0: number | java.lang.Integer): number[]
        public getBankData(): number[][]
        public getElem(arg0: number | java.lang.Integer): number
        public getElem(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
        public setElem(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        public setElem(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
        public getElemFloat(arg0: number | java.lang.Integer): number
        public getElemFloat(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
        public setElemFloat(arg0: number | java.lang.Integer, arg1: number | java.lang.Float): void
        public setElemFloat(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Float): void
        public getElemDouble(arg0: number | java.lang.Integer): number
        public getElemDouble(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
        public setElemDouble(arg0: number | java.lang.Integer, arg1: number | java.lang.Double): void
        public setElemDouble(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Double): void
      }

    }
  }
}
