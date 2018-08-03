declare namespace java {
    namespace awt {
        namespace geom {
            abstract class RoundRectangle2D extends java.awt.geom.RectangularShape {
                protected constructor()
                public abstract getArcWidth(): double
                public abstract getArcHeight(): double
                public abstract setRoundRect(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): void
                public setRoundRect(arg0: java.awt.geom.RoundRectangle2D): void
                public setFrame(arg0: double, arg1: double, arg2: double, arg3: double): void
                public contains(arg0: double, arg1: double): boolean
                public intersects(arg0: double, arg1: double, arg2: double, arg3: double): boolean
                public contains(arg0: double, arg1: double, arg2: double, arg3: double): boolean
                public getPathIterator(arg0: java.awt.geom.AffineTransform): java.awt.geom.PathIterator
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}