declare namespace java {
  namespace awt {

    class Dimension extends java.awt.geom.Dimension2D implements java.io.Serializable {

      public width: int
      public height: int
      public constructor()
      public constructor(arg0: java.awt.Dimension)
      public constructor(arg0: int, arg1: int)
      public getWidth(): double
      public getHeight(): double
      public setSize(arg0: double, arg1: double): void
      public getSize(): java.awt.Dimension
      public setSize(arg0: java.awt.Dimension): void
      public setSize(arg0: int, arg1: int): void
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public toString(): java.lang.String
    }

  }
}
