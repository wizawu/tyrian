declare namespace java {
  namespace awt {
    class Point extends java.awt.geom.Point2D implements java.io.Serializable {
      public x: int
      public y: int
      public constructor()
      public constructor(arg0: java.awt.Point)
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
      public getX(): number
      public getY(): number
      public getLocation(): java.awt.Point
      public setLocation(arg0: java.awt.Point): void
      public setLocation(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public setLocation(arg0: number | java.lang.Double, arg1: number | java.lang.Double): void
      public move(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public translate(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public equals(arg0: java.lang.Object | any): boolean
      public toString(): java.lang.String
    }
  }
}
