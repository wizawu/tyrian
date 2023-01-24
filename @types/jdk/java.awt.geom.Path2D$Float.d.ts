declare namespace java {
  namespace awt {
    namespace geom {
      class Path2D$Float extends java.awt.geom.Path2D implements java.io.Serializable {
        floatCoords: float[]
        static readonly $assertionsDisabled: boolean
        public constructor()
        public constructor(arg0: number | java.lang.Integer)
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
        public constructor(arg0: java.awt.Shape)
        public constructor(arg0: java.awt.Shape, arg1: java.awt.geom.AffineTransform)
        public trimToSize(): void
        cloneCoordsFloat(arg0: java.awt.geom.AffineTransform): number[]
        cloneCoordsDouble(arg0: java.awt.geom.AffineTransform): number[]
        append(arg0: number | java.lang.Float, arg1: number | java.lang.Float): void
        append(arg0: number | java.lang.Double, arg1: number | java.lang.Double): void
        getPoint(arg0: number | java.lang.Integer): java.awt.geom.Point2D
        needRoom(arg0: boolean | java.lang.Boolean, arg1: number | java.lang.Integer): void
        static expandCoords(arg0: number[] | java.lang.Float[], arg1: number | java.lang.Integer): number[]
        public moveTo(arg0: number | java.lang.Double, arg1: number | java.lang.Double): void
        public moveTo(arg0: number | java.lang.Float, arg1: number | java.lang.Float): void
        public lineTo(arg0: number | java.lang.Double, arg1: number | java.lang.Double): void
        public lineTo(arg0: number | java.lang.Float, arg1: number | java.lang.Float): void
        public quadTo(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double
        ): void
        public quadTo(
          arg0: number | java.lang.Float,
          arg1: number | java.lang.Float,
          arg2: number | java.lang.Float,
          arg3: number | java.lang.Float
        ): void
        public curveTo(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double,
          arg4: number | java.lang.Double,
          arg5: number | java.lang.Double
        ): void
        public curveTo(
          arg0: number | java.lang.Float,
          arg1: number | java.lang.Float,
          arg2: number | java.lang.Float,
          arg3: number | java.lang.Float,
          arg4: number | java.lang.Float,
          arg5: number | java.lang.Float
        ): void
        pointCrossings(arg0: number | java.lang.Double, arg1: number | java.lang.Double): number
        rectCrossings(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double
        ): number
        public append(arg0: java.awt.geom.PathIterator, arg1: boolean | java.lang.Boolean): void
        public transform(arg0: java.awt.geom.AffineTransform): void
        public getBounds2D(): java.awt.geom.Rectangle2D
        public getPathIterator(arg0: java.awt.geom.AffineTransform): java.awt.geom.PathIterator
        public clone(): java.lang.Object
      }
    }
  }
}
