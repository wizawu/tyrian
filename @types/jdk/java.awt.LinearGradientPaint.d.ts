declare namespace java {
  namespace awt {
    class LinearGradientPaint extends java.awt.MultipleGradientPaint {
      public constructor(
        arg0: number | java.lang.Float,
        arg1: number | java.lang.Float,
        arg2: number | java.lang.Float,
        arg3: number | java.lang.Float,
        arg4: number[] | java.lang.Float[],
        arg5: java.awt.Color[]
      )
      public constructor(
        arg0: number | java.lang.Float,
        arg1: number | java.lang.Float,
        arg2: number | java.lang.Float,
        arg3: number | java.lang.Float,
        arg4: number[] | java.lang.Float[],
        arg5: java.awt.Color[],
        arg6: java.awt.MultipleGradientPaint$CycleMethod
      )
      public constructor(
        arg0: java.awt.geom.Point2D,
        arg1: java.awt.geom.Point2D,
        arg2: number[] | java.lang.Float[],
        arg3: java.awt.Color[]
      )
      public constructor(
        arg0: java.awt.geom.Point2D,
        arg1: java.awt.geom.Point2D,
        arg2: number[] | java.lang.Float[],
        arg3: java.awt.Color[],
        arg4: java.awt.MultipleGradientPaint$CycleMethod
      )
      public constructor(
        arg0: java.awt.geom.Point2D,
        arg1: java.awt.geom.Point2D,
        arg2: number[] | java.lang.Float[],
        arg3: java.awt.Color[],
        arg4: java.awt.MultipleGradientPaint$CycleMethod,
        arg5: java.awt.MultipleGradientPaint$ColorSpaceType,
        arg6: java.awt.geom.AffineTransform
      )
      public createContext(
        arg0: java.awt.image.ColorModel,
        arg1: java.awt.Rectangle,
        arg2: java.awt.geom.Rectangle2D,
        arg3: java.awt.geom.AffineTransform,
        arg4: java.awt.RenderingHints
      ): java.awt.PaintContext
      public getStartPoint(): java.awt.geom.Point2D
      public getEndPoint(): java.awt.geom.Point2D
    }
  }
}
