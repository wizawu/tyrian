declare namespace java {
  namespace awt {
    namespace geom {
      abstract class RectangularShape implements java.awt.Shape, java.lang.Cloneable {
        protected constructor()
        public abstract getX(): number
        public abstract getY(): number
        public abstract getWidth(): number
        public abstract getHeight(): number
        public getMinX(): number
        public getMinY(): number
        public getMaxX(): number
        public getMaxY(): number
        public getCenterX(): number
        public getCenterY(): number
        public getFrame(): java.awt.geom.Rectangle2D
        public abstract isEmpty(): boolean
        public abstract setFrame(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double
        ): void
        public setFrame(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Dimension2D): void
        public setFrame(arg0: java.awt.geom.Rectangle2D): void
        public setFrameFromDiagonal(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double
        ): void
        public setFrameFromDiagonal(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D): void
        public setFrameFromCenter(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double
        ): void
        public setFrameFromCenter(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D): void
        public contains(arg0: java.awt.geom.Point2D): boolean
        public intersects(arg0: java.awt.geom.Rectangle2D): boolean
        public contains(arg0: java.awt.geom.Rectangle2D): boolean
        public getBounds(): java.awt.Rectangle
        public getPathIterator(
          arg0: java.awt.geom.AffineTransform,
          arg1: number | java.lang.Double
        ): java.awt.geom.PathIterator
        public clone(): java.lang.Object
      }
    }
  }
}
