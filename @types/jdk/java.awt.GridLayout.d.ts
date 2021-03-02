declare namespace java {
  namespace awt {

    class GridLayout implements java.awt.LayoutManager, java.io.Serializable {
      hgap: int
      vgap: int
      rows: int
      cols: int
      public constructor()
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
      public getRows(): number
      public setRows(arg0: number | java.lang.Integer): void
      public getColumns(): number
      public setColumns(arg0: number | java.lang.Integer): void
      public getHgap(): number
      public setHgap(arg0: number | java.lang.Integer): void
      public getVgap(): number
      public setVgap(arg0: number | java.lang.Integer): void
      public addLayoutComponent(arg0: java.lang.String | string, arg1: java.awt.Component): void
      public removeLayoutComponent(arg0: java.awt.Component): void
      public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public layoutContainer(arg0: java.awt.Container): void
      public toString(): java.lang.String
    }

  }
}
