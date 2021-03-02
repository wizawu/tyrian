declare namespace java {
  namespace awt {
    namespace image {

      abstract class PackedColorModel extends java.awt.image.ColorModel {
        maskArray: int[]
        maskOffsets: int[]
        scaleFactors: float[]
        public constructor(arg0: java.awt.color.ColorSpace, arg1: int, arg2: int[], arg3: int, arg4: boolean, arg5: int, arg6: int)
        public constructor(arg0: java.awt.color.ColorSpace, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: boolean, arg7: int, arg8: int)
        public getMask(arg0: int): int
        public getMasks(): int[]
        public createCompatibleSampleModel(arg0: int, arg1: int): java.awt.image.SampleModel
        public isCompatibleSampleModel(arg0: java.awt.image.SampleModel): boolean
        public getAlphaRaster(arg0: java.awt.image.WritableRaster): java.awt.image.WritableRaster
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
      }

    }
  }
}
