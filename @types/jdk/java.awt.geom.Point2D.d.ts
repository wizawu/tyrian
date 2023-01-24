declare namespace java {
  namespace awt {
    namespace geom {
      abstract class Point2D implements java.lang.Cloneable {
        protected constructor()
        public abstract getX(): number
        public abstract getY(): number
        public abstract setLocation(arg0: number | java.lang.Double, arg1: number | java.lang.Double): void
        public setLocation(arg0: java.awt.geom.Point2D): void
        public static distanceSq(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double
        ): number
        public static distance(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double
        ): number
        public distanceSq(arg0: number | java.lang.Double, arg1: number | java.lang.Double): number
        public distanceSq(arg0: java.awt.geom.Point2D): number
        public distance(arg0: number | java.lang.Double, arg1: number | java.lang.Double): number
        public distance(arg0: java.awt.geom.Point2D): number
        public clone(): java.lang.Object
        public hashCode(): number
        public equals(arg0: java.lang.Object | any): boolean
      }
    }
  }
}
