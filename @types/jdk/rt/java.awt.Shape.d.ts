declare namespace java {
    namespace awt {
interface Shape {
    getBounds(): java.awt.Rectangle
    getBounds2D(): java.awt.geom.Rectangle2D
    contains(arg0: double, arg1: double): boolean
    contains(arg0: java.awt.geom.Point2D): boolean
    intersects(arg0: double, arg1: double, arg2: double, arg3: double): boolean
    intersects(arg0: java.awt.geom.Rectangle2D): boolean
    contains(arg0: double, arg1: double, arg2: double, arg3: double): boolean
    contains(arg0: java.awt.geom.Rectangle2D): boolean
    getPathIterator(arg0: java.awt.geom.AffineTransform): java.awt.geom.PathIterator
    getPathIterator(arg0: java.awt.geom.AffineTransform, arg1: double): java.awt.geom.PathIterator
}

    }
}