declare namespace java {
    namespace awt {
        namespace geom {
            abstract class Point2D implements java.lang.Cloneable {
                protected constructor()
                public abstract getX(): double
                public abstract getY(): double
                public abstract setLocation(arg0: double, arg1: double): void
                public setLocation(arg0: java.awt.geom.Point2D): void
                public static distanceSq(arg0: double, arg1: double, arg2: double, arg3: double): double
                public static distance(arg0: double, arg1: double, arg2: double, arg3: double): double
                public distanceSq(arg0: double, arg1: double): double
                public distanceSq(arg0: java.awt.geom.Point2D): double
                public distance(arg0: double, arg1: double): double
                public distance(arg0: java.awt.geom.Point2D): double
                public clone(): java.lang.Object
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}