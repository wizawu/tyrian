declare namespace java {
  namespace awt {

    class Rectangle extends java.awt.geom.Rectangle2D implements java.awt.Shape, java.io.Serializable {
      public x: int
      public y: int
      public width: int
      public height: int
      public constructor()
      public constructor(arg0: java.awt.Rectangle)
      public constructor(arg0: int, arg1: int, arg2: int, arg3: int)
      public constructor(arg0: int, arg1: int)
      public constructor(arg0: java.awt.Point, arg1: java.awt.Dimension)
      public constructor(arg0: java.awt.Point)
      public constructor(arg0: java.awt.Dimension)
      public getX(): double
      public getY(): double
      public getWidth(): double
      public getHeight(): double
      public getBounds(): java.awt.Rectangle
      public getBounds2D(): java.awt.geom.Rectangle2D
      public setBounds(arg0: java.awt.Rectangle): void
      public setBounds(arg0: int, arg1: int, arg2: int, arg3: int): void
      public setRect(arg0: double, arg1: double, arg2: double, arg3: double): void
      public reshape(arg0: int, arg1: int, arg2: int, arg3: int): void
      public getLocation(): java.awt.Point
      public setLocation(arg0: java.awt.Point): void
      public setLocation(arg0: int, arg1: int): void
      public move(arg0: int, arg1: int): void
      public translate(arg0: int, arg1: int): void
      public getSize(): java.awt.Dimension
      public setSize(arg0: java.awt.Dimension): void
      public setSize(arg0: int, arg1: int): void
      public resize(arg0: int, arg1: int): void
      public contains(arg0: java.awt.Point): boolean
      public contains(arg0: int, arg1: int): boolean
      public contains(arg0: java.awt.Rectangle): boolean
      public contains(arg0: int, arg1: int, arg2: int, arg3: int): boolean
      public inside(arg0: int, arg1: int): boolean
      public intersects(arg0: java.awt.Rectangle): boolean
      public intersection(arg0: java.awt.Rectangle): java.awt.Rectangle
      public union(arg0: java.awt.Rectangle): java.awt.Rectangle
      public add(arg0: int, arg1: int): void
      public add(arg0: java.awt.Point): void
      public add(arg0: java.awt.Rectangle): void
      public grow(arg0: int, arg1: int): void
      public isEmpty(): boolean
      public outcode(arg0: double, arg1: double): int
      public createIntersection(arg0: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D
      public createUnion(arg0: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D
      public equals(arg0: java.lang.Object): boolean
      public toString(): java.lang.String
    }

  }
}
