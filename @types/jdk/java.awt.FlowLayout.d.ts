declare namespace java {
  namespace awt {

    class FlowLayout implements java.awt.LayoutManager, java.io.Serializable {
      public static readonly LEFT: int
      public static readonly CENTER: int
      public static readonly RIGHT: int
      public static readonly LEADING: int
      public static readonly TRAILING: int
      align: int
      newAlign: int
      hgap: int
      vgap: int
      public constructor()
      public constructor(arg0: number | java.lang.Integer)
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
      public getAlignment(): number
      public setAlignment(arg0: number | java.lang.Integer): void
      public getHgap(): number
      public setHgap(arg0: number | java.lang.Integer): void
      public getVgap(): number
      public setVgap(arg0: number | java.lang.Integer): void
      public setAlignOnBaseline(arg0: boolean | java.lang.Boolean): void
      public getAlignOnBaseline(): boolean
      public addLayoutComponent(arg0: java.lang.String | string, arg1: java.awt.Component): void
      public removeLayoutComponent(arg0: java.awt.Component): void
      public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public layoutContainer(arg0: java.awt.Container): void
      public toString(): java.lang.String
    }

  }
}
