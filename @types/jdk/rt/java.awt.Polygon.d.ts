declare namespace java {
    namespace awt {
        class Polygon implements java.awt.Shape , java.io.Serializable {
            public npoints: int
            public xpoints: int[]
            public ypoints: int[]
            protected bounds: java.awt.Rectangle
            public constructor()
            public constructor(arg0: int[], arg1: int[], arg2: int)
            public reset(): void
            public invalidate(): void
            public translate(arg0: int, arg1: int): void
            public addPoint(arg0: int, arg1: int): void
            public getBounds(): java.awt.Rectangle
            public getBoundingBox(): java.awt.Rectangle
            public contains(arg0: java.awt.Point): boolean
            public contains(arg0: int, arg1: int): boolean
            public inside(arg0: int, arg1: int): boolean
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