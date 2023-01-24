declare namespace java {
  namespace awt {
    namespace geom {
      abstract class QuadCurve2D implements java.awt.Shape, java.lang.Cloneable {
        protected constructor()
        public abstract getX1(): number
        public abstract getY1(): number
        public abstract getP1(): java.awt.geom.Point2D
        public abstract getCtrlX(): number
        public abstract getCtrlY(): number
        public abstract getCtrlPt(): java.awt.geom.Point2D
        public abstract getX2(): number
        public abstract getY2(): number
        public abstract getP2(): java.awt.geom.Point2D
        public abstract setCurve(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double,
          arg4: number | java.lang.Double,
          arg5: number | java.lang.Double
        ): void
        public setCurve(arg0: number[] | java.lang.Double[], arg1: number | java.lang.Integer): void
        public setCurve(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D, arg2: java.awt.geom.Point2D): void
        public setCurve(arg0: java.awt.geom.Point2D[], arg1: number | java.lang.Integer): void
        public setCurve(arg0: java.awt.geom.QuadCurve2D): void
        public static getFlatnessSq(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double,
          arg4: number | java.lang.Double,
          arg5: number | java.lang.Double
        ): number
        public static getFlatness(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double,
          arg4: number | java.lang.Double,
          arg5: number | java.lang.Double
        ): number
        public static getFlatnessSq(arg0: number[] | java.lang.Double[], arg1: number | java.lang.Integer): number
        public static getFlatness(arg0: number[] | java.lang.Double[], arg1: number | java.lang.Integer): number
        public getFlatnessSq(): number
        public getFlatness(): number
        public subdivide(arg0: java.awt.geom.QuadCurve2D, arg1: java.awt.geom.QuadCurve2D): void
        public static subdivide(
          arg0: java.awt.geom.QuadCurve2D,
          arg1: java.awt.geom.QuadCurve2D,
          arg2: java.awt.geom.QuadCurve2D
        ): void
        public static subdivide(
          arg0: number[] | java.lang.Double[],
          arg1: number | java.lang.Integer,
          arg2: number[] | java.lang.Double[],
          arg3: number | java.lang.Integer,
          arg4: number[] | java.lang.Double[],
          arg5: number | java.lang.Integer
        ): void
        public static solveQuadratic(arg0: number[] | java.lang.Double[]): number
        public static solveQuadratic(arg0: number[] | java.lang.Double[], arg1: number[] | java.lang.Double[]): number
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
