declare namespace java {
  namespace awt {

    class Dimension extends java.awt.geom.Dimension2D implements java.io.Serializable {
      public width: int
      public height: int
      public constructor()
      public constructor(arg0: java.awt.Dimension)
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
      public getWidth(): number
      public getHeight(): number
      public setSize(arg0: number | java.lang.Double, arg1: number | java.lang.Double): void
      public getSize(): java.awt.Dimension
      public setSize(arg0: java.awt.Dimension): void
      public setSize(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toString(): java.lang.String
    }

  }
}
