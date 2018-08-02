declare namespace java {
    namespace awt {
        namespace geom {
            abstract class QuadCurve2D implements java.awt.Shape , java.lang.Cloneable {
                protected constructor()
                public getX1(): double
                public getY1(): double
                public getP1(): java.awt.geom.Point2D
                public getCtrlX(): double
                public getCtrlY(): double
                public getCtrlPt(): java.awt.geom.Point2D
                public getX2(): double
                public getY2(): double
                public getP2(): java.awt.geom.Point2D
                public setCurve(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): void
                public setCurve(arg0: double[], arg1: int): void
                public setCurve(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D, arg2: java.awt.geom.Point2D): void
                public setCurve(arg0: java.awt.geom.Point2D[], arg1: int): void
                public setCurve(arg0: java.awt.geom.QuadCurve2D): void
                public static getFlatnessSq(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): double
                public static getFlatness(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): double
                public static getFlatnessSq(arg0: double[], arg1: int): double
                public static getFlatness(arg0: double[], arg1: int): double
                public getFlatnessSq(): double
                public getFlatness(): double
                public subdivide(arg0: java.awt.geom.QuadCurve2D, arg1: java.awt.geom.QuadCurve2D): void
                public static subdivide(arg0: java.awt.geom.QuadCurve2D, arg1: java.awt.geom.QuadCurve2D, arg2: java.awt.geom.QuadCurve2D): void
                public static subdivide(arg0: double[], arg1: int, arg2: double[], arg3: int, arg4: double[], arg5: int): void
                public static solveQuadratic(arg0: double[]): int
                public static solveQuadratic(arg0: double[], arg1: double[]): int
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