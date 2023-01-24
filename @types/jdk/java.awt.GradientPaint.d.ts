declare namespace java {
  namespace awt {
    class GradientPaint implements java.awt.Paint {
      p1: java.awt.geom.Point2D$Float
      p2: java.awt.geom.Point2D$Float
      color1: java.awt.Color
      color2: java.awt.Color
      cyclic: boolean
      public constructor(
        arg0: number | java.lang.Float,
        arg1: number | java.lang.Float,
        arg2: java.awt.Color,
        arg3: number | java.lang.Float,
        arg4: number | java.lang.Float,
        arg5: java.awt.Color
      )
      public constructor(
        arg0: java.awt.geom.Point2D,
        arg1: java.awt.Color,
        arg2: java.awt.geom.Point2D,
        arg3: java.awt.Color
      )
      public constructor(
        arg0: number | java.lang.Float,
        arg1: number | java.lang.Float,
        arg2: java.awt.Color,
        arg3: number | java.lang.Float,
        arg4: number | java.lang.Float,
        arg5: java.awt.Color,
        arg6: boolean | java.lang.Boolean
      )
      public constructor(
        arg0: java.awt.geom.Point2D,
        arg1: java.awt.Color,
        arg2: java.awt.geom.Point2D,
        arg3: java.awt.Color,
        arg4: boolean | java.lang.Boolean
      )
      public getPoint1(): java.awt.geom.Point2D
      public getColor1(): java.awt.Color
      public getPoint2(): java.awt.geom.Point2D
      public getColor2(): java.awt.Color
      public isCyclic(): boolean
      public createContext(
        arg0: java.awt.image.ColorModel,
        arg1: java.awt.Rectangle,
        arg2: java.awt.geom.Rectangle2D,
        arg3: java.awt.geom.AffineTransform,
        arg4: java.awt.RenderingHints
      ): java.awt.PaintContext
      public getTransparency(): number
    }
  }
}
