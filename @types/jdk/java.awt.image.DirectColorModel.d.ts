declare namespace java {
  namespace awt {
    namespace image {

      class DirectColorModel extends java.awt.image.PackedColorModel {
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer)
        public constructor(arg0: java.awt.color.ColorSpace, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: boolean | java.lang.Boolean, arg7: number | java.lang.Integer)
        public getRedMask(): number
        public getGreenMask(): number
        public getBlueMask(): number
        public getAlphaMask(): number
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
        public createCompatibleWritableRaster(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.image.WritableRaster
        public getDataElement(arg0: int[], arg1: number | java.lang.Integer): number
        public getDataElements(arg0: int[], arg1: number | java.lang.Integer, arg2: java.lang.Object | any): java.lang.Object
        public coerceData(arg0: java.awt.image.WritableRaster, arg1: boolean | java.lang.Boolean): java.awt.image.ColorModel
        public isCompatibleRaster(arg0: java.awt.image.Raster): boolean
        public toString(): java.lang.String
      }

    }
  }
}
