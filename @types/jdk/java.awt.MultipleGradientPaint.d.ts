declare namespace java {
  namespace awt {

    abstract class MultipleGradientPaint implements java.awt.Paint {
      readonly transparency: int
      readonly fractions: float[]
      readonly colors: java.awt.Color[]
      readonly gradientTransform: java.awt.geom.AffineTransform
      readonly cycleMethod: java.awt.MultipleGradientPaint$CycleMethod
      readonly colorSpace: java.awt.MultipleGradientPaint$ColorSpaceType
      model: java.awt.image.ColorModel
      normalizedIntervals: float[]
      isSimpleLookup: boolean
      gradients: java.lang.ref.SoftReference<int[][]>
      gradient: java.lang.ref.SoftReference<int[]>
      fastGradientArraySize: int
      constructor(arg0: float[], arg1: java.awt.Color[], arg2: java.awt.MultipleGradientPaint$CycleMethod, arg3: java.awt.MultipleGradientPaint$ColorSpaceType, arg4: java.awt.geom.AffineTransform)
      public getFractions(): number[]
      public getColors(): java.awt.Color[]
      public getCycleMethod(): java.awt.MultipleGradientPaint$CycleMethod
      public getColorSpace(): java.awt.MultipleGradientPaint$ColorSpaceType
      public getTransform(): java.awt.geom.AffineTransform
      public getTransparency(): number
    }

  }
}
