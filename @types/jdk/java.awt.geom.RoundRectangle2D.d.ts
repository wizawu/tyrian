declare namespace java {
  namespace awt {
    namespace geom {

      abstract class RoundRectangle2D extends java.awt.geom.RectangularShape {
        protected constructor()
        public abstract getArcWidth(): number
        public abstract getArcHeight(): number
        public abstract setRoundRect(arg0: number | java.lang.Double, arg1: number | java.lang.Double, arg2: number | java.lang.Double, arg3: number | java.lang.Double, arg4: number | java.lang.Double, arg5: number | java.lang.Double): void
        public setRoundRect(arg0: java.awt.geom.RoundRectangle2D): void
        public setFrame(arg0: number | java.lang.Double, arg1: number | java.lang.Double, arg2: number | java.lang.Double, arg3: number | java.lang.Double): void
        public contains(arg0: number | java.lang.Double, arg1: number | java.lang.Double): boolean
        public intersects(arg0: number | java.lang.Double, arg1: number | java.lang.Double, arg2: number | java.lang.Double, arg3: number | java.lang.Double): boolean
        public contains(arg0: number | java.lang.Double, arg1: number | java.lang.Double, arg2: number | java.lang.Double, arg3: number | java.lang.Double): boolean
        public getPathIterator(arg0: java.awt.geom.AffineTransform): java.awt.geom.PathIterator
        public hashCode(): number
        public equals(arg0: java.lang.Object | any): boolean
      }

    }
  }
}
