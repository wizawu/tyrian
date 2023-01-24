declare namespace java {
  namespace awt {
    namespace image {
      class Kernel implements java.lang.Cloneable {
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number[] | java.lang.Float[]
        )
        public getXOrigin(): number
        public getYOrigin(): number
        public getWidth(): number
        public getHeight(): number
        public getKernelData(arg0: number[] | java.lang.Float[]): number[]
        public clone(): java.lang.Object
      }
    }
  }
}
