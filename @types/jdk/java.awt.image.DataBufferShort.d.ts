declare namespace java {
  namespace awt {
    namespace image {

      class DataBufferShort extends java.awt.image.DataBuffer {
        data: short[]
        bankdata: short[][]
        public constructor(arg0: number | java.lang.Integer)
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
        public constructor(arg0: short[], arg1: number | java.lang.Integer)
        public constructor(arg0: short[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
        public constructor(arg0: short[][], arg1: number | java.lang.Integer)
        public constructor(arg0: short[][], arg1: number | java.lang.Integer, arg2: int[])
        public getData(): number[]
        public getData(arg0: number | java.lang.Integer): number[]
        public getBankData(): number[][]
        public getElem(arg0: number | java.lang.Integer): number
        public getElem(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
        public setElem(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        public setElem(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      }

    }
  }
}
