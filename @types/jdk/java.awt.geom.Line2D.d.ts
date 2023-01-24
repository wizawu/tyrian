declare namespace java {
  namespace awt {
    namespace geom {
      abstract class Line2D implements java.awt.Shape, java.lang.Cloneable {
        protected constructor()
        public abstract getX1(): number
        public abstract getY1(): number
        public abstract getP1(): java.awt.geom.Point2D
        public abstract getX2(): number
        public abstract getY2(): number
        public abstract getP2(): java.awt.geom.Point2D
        public abstract setLine(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double
        ): void
        public setLine(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D): void
        public setLine(arg0: java.awt.geom.Line2D): void
        public static relativeCCW(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double,
          arg4: number | java.lang.Double,
          arg5: number | java.lang.Double
        ): number
        public relativeCCW(arg0: number | java.lang.Double, arg1: number | java.lang.Double): number
        public relativeCCW(arg0: java.awt.geom.Point2D): number
        public static linesIntersect(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double,
          arg4: number | java.lang.Double,
          arg5: number | java.lang.Double,
          arg6: number | java.lang.Double,
          arg7: number | java.lang.Double
        ): boolean
        public intersectsLine(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double
        ): boolean
        public intersectsLine(arg0: java.awt.geom.Line2D): boolean
        public static ptSegDistSq(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double,
          arg4: number | java.lang.Double,
          arg5: number | java.lang.Double
        ): number
        public static ptSegDist(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double,
          arg4: number | java.lang.Double,
          arg5: number | java.lang.Double
        ): number
        public ptSegDistSq(arg0: number | java.lang.Double, arg1: number | java.lang.Double): number
        public ptSegDistSq(arg0: java.awt.geom.Point2D): number
        public ptSegDist(arg0: number | java.lang.Double, arg1: number | java.lang.Double): number
        public ptSegDist(arg0: java.awt.geom.Point2D): number
        public static ptLineDistSq(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double,
          arg4: number | java.lang.Double,
          arg5: number | java.lang.Double
        ): number
        public static ptLineDist(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double,
          arg4: number | java.lang.Double,
          arg5: number | java.lang.Double
        ): number
        public ptLineDistSq(arg0: number | java.lang.Double, arg1: number | java.lang.Double): number
        public ptLineDistSq(arg0: java.awt.geom.Point2D): number
        public ptLineDist(arg0: number | java.lang.Double, arg1: number | java.lang.Double): number
        public ptLineDist(arg0: java.awt.geom.Point2D): number
        public contains(arg0: number | java.lang.Double, arg1: number | java.lang.Double): boolean
        public contains(arg0: java.awt.geom.Point2D): boolean
        public intersects(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double
        ): boolean
        public intersects(arg0: java.awt.geom.Rectangle2D): boolean
        public contains(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double
        ): boolean
        public contains(arg0: java.awt.geom.Rectangle2D): boolean
        public getBounds(): java.awt.Rectangle
        public getPathIterator(arg0: java.awt.geom.AffineTransform): java.awt.geom.PathIterator
        public getPathIterator(
          arg0: java.awt.geom.AffineTransform,
          arg1: number | java.lang.Double
        ): java.awt.geom.PathIterator
        public clone(): java.lang.Object
      }
    }
  }
}
