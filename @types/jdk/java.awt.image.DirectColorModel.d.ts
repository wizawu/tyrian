declare namespace java {
  namespace awt {
    namespace image {

      class DirectColorModel extends java.awt.image.PackedColorModel {

        public constructor(arg0: int, arg1: int, arg2: int, arg3: int)
        public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int)
        public constructor(arg0: java.awt.color.ColorSpace, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: boolean, arg7: int)
        public readonly getRedMask(): int
        public readonly getGreenMask(): int
        public readonly getBlueMask(): int
        public readonly getAlphaMask(): int
        public readonly getRed(arg0: int): int
        public readonly getGreen(arg0: int): int
        public readonly getBlue(arg0: int): int
        public readonly getAlpha(arg0: int): int
        public readonly getRGB(arg0: int): int
        public getRed(arg0: java.lang.Object): int
        public getGreen(arg0: java.lang.Object): int
        public getBlue(arg0: java.lang.Object): int
        public getAlpha(arg0: java.lang.Object): int
        public getRGB(arg0: java.lang.Object): int
        public getDataElements(arg0: int, arg1: java.lang.Object): java.lang.Object
        public readonly getComponents(arg0: int, arg1: int[], arg2: int): int[]
        public readonly getComponents(arg0: java.lang.Object, arg1: int[], arg2: int): int[]
        public readonly createCompatibleWritableRaster(arg0: int, arg1: int): java.awt.image.WritableRaster
        public getDataElement(arg0: int[], arg1: int): int
        public getDataElements(arg0: int[], arg1: int, arg2: java.lang.Object): java.lang.Object
        public readonly coerceData(arg0: java.awt.image.WritableRaster, arg1: boolean): java.awt.image.ColorModel
        public isCompatibleRaster(arg0: java.awt.image.Raster): boolean
        public toString(): java.lang.String
      }

    }
  }
}
