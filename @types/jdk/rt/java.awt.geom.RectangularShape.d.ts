declare namespace java {
    namespace awt {
        namespace geom {
            abstract class RectangularShape implements java.awt.Shape , java.lang.Cloneable {
                protected constructor()
                public abstract getX(): double
                public abstract getY(): double
                public abstract getWidth(): double
                public abstract getHeight(): double
                public getMinX(): double
                public getMinY(): double
                public getMaxX(): double
                public getMaxY(): double
                public getCenterX(): double
                public getCenterY(): double
                public getFrame(): java.awt.geom.Rectangle2D
                public abstract isEmpty(): boolean
                public abstract setFrame(arg0: double, arg1: double, arg2: double, arg3: double): void
                public setFrame(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Dimension2D): void
                public setFrame(arg0: java.awt.geom.Rectangle2D): void
                public setFrameFromDiagonal(arg0: double, arg1: double, arg2: double, arg3: double): void
                public setFrameFromDiagonal(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D): void
                public setFrameFromCenter(arg0: double, arg1: double, arg2: double, arg3: double): void
                public setFrameFromCenter(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D): void
                public contains(arg0: java.awt.geom.Point2D): boolean
                public intersects(arg0: java.awt.geom.Rectangle2D): boolean
                public contains(arg0: java.awt.geom.Rectangle2D): boolean
                public getBounds(): java.awt.Rectangle
                public getPathIterator(arg0: java.awt.geom.AffineTransform, arg1: double): java.awt.geom.PathIterator
                public clone(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}