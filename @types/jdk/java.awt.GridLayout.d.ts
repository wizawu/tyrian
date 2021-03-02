declare namespace java {
  namespace awt {

    class GridLayout implements java.awt.LayoutManager, java.io.Serializable {
      hgap: int
      vgap: int
      rows: int
      cols: int
      public constructor()
      public constructor(arg0: int, arg1: int)
      public constructor(arg0: int, arg1: int, arg2: int, arg3: int)
      public getRows(): int
      public setRows(arg0: int): void
      public getColumns(): int
      public setColumns(arg0: int): void
      public getHgap(): int
      public setHgap(arg0: int): void
      public getVgap(): int
      public setVgap(arg0: int): void
      public addLayoutComponent(arg0: java.lang.String, arg1: java.awt.Component): void
      public removeLayoutComponent(arg0: java.awt.Component): void
      public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public layoutContainer(arg0: java.awt.Container): void
      public toString(): java.lang.String
    }

  }
}
