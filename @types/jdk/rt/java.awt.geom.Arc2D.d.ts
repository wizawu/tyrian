declare namespace java {
    namespace awt {
        namespace geom {
            abstract class Arc2D extends java.awt.geom.RectangularShape {
                public static readonly OPEN: int
                public static readonly CHORD: int
                public static readonly PIE: int
                protected constructor()
                protected constructor(arg0: int)
                public abstract getAngleStart(): double
                public abstract getAngleExtent(): double
                public getArcType(): int
                public getStartPoint(): java.awt.geom.Point2D
                public getEndPoint(): java.awt.geom.Point2D
                public abstract setArc(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: int): void
                public setArc(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Dimension2D, arg2: double, arg3: double, arg4: int): void
                public setArc(arg0: java.awt.geom.Rectangle2D, arg1: double, arg2: double, arg3: int): void
                public setArc(arg0: java.awt.geom.Arc2D): void
                public setArcByCenter(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: int): void
                public setArcByTangent(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D, arg2: java.awt.geom.Point2D, arg3: double): void
                public abstract setAngleStart(arg0: double): void
                public abstract setAngleExtent(arg0: double): void
                public setAngleStart(arg0: java.awt.geom.Point2D): void
                public setAngles(arg0: double, arg1: double, arg2: double, arg3: double): void
                public setAngles(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D): void
                public setArcType(arg0: int): void
                public setFrame(arg0: double, arg1: double, arg2: double, arg3: double): void
                public getBounds2D(): java.awt.geom.Rectangle2D
                protected abstract makeBounds(arg0: double, arg1: double, arg2: double, arg3: double): java.awt.geom.Rectangle2D
                public containsAngle(arg0: double): boolean
                public contains(arg0: double, arg1: double): boolean
                public intersects(arg0: double, arg1: double, arg2: double, arg3: double): boolean
                public contains(arg0: double, arg1: double, arg2: double, arg3: double): boolean
                public contains(arg0: java.awt.geom.Rectangle2D): boolean
                public getPathIterator(arg0: java.awt.geom.AffineTransform): java.awt.geom.PathIterator
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}