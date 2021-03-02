declare namespace java {
  namespace awt {
    namespace geom {

      abstract class Ellipse2D extends java.awt.geom.RectangularShape {
        protected constructor()
        public contains(arg0: double, arg1: double): boolean
        public intersects(arg0: double, arg1: double, arg2: double, arg3: double): boolean
        public contains(arg0: double, arg1: double, arg2: double, arg3: double): boolean
        public getPathIterator(arg0: java.awt.geom.AffineTransform): java.awt.geom.PathIterator
        public hashCode(): int
        public equals(arg0: java.lang.Object): boolean
      }

    }
  }
}
