declare namespace java {
    namespace awt {
        namespace geom {
class Path2D$Double extends java.awt.geom.Path2D implements java.io.Serializable {
    public constructor()
    public constructor(arg0: int)
    public constructor(arg0: int, arg1: int)
    public constructor(arg0: java.awt.Shape)
    public constructor(arg0: java.awt.Shape, arg1: java.awt.geom.AffineTransform)
    public moveTo(arg0: double, arg1: double): void
    public lineTo(arg0: double, arg1: double): void
    public quadTo(arg0: double, arg1: double, arg2: double, arg3: double): void
    public curveTo(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): void
    public append(arg0: java.awt.geom.PathIterator, arg1: boolean): void
    public transform(arg0: java.awt.geom.AffineTransform): void
    public getBounds2D(): java.awt.geom.Rectangle2D
    public getPathIterator(arg0: java.awt.geom.AffineTransform): java.awt.geom.PathIterator
    public clone(): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}