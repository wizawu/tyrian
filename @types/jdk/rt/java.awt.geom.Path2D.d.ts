declare namespace java {
    namespace awt {
        namespace geom {
            abstract class Path2D implements java.awt.Shape , java.lang.Cloneable {
                public static WIND_EVEN_ODD: int
                public static WIND_NON_ZERO: int
                public moveTo(arg0: double, arg1: double): void
                public lineTo(arg0: double, arg1: double): void
                public quadTo(arg0: double, arg1: double, arg2: double, arg3: double): void
                public curveTo(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): void
                public closePath(): void
                public append(arg0: java.awt.Shape, arg1: boolean): void
                public append(arg0: java.awt.geom.PathIterator, arg1: boolean): void
                public getWindingRule(): int
                public setWindingRule(arg0: int): void
                public getCurrentPoint(): java.awt.geom.Point2D
                public reset(): void
                public transform(arg0: java.awt.geom.AffineTransform): void
                public createTransformedShape(arg0: java.awt.geom.AffineTransform): java.awt.Shape
                public getBounds(): java.awt.Rectangle
                public static contains(arg0: java.awt.geom.PathIterator, arg1: double, arg2: double): boolean
                public static contains(arg0: java.awt.geom.PathIterator, arg1: java.awt.geom.Point2D): boolean
                public contains(arg0: double, arg1: double): boolean
                public contains(arg0: java.awt.geom.Point2D): boolean
                public static contains(arg0: java.awt.geom.PathIterator, arg1: double, arg2: double, arg3: double, arg4: double): boolean
                public static contains(arg0: java.awt.geom.PathIterator, arg1: java.awt.geom.Rectangle2D): boolean
                public contains(arg0: double, arg1: double, arg2: double, arg3: double): boolean
                public contains(arg0: java.awt.geom.Rectangle2D): boolean
                public static intersects(arg0: java.awt.geom.PathIterator, arg1: double, arg2: double, arg3: double, arg4: double): boolean
                public static intersects(arg0: java.awt.geom.PathIterator, arg1: java.awt.geom.Rectangle2D): boolean
                public intersects(arg0: double, arg1: double, arg2: double, arg3: double): boolean
                public intersects(arg0: java.awt.geom.Rectangle2D): boolean
                public getPathIterator(arg0: java.awt.geom.AffineTransform, arg1: double): java.awt.geom.PathIterator
                public clone(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}