declare namespace java {
  namespace awt {

    class Polygon implements java.awt.Shape, java.io.Serializable {
      public npoints: int
      public xpoints: int[]
      public ypoints: int[]
      protected bounds: java.awt.Rectangle
      public constructor()
      public constructor(arg0: number[] | java.lang.Integer[], arg1: number[] | java.lang.Integer[], arg2: number | java.lang.Integer)
      public reset(): void
      public invalidate(): void
      public translate(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      calculateBounds(arg0: number[] | java.lang.Integer[], arg1: number[] | java.lang.Integer[], arg2: number | java.lang.Integer): void
      updateBounds(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public addPoint(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public getBounds(): java.awt.Rectangle
      public getBoundingBox(): java.awt.Rectangle
      public contains(arg0: java.awt.Point): boolean
      public contains(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): boolean
      public inside(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): boolean
      public getBounds2D(): java.awt.geom.Rectangle2D
      public contains(arg0: number | java.lang.Double, arg1: number | java.lang.Double): boolean
      public contains(arg0: java.awt.geom.Point2D): boolean
      public intersects(arg0: number | java.lang.Double, arg1: number | java.lang.Double, arg2: number | java.lang.Double, arg3: number | java.lang.Double): boolean
      public intersects(arg0: java.awt.geom.Rectangle2D): boolean
      public contains(arg0: number | java.lang.Double, arg1: number | java.lang.Double, arg2: number | java.lang.Double, arg3: number | java.lang.Double): boolean
      public contains(arg0: java.awt.geom.Rectangle2D): boolean
      public getPathIterator(arg0: java.awt.geom.AffineTransform): java.awt.geom.PathIterator
      public getPathIterator(arg0: java.awt.geom.AffineTransform, arg1: number | java.lang.Double): java.awt.geom.PathIterator
    }

  }
}
