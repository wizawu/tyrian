declare namespace java {
    namespace awt {
        namespace geom {
            abstract class Rectangle2D extends java.awt.geom.RectangularShape {
                public static OUT_LEFT: int
                public static OUT_TOP: int
                public static OUT_RIGHT: int
                public static OUT_BOTTOM: int
                protected constructor()
                public setRect(arg0: double, arg1: double, arg2: double, arg3: double): void
                public setRect(arg0: java.awt.geom.Rectangle2D): void
                public intersectsLine(arg0: double, arg1: double, arg2: double, arg3: double): boolean
                public intersectsLine(arg0: java.awt.geom.Line2D): boolean
                public outcode(arg0: double, arg1: double): int
                public outcode(arg0: java.awt.geom.Point2D): int
                public setFrame(arg0: double, arg1: double, arg2: double, arg3: double): void
                public getBounds2D(): java.awt.geom.Rectangle2D
                public contains(arg0: double, arg1: double): boolean
                public intersects(arg0: double, arg1: double, arg2: double, arg3: double): boolean
                public contains(arg0: double, arg1: double, arg2: double, arg3: double): boolean
                public createIntersection(arg0: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D
                public static intersect(arg0: java.awt.geom.Rectangle2D, arg1: java.awt.geom.Rectangle2D, arg2: java.awt.geom.Rectangle2D): void
                public createUnion(arg0: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D
                public static union(arg0: java.awt.geom.Rectangle2D, arg1: java.awt.geom.Rectangle2D, arg2: java.awt.geom.Rectangle2D): void
                public add(arg0: double, arg1: double): void
                public add(arg0: java.awt.geom.Point2D): void
                public add(arg0: java.awt.geom.Rectangle2D): void
                public getPathIterator(arg0: java.awt.geom.AffineTransform): java.awt.geom.PathIterator
                public getPathIterator(arg0: java.awt.geom.AffineTransform, arg1: double): java.awt.geom.PathIterator
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}