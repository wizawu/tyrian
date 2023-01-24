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
        static g8Tos8Map: java.util.Map<java.awt.color.ICC_ColorSpace, byte[]>
        static lg16Toog8Map: java.util.Map<java.awt.color.ICC_ColorSpace, byte[]>
        static g16Tos8Map: java.util.Map<java.awt.color.ICC_ColorSpace, byte[]>
        static lg16Toog16Map: java.util.Map<java.awt.color.ICC_ColorSpace, short[]>
        static loadLibraries(): void
        public static getRGBdefault(): java.awt.image.ColorModel
        public constructor(arg0: number | java.lang.Integer)
        protected constructor(
          arg0: number | java.lang.Integer,
          arg1: number[] | java.lang.Integer[],
          arg2: java.awt.color.ColorSpace,
          arg3: boolean | java.lang.Boolean,
          arg4: boolean | java.lang.Boolean,
          arg5: number | java.lang.Integer,
          arg6: number | java.lang.Integer
        )
        public hasAlpha(): boolean
        public isAlphaPremultiplied(): boolean
        public getTransferType(): number
        public getPixelSize(): number
        public getComponentSize(arg0: number | java.lang.Integer): number
        public getComponentSize(): number[]
        public getTransparency(): number
        public getNumComponents(): number
        public getNumColorComponents(): number
        public abstract getRed(arg0: number | java.lang.Integer): number
        public abstract getGreen(arg0: number | java.lang.Integer): number
        public abstract getBlue(arg0: number | java.lang.Integer): number
        public abstract getAlpha(arg0: number | java.lang.Integer): number
        public getRGB(arg0: number | java.lang.Integer): number
        public getRed(arg0: java.lang.Object | any): number
        public getGreen(arg0: java.lang.Object | any): number
        public getBlue(arg0: java.lang.Object | any): number
        public getAlpha(arg0: java.lang.Object | any): number
        public getRGB(arg0: java.lang.Object | any): number
        public getDataElements(arg0: number | java.lang.Integer, arg1: java.lang.Object | any): java.lang.Object
        public getComponents(
          arg0: number | java.lang.Integer,
          arg1: number[] | java.lang.Integer[],
          arg2: number | java.lang.Integer
        ): number[]
        public getComponents(
          arg0: java.lang.Object | any,
          arg1: number[] | java.lang.Integer[],
          arg2: number | java.lang.Integer
        ): number[]
        public getUnnormalizedComponents(
          arg0: number[] | java.lang.Float[],
          arg1: number | java.lang.Integer,
          arg2: number[] | java.lang.Integer[],
          arg3: number | java.lang.Integer
        ): number[]
        public getNormalizedComponents(
          arg0: number[] | java.lang.Integer[],
          arg1: number | java.lang.Integer,
          arg2: number[] | java.lang.Float[],
          arg3: number | java.lang.Integer
        ): number[]
        public getDataElement(arg0: number[] | java.lang.Integer[], arg1: number | java.lang.Integer): number
        public getDataElements(
          arg0: number[] | java.lang.Integer[],
          arg1: number | java.lang.Integer,
          arg2: java.lang.Object | any
        ): java.lang.Object
        public getDataElement(arg0: number[] | java.lang.Float[], arg1: number | java.lang.Integer): number
        public getDataElements(
          arg0: number[] | java.lang.Float[],
          arg1: number | java.lang.Integer,
          arg2: java.lang.Object | any
        ): java.lang.Object
        public getNormalizedComponents(
          arg0: java.lang.Object | any,
          arg1: number[] | java.lang.Float[],
          arg2: number | java.lang.Integer
        ): number[]
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public getColorSpace(): java.awt.color.ColorSpace
        public coerceData(
          arg0: java.awt.image.WritableRaster,
          arg1: boolean | java.lang.Boolean
        ): java.awt.image.ColorModel
        public isCompatibleRaster(arg0: java.awt.image.Raster): boolean
        public createCompatibleWritableRaster(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer
        ): java.awt.image.WritableRaster
        public createCompatibleSampleModel(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer
        ): java.awt.image.SampleModel
        public isCompatibleSampleModel(arg0: java.awt.image.SampleModel): boolean
        public finalize(): void
        public getAlphaRaster(arg0: java.awt.image.WritableRaster): java.awt.image.WritableRaster
        public toString(): java.lang.String
        static getDefaultTransferType(arg0: number | java.lang.Integer): number
        static isLinearRGBspace(arg0: java.awt.color.ColorSpace): boolean
        static isLinearGRAYspace(arg0: java.awt.color.ColorSpace): boolean
        static getLinearRGB8TosRGB8LUT(): number[]
        static getsRGB8ToLinearRGB8LUT(): number[]
        static getLinearRGB16TosRGB8LUT(): number[]
        static getsRGB8ToLinearRGB16LUT(): number[]
        static getGray8TosRGB8LUT(arg0: java.awt.color.ICC_ColorSpace): number[]
        static getLinearGray16ToOtherGray8LUT(arg0: java.awt.color.ICC_ColorSpace): number[]
        static getGray16TosRGB8LUT(arg0: java.awt.color.ICC_ColorSpace): number[]
        static getLinearGray16ToOtherGray16LUT(arg0: java.awt.color.ICC_ColorSpace): number[]
      }
    }
  }
}
