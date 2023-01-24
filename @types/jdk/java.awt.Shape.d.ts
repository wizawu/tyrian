declare namespace java {
  namespace awt {
    interface Shape {
      getBounds(): java.awt.Rectangle
      getBounds2D(): java.awt.geom.Rectangle2D
      contains(arg0: number | java.lang.Double, arg1: number | java.lang.Double): boolean
      contains(arg0: java.awt.geom.Point2D): boolean
      intersects(
        arg0: number | java.lang.Double,
        arg1: number | java.lang.Double,
        arg2: number | java.lang.Double,
        arg3: number | java.lang.Double
      ): boolean
      intersects(arg0: java.awt.geom.Rectangle2D): boolean
      contains(
        arg0: number | java.lang.Double,
        arg1: number | java.lang.Double,
        arg2: number | java.lang.Double,
        arg3: number | java.lang.Double
      ): boolean
      contains(arg0: java.awt.geom.Rectangle2D): boolean
      getPathIterator(arg0: java.awt.geom.AffineTransform): java.awt.geom.PathIterator
      getPathIterator(arg0: java.awt.geom.AffineTransform, arg1: number | java.lang.Double): java.awt.geom.PathIterator
    }
  }
}
