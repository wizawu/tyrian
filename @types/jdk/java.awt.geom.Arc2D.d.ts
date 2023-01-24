declare namespace java {
  namespace awt {
    namespace geom {
      abstract class Arc2D extends java.awt.geom.RectangularShape {
        public static readonly OPEN: int
        public static readonly CHORD: int
        public static readonly PIE: int
        protected constructor()
        protected constructor(arg0: number | java.lang.Integer)
        public abstract getAngleStart(): number
        public abstract getAngleExtent(): number
        public getArcType(): number
        public getStartPoint(): java.awt.geom.Point2D
        public getEndPoint(): java.awt.geom.Point2D
        public abstract setArc(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double,
          arg4: number | java.lang.Double,
          arg5: number | java.lang.Double,
          arg6: number | java.lang.Integer
        ): void
        public setArc(
          arg0: java.awt.geom.Point2D,
          arg1: java.awt.geom.Dimension2D,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double,
          arg4: number | java.lang.Integer
        ): void
        public setArc(
          arg0: java.awt.geom.Rectangle2D,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Integer
        ): void
        public setArc(arg0: java.awt.geom.Arc2D): void
        public setArcByCenter(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double,
          arg4: number | java.lang.Double,
          arg5: number | java.lang.Integer
        ): void
        public setArcByTangent(
          arg0: java.awt.geom.Point2D,
          arg1: java.awt.geom.Point2D,
          arg2: java.awt.geom.Point2D,
          arg3: number | java.lang.Double
        ): void
        public abstract setAngleStart(arg0: number | java.lang.Double): void
        public abstract setAngleExtent(arg0: number | java.lang.Double): void
        public setAngleStart(arg0: java.awt.geom.Point2D): void
        public setAngles(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double
        ): void
        public setAngles(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D): void
        public setArcType(arg0: number | java.lang.Integer): void
        public setFrame(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double
        ): void
        public getBounds2D(): java.awt.geom.Rectangle2D
        protected abstract makeBounds(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double
        ): java.awt.geom.Rectangle2D
        static normalizeDegrees(arg0: number | java.lang.Double): number
        public containsAngle(arg0: number | java.lang.Double): boolean
        public contains(arg0: number | java.lang.Double, arg1: number | java.lang.Double): boolean
        public intersects(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double
        ): boolean
        public contains(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double
        ): boolean
        public contains(arg0: java.awt.geom.Rectangle2D): boolean
        public getPathIterator(arg0: java.awt.geom.AffineTransform): java.awt.geom.PathIterator
        public hashCode(): number
        public equals(arg0: java.lang.Object | any): boolean
      }
    }
  }
}
