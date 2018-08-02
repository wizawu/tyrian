declare namespace sun {
    namespace font {
        class DelegatingShape implements java.awt.Shape {
            public constructor(arg0: java.awt.Shape)
            public getBounds(): java.awt.Rectangle
            public getBounds2D(): java.awt.geom.Rectangle2D
            public contains(arg0: double, arg1: double): boolean
            public contains(arg0: java.awt.geom.Point2D): boolean
            public intersects(arg0: double, arg1: double, arg2: double, arg3: double): boolean
            public intersects(arg0: java.awt.geom.Rectangle2D): boolean
            public contains(arg0: double, arg1: double, arg2: double, arg3: double): boolean
            public contains(arg0: java.awt.geom.Rectangle2D): boolean
            public getPathIterator(arg0: java.awt.geom.AffineTransform): java.awt.geom.PathIterator
            public getPathIterator(arg0: java.awt.geom.AffineTransform, arg1: double): java.awt.geom.PathIterator
            public static class: java.lang.Class<any>
        }
    }
}