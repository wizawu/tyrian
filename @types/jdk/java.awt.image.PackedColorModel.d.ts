declare namespace java {
  namespace awt {
    namespace image {

      abstract class PackedColorModel extends java.awt.image.ColorModel {
        maskArray: int[]
        maskOffsets: int[]
        scaleFactors: float[]
        public constructor(arg0: java.awt.color.ColorSpace, arg1: number | java.lang.Integer, arg2: int[], arg3: number | java.lang.Integer, arg4: boolean | java.lang.Boolean, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer)
        public constructor(arg0: java.awt.color.ColorSpace, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: boolean | java.lang.Boolean, arg7: number | java.lang.Integer, arg8: number | java.lang.Integer)
        public getMask(arg0: number | java.lang.Integer): number
        public getMasks(): number[]
        public createCompatibleSampleModel(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.image.SampleModel
        public isCompatibleSampleModel(arg0: java.awt.image.SampleModel): boolean
        public getAlphaRaster(arg0: java.awt.image.WritableRaster): java.awt.image.WritableRaster
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
      }

    }
  }
}
