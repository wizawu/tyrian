declare namespace java {
  namespace awt {
    namespace geom {

      abstract class Rectangle2D extends java.awt.geom.RectangularShape {
        public static readonly OUT_LEFT: int
        public static readonly OUT_TOP: int
        public static readonly OUT_RIGHT: int
        public static readonly OUT_BOTTOM: int
        protected constructor()
        public abstract setRect(arg0: number | java.lang.Double, arg1: number | java.lang.Double, arg2: number | java.lang.Double, arg3: number | java.lang.Double): void
        public setRect(arg0: java.awt.geom.Rectangle2D): void
        public intersectsLine(arg0: number | java.lang.Double, arg1: number | java.lang.Double, arg2: number | java.lang.Double, arg3: number | java.lang.Double): boolean
        public intersectsLine(arg0: java.awt.geom.Line2D): boolean
        public abstract outcode(arg0: number | java.lang.Double, arg1: number | java.lang.Double): number
        public outcode(arg0: java.awt.geom.Point2D): number
        public setFrame(arg0: number | java.lang.Double, arg1: number | java.lang.Double, arg2: number | java.lang.Double, arg3: number | java.lang.Double): void
        public getBounds2D(): java.awt.geom.Rectangle2D
        public contains(arg0: number | java.lang.Double, arg1: number | java.lang.Double): boolean
        public intersects(arg0: number | java.lang.Double, arg1: number | java.lang.Double, arg2: number | java.lang.Double, arg3: number | java.lang.Double): boolean
        public contains(arg0: number | java.lang.Double, arg1: number | java.lang.Double, arg2: number | java.lang.Double, arg3: number | java.lang.Double): boolean
        public abstract createIntersection(arg0: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D
        public static intersect(arg0: java.awt.geom.Rectangle2D, arg1: java.awt.geom.Rectangle2D, arg2: java.awt.geom.Rectangle2D): void
        public abstract createUnion(arg0: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D
        public static union(arg0: java.awt.geom.Rectangle2D, arg1: java.awt.geom.Rectangle2D, arg2: java.awt.geom.Rectangle2D): void
        public add(arg0: number | java.lang.Double, arg1: number | java.lang.Double): void
        public add(arg0: java.awt.geom.Point2D): void
        public add(arg0: java.awt.geom.Rectangle2D): void
        public getPathIterator(arg0: java.awt.geom.AffineTransform): java.awt.geom.PathIterator
        public getPathIterator(arg0: java.awt.geom.AffineTransform, arg1: number | java.lang.Double): java.awt.geom.PathIterator
        public hashCode(): number
        public equals(arg0: java.lang.Object | any): boolean
      }

    }
  }
}
