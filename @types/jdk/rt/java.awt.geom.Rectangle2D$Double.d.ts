declare namespace java {
    namespace awt {
        namespace geom {
            class Rectangle2D$Double extends java.awt.geom.Rectangle2D implements java.io.Serializable {
                public x: double
                public y: double
                public width: double
                public height: double
                public constructor()
                public constructor(arg0: double, arg1: double, arg2: double, arg3: double)
                public getX(): double
                public getY(): double
                public getWidth(): double
                public getHeight(): double
                public isEmpty(): boolean
                public setRect(arg0: double, arg1: double, arg2: double, arg3: double): void
                public setRect(arg0: java.awt.geom.Rectangle2D): void
                public outcode(arg0: double, arg1: double): int
                public getBounds2D(): java.awt.geom.Rectangle2D
                public createIntersection(arg0: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D
                public createUnion(arg0: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}