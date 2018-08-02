declare namespace java {
    namespace awt {
        namespace geom {
            abstract class Line2D implements java.awt.Shape , java.lang.Cloneable {
                protected constructor()
                public getX1(): double
                public getY1(): double
                public getP1(): java.awt.geom.Point2D
                public getX2(): double
                public getY2(): double
                public getP2(): java.awt.geom.Point2D
                public setLine(arg0: double, arg1: double, arg2: double, arg3: double): void
                public setLine(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D): void
                public setLine(arg0: java.awt.geom.Line2D): void
                public static relativeCCW(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): int
                public relativeCCW(arg0: double, arg1: double): int
                public relativeCCW(arg0: java.awt.geom.Point2D): int
                public static linesIntersect(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): boolean
                public intersectsLine(arg0: double, arg1: double, arg2: double, arg3: double): boolean
                public intersectsLine(arg0: java.awt.geom.Line2D): boolean
                public static ptSegDistSq(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): double
                public static ptSegDist(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): double
                public ptSegDistSq(arg0: double, arg1: double): double
                public ptSegDistSq(arg0: java.awt.geom.Point2D): double
                public ptSegDist(arg0: double, arg1: double): double
                public ptSegDist(arg0: java.awt.geom.Point2D): double
                public static ptLineDistSq(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): double
                public static ptLineDist(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): double
                public ptLineDistSq(arg0: double, arg1: double): double
                public ptLineDistSq(arg0: java.awt.geom.Point2D): double
                public ptLineDist(arg0: double, arg1: double): double
                public ptLineDist(arg0: java.awt.geom.Point2D): double
                public contains(arg0: double, arg1: double): boolean
                public contains(arg0: java.awt.geom.Point2D): boolean
                public intersects(arg0: double, arg1: double, arg2: double, arg3: double): boolean
                public intersects(arg0: java.awt.geom.Rectangle2D): boolean
                public contains(arg0: double, arg1: double, arg2: double, arg3: double): boolean
                public contains(arg0: java.awt.geom.Rectangle2D): boolean
                public getBounds(): java.awt.Rectangle
                public getPathIterator(arg0: java.awt.geom.AffineTransform): java.awt.geom.PathIterator
                public getPathIterator(arg0: java.awt.geom.AffineTransform, arg1: double): java.awt.geom.PathIterator
                public clone(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}