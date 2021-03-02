declare namespace java {
  namespace awt {
    namespace font {

      abstract class LayoutPath {
        public constructor()
        public abstract pointToPath(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D): boolean
        public abstract pathToPoint(arg0: java.awt.geom.Point2D, arg1: boolean | java.lang.Boolean, arg2: java.awt.geom.Point2D): void
      }

    }
  }
}
