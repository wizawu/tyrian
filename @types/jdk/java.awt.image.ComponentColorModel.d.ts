declare namespace java {
  namespace awt {
    namespace image {

      class ComponentColorModel extends java.awt.image.ColorModel {
        public constructor(arg0: java.awt.color.ColorSpace, arg1: int[], arg2: boolean | java.lang.Boolean, arg3: boolean | java.lang.Boolean, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer)
        public constructor(arg0: java.awt.color.ColorSpace, arg1: boolean | java.lang.Boolean, arg2: boolean | java.lang.Boolean, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer)
        public getRed(arg0: number | java.lang.Integer): number
        public getGreen(arg0: number | java.lang.Integer): number
        public getBlue(arg0: number | java.lang.Integer): number
        public getAlpha(arg0: number | java.lang.Integer): number
        public getRGB(arg0: number | java.lang.Integer): number
        public getRed(arg0: java.lang.Object | any): number
        public getGreen(arg0: java.lang.Object | any): number
        public getBlue(arg0: java.lang.Object | any): number
        public getAlpha(arg0: java.lang.Object | any): number
        public getRGB(arg0: java.lang.Object | any): number
        public getDataElements(arg0: number | java.lang.Integer, arg1: java.lang.Object | any): java.lang.Object
        public getComponents(arg0: number | java.lang.Integer, arg1: int[], arg2: number | java.lang.Integer): number[]
        public getComponents(arg0: java.lang.Object | any, arg1: int[], arg2: number | java.lang.Integer): number[]
        public getUnnormalizedComponents(arg0: float[], arg1: number | java.lang.Integer, arg2: int[], arg3: number | java.lang.Integer): number[]
        public getNormalizedComponents(arg0: int[], arg1: number | java.lang.Integer, arg2: float[], arg3: number | java.lang.Integer): number[]
        public getDataElement(arg0: int[], arg1: number | java.lang.Integer): number
        public getDataElements(arg0: int[], arg1: number | java.lang.Integer, arg2: java.lang.Object | any): java.lang.Object
        public getDataElement(arg0: float[], arg1: number | java.lang.Integer): number
        public getDataElements(arg0: float[], arg1: number | java.lang.Integer, arg2: java.lang.Object | any): java.lang.Object
        public getNormalizedComponents(arg0: java.lang.Object | any, arg1: float[], arg2: number | java.lang.Integer): number[]
        public coerceData(arg0: java.awt.image.WritableRaster, arg1: boolean | java.lang.Boolean): java.awt.image.ColorModel
        public isCompatibleRaster(arg0: java.awt.image.Raster): boolean
        public createCompatibleWritableRaster(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.image.WritableRaster
        public createCompatibleSampleModel(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.image.SampleModel
        public isCompatibleSampleModel(arg0: java.awt.image.SampleModel): boolean
        public getAlphaRaster(arg0: java.awt.image.WritableRaster): java.awt.image.WritableRaster
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
      }

    }
  }
}
