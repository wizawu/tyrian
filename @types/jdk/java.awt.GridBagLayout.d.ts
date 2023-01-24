declare namespace java {
  namespace awt {
    class GridBagLayout implements java.awt.LayoutManager2, java.io.Serializable {
      static readonly EMPIRICMULTIPLIER: int
      protected static readonly MAXGRIDSIZE: int
      protected static readonly MINSIZE: int
      protected static readonly PREFERREDSIZE: int
      protected comptable: java.util.Hashtable<java.awt.Component, java.awt.GridBagConstraints>
      protected defaultConstraints: java.awt.GridBagConstraints
      protected layoutInfo: java.awt.GridBagLayoutInfo
      public columnWidths: int[]
      public rowHeights: int[]
      public columnWeights: double[]
      public rowWeights: double[]
      rightToLeft: boolean
      static readonly serialVersionUID: long
      public constructor()
      public setConstraints(arg0: java.awt.Component, arg1: java.awt.GridBagConstraints): void
      public getConstraints(arg0: java.awt.Component): java.awt.GridBagConstraints
      protected lookupConstraints(arg0: java.awt.Component): java.awt.GridBagConstraints
      public getLayoutOrigin(): java.awt.Point
      public getLayoutDimensions(): number[][]
      public getLayoutWeights(): number[][]
      public location(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.Point
      public addLayoutComponent(arg0: java.lang.String | string, arg1: java.awt.Component): void
      public addLayoutComponent(arg0: java.awt.Component, arg1: java.lang.Object | any): void
      public removeLayoutComponent(arg0: java.awt.Component): void
      public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public maximumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public getLayoutAlignmentX(arg0: java.awt.Container): number
      public getLayoutAlignmentY(arg0: java.awt.Container): number
      public invalidateLayout(arg0: java.awt.Container): void
      public layoutContainer(arg0: java.awt.Container): void
      public toString(): java.lang.String
      protected getLayoutInfo(arg0: java.awt.Container, arg1: number | java.lang.Integer): java.awt.GridBagLayoutInfo
      protected GetLayoutInfo(arg0: java.awt.Container, arg1: number | java.lang.Integer): java.awt.GridBagLayoutInfo
      protected adjustForGravity(arg0: java.awt.GridBagConstraints, arg1: java.awt.Rectangle): void
      protected AdjustForGravity(arg0: java.awt.GridBagConstraints, arg1: java.awt.Rectangle): void
      protected getMinSize(arg0: java.awt.Container, arg1: java.awt.GridBagLayoutInfo): java.awt.Dimension
      protected GetMinSize(arg0: java.awt.Container, arg1: java.awt.GridBagLayoutInfo): java.awt.Dimension
      protected arrangeGrid(arg0: java.awt.Container): void
      protected ArrangeGrid(arg0: java.awt.Container): void
    }
  }
}
