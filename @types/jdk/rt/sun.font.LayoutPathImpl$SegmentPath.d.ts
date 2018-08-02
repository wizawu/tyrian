declare namespace sun {
    namespace font {
        class LayoutPathImpl$SegmentPath extends sun.font.LayoutPathImpl {
            public static get(arg0: sun.font.LayoutPathImpl$EndType, ...arg1: double[]): sun.font.LayoutPathImpl$SegmentPath
            public pathToPoint(arg0: java.awt.geom.Point2D, arg1: boolean, arg2: java.awt.geom.Point2D): void
            public pointToPath(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D): boolean
            public mapShape(arg0: java.awt.Shape): java.awt.Shape
            public start(): double
            public end(): double
            public length(): double
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}