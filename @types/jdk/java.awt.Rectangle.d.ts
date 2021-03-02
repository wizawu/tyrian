declare namespace java {
  namespace awt {

    class Rectangle extends java.awt.geom.Rectangle2D implements java.awt.Shape, java.io.Serializable {
      public x: int
      public y: int
      public width: int
      public height: int
      public constructor()
      public constructor(arg0: java.awt.Rectangle)
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
      public constructor(arg0: java.awt.Point, arg1: java.awt.Dimension)
      public constructor(arg0: java.awt.Point)
      public constructor(arg0: java.awt.Dimension)
      public getX(): number
      public getY(): number
      public getWidth(): number
      public getHeight(): number
      public getBounds(): java.awt.Rectangle
      public getBounds2D(): java.awt.geom.Rectangle2D
      public setBounds(arg0: java.awt.Rectangle): void
      public setBounds(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      public setRect(arg0: number | java.lang.Double, arg1: number | java.lang.Double, arg2: number | java.lang.Double, arg3: number | java.lang.Double): void
      public reshape(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      public getLocation(): java.awt.Point
      public setLocation(arg0: java.awt.Point): void
      public setLocation(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public move(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public translate(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public getSize(): java.awt.Dimension
      public setSize(arg0: java.awt.Dimension): void
      public setSize(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public resize(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public contains(arg0: java.awt.Point): boolean
      public contains(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): boolean
      public contains(arg0: java.awt.Rectangle): boolean
      public contains(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): boolean
      public inside(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): boolean
      public intersects(arg0: java.awt.Rectangle): boolean
      public intersection(arg0: java.awt.Rectangle): java.awt.Rectangle
      public union(arg0: java.awt.Rectangle): java.awt.Rectangle
      public add(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public add(arg0: java.awt.Point): void
      public add(arg0: java.awt.Rectangle): void
      public grow(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public isEmpty(): boolean
      public outcode(arg0: number | java.lang.Double, arg1: number | java.lang.Double): number
      public createIntersection(arg0: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D
      public createUnion(arg0: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D
      public equals(arg0: java.lang.Object | any): boolean
      public toString(): java.lang.String
    }

  }
}
