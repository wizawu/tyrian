declare namespace java {
    namespace awt {
        class Point extends java.awt.geom.Point2D implements java.io.Serializable {
            public x: int
            public y: int
            public constructor()
            public constructor(arg0: java.awt.Point)
            public constructor(arg0: int, arg1: int)
            public getX(): double
            public getY(): double
            public getLocation(): java.awt.Point
            public setLocation(arg0: java.awt.Point): void
            public setLocation(arg0: int, arg1: int): void
            public setLocation(arg0: double, arg1: double): void
            public move(arg0: int, arg1: int): void
            public translate(arg0: int, arg1: int): void
            public equals(arg0: java.lang.Object): boolean
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}