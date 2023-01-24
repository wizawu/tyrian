declare namespace java {
  namespace awt {
    namespace image {
      class IndexColorModel extends java.awt.image.ColorModel {
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number[] | java.lang.Byte[],
          arg3: number[] | java.lang.Byte[],
          arg4: number[] | java.lang.Byte[]
        )
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number[] | java.lang.Byte[],
          arg3: number[] | java.lang.Byte[],
          arg4: number[] | java.lang.Byte[],
          arg5: number | java.lang.Integer
        )
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number[] | java.lang.Byte[],
          arg3: number[] | java.lang.Byte[],
          arg4: number[] | java.lang.Byte[],
          arg5: number[] | java.lang.Byte[]
        )
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number[] | java.lang.Byte[],
          arg3: number | java.lang.Integer,
          arg4: boolean | java.lang.Boolean
        )
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number[] | java.lang.Byte[],
          arg3: number | java.lang.Integer,
          arg4: boolean | java.lang.Boolean,
          arg5: number | java.lang.Integer
        )
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number[] | java.lang.Integer[],
          arg3: number | java.lang.Integer,
          arg4: boolean | java.lang.Boolean,
          arg5: number | java.lang.Integer,
          arg6: number | java.lang.Integer
        )
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number[] | java.lang.Integer[],
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: java.math.BigInteger
        )
        public getTransparency(): number
        public getComponentSize(): number[]
        public getMapSize(): number
        public getTransparentPixel(): number
        public getReds(arg0: number[] | java.lang.Byte[]): void
        public getGreens(arg0: number[] | java.lang.Byte[]): void
        public getBlues(arg0: number[] | java.lang.Byte[]): void
        public getAlphas(arg0: number[] | java.lang.Byte[]): void
        public getRGBs(arg0: number[] | java.lang.Integer[]): void
        public getRed(arg0: number | java.lang.Integer): number
        public getGreen(arg0: number | java.lang.Integer): number
        public getBlue(arg0: number | java.lang.Integer): number
        public getAlpha(arg0: number | java.lang.Integer): number
        public getRGB(arg0: number | java.lang.Integer): number
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
        public getDataElement(arg0: number[] | java.lang.Integer[], arg1: number | java.lang.Integer): number
        public getDataElements(
          arg0: number[] | java.lang.Integer[],
          arg1: number | java.lang.Integer,
          arg2: java.lang.Object | any
        ): java.lang.Object
        public createCompatibleWritableRaster(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer
        ): java.awt.image.WritableRaster
        public isCompatibleRaster(arg0: java.awt.image.Raster): boolean
        public createCompatibleSampleModel(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer
        ): java.awt.image.SampleModel
        public isCompatibleSampleModel(arg0: java.awt.image.SampleModel): boolean
        public convertToIntDiscrete(
          arg0: java.awt.image.Raster,
          arg1: boolean | java.lang.Boolean
        ): java.awt.image.BufferedImage
        public isValid(arg0: number | java.lang.Integer): boolean
        public isValid(): boolean
        public getValidPixels(): java.math.BigInteger
        public finalize(): void
        public toString(): java.lang.String
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
      }
    }
  }
}
