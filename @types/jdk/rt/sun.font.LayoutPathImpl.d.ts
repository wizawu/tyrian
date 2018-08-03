declare namespace sun {
    namespace font {
        abstract class LayoutPathImpl extends java.awt.font.LayoutPath {
            public constructor()
            public pointToPath(arg0: double, arg1: double): java.awt.geom.Point2D
            public pathToPoint(arg0: double, arg1: double, arg2: boolean): java.awt.geom.Point2D
            public pointToPath(arg0: double, arg1: double, arg2: java.awt.geom.Point2D): void
            public pathToPoint(arg0: double, arg1: double, arg2: boolean, arg3: java.awt.geom.Point2D): void
            public abstract start(): double
            public abstract end(): double
            public abstract length(): double
            public abstract mapShape(arg0: java.awt.Shape): java.awt.Shape
            public static getPath(arg0: sun.font.LayoutPathImpl$EndType, ...arg1: double[]): sun.font.LayoutPathImpl
            public static class: java.lang.Class<any>
        }
    }
}