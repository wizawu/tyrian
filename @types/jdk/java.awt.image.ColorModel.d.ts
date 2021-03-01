declare namespace java {
  namespace awt {
    namespace image {

      abstract class ColorModel implements java.awt.Transparency {

        protected pixel_bits: int
        nBits: int[]
        transparency: int
        supportsAlpha: boolean
        isAlphaPremultiplied: boolean
        numComponents: int
        numColorComponents: int
        colorSpace: java.awt.color.ColorSpace
        colorSpaceType: int
        maxBits: int
        is_sRGB: boolean
        protected transferType: int
        static l8Tos8: byte[]
        static s8Tol8: byte[]
        static l16Tos8: byte[]
        static s8Tol16: short[]
        static g8Tos8Map: java.util.Map<java.awt.color.ICC_ColorSpace,byte[]>
        static lg16Toog8Map: java.util.Map<java.awt.color.ICC_ColorSpace,byte[]>
        static g16Tos8Map: java.util.Map<java.awt.color.ICC_ColorSpace,byte[]>
        static lg16Toog16Map: java.util.Map<java.awt.color.ICC_ColorSpace,short[]>
        static loadLibraries(): void
        public static getRGBdefault(): java.awt.image.ColorModel
        public constructor(arg0: int)
        protected constructor(arg0: int, arg1: int[], arg2: java.awt.color.ColorSpace, arg3: boolean, arg4: boolean, arg5: int, arg6: int)
        public readonly hasAlpha(): boolean
        public readonly isAlphaPremultiplied(): boolean
        public readonly getTransferType(): int
        public getPixelSize(): int
        public getComponentSize(arg0: int): int
        public getComponentSize(): int[]
        public getTransparency(): int
        public getNumComponents(): int
        public getNumColorComponents(): int
        public abstract getRed(arg0: int): int
        public abstract getGreen(arg0: int): int
        public abstract getBlue(arg0: int): int
        public abstract getAlpha(arg0: int): int
        public getRGB(arg0: int): int
        public getRed(arg0: java.lang.Object): int
        public getGreen(arg0: java.lang.Object): int
        public getBlue(arg0: java.lang.Object): int
        public getAlpha(arg0: java.lang.Object): int
        public getRGB(arg0: java.lang.Object): int
        public getDataElements(arg0: int, arg1: java.lang.Object): java.lang.Object
        public getComponents(arg0: int, arg1: int[], arg2: int): int[]
        public getComponents(arg0: java.lang.Object, arg1: int[], arg2: int): int[]
        public getUnnormalizedComponents(arg0: float[], arg1: int, arg2: int[], arg3: int): int[]
        public getNormalizedComponents(arg0: int[], arg1: int, arg2: float[], arg3: int): float[]
        public getDataElement(arg0: int[], arg1: int): int
        public getDataElements(arg0: int[], arg1: int, arg2: java.lang.Object): java.lang.Object
        public getDataElement(arg0: float[], arg1: int): int
        public getDataElements(arg0: float[], arg1: int, arg2: java.lang.Object): java.lang.Object
        public getNormalizedComponents(arg0: java.lang.Object, arg1: float[], arg2: int): float[]
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public readonly getColorSpace(): java.awt.color.ColorSpace
        public coerceData(arg0: java.awt.image.WritableRaster, arg1: boolean): java.awt.image.ColorModel
        public isCompatibleRaster(arg0: java.awt.image.Raster): boolean
        public createCompatibleWritableRaster(arg0: int, arg1: int): java.awt.image.WritableRaster
        public createCompatibleSampleModel(arg0: int, arg1: int): java.awt.image.SampleModel
        public isCompatibleSampleModel(arg0: java.awt.image.SampleModel): boolean
        public finalize(): void
        public getAlphaRaster(arg0: java.awt.image.WritableRaster): java.awt.image.WritableRaster
        public toString(): java.lang.String
        static getDefaultTransferType(arg0: int): int
        static isLinearRGBspace(arg0: java.awt.color.ColorSpace): boolean
        static isLinearGRAYspace(arg0: java.awt.color.ColorSpace): boolean
        static getLinearRGB8TosRGB8LUT(): byte[]
        static getsRGB8ToLinearRGB8LUT(): byte[]
        static getLinearRGB16TosRGB8LUT(): byte[]
        static getsRGB8ToLinearRGB16LUT(): short[]
        static getGray8TosRGB8LUT(arg0: java.awt.color.ICC_ColorSpace): byte[]
        static getLinearGray16ToOtherGray8LUT(arg0: java.awt.color.ICC_ColorSpace): byte[]
        static getGray16TosRGB8LUT(arg0: java.awt.color.ICC_ColorSpace): byte[]
        static getLinearGray16ToOtherGray16LUT(arg0: java.awt.color.ICC_ColorSpace): short[]
      }

    }
  }
}
