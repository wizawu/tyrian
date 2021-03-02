declare namespace java {
  namespace awt {

    class BorderLayout implements java.awt.LayoutManager2, java.io.Serializable {
      hgap: int
      vgap: int
      north: java.awt.Component
      west: java.awt.Component
      east: java.awt.Component
      south: java.awt.Component
      center: java.awt.Component
      firstLine: java.awt.Component
      lastLine: java.awt.Component
      firstItem: java.awt.Component
      lastItem: java.awt.Component
      public static readonly NORTH: java.lang.String
      public static readonly SOUTH: java.lang.String
      public static readonly EAST: java.lang.String
      public static readonly WEST: java.lang.String
      public static readonly CENTER: java.lang.String
      public static readonly BEFORE_FIRST_LINE: java.lang.String
      public static readonly AFTER_LAST_LINE: java.lang.String
      public static readonly BEFORE_LINE_BEGINS: java.lang.String
      public static readonly AFTER_LINE_ENDS: java.lang.String
      public static readonly PAGE_START: java.lang.String
      public static readonly PAGE_END: java.lang.String
      public static readonly LINE_START: java.lang.String
      public static readonly LINE_END: java.lang.String
      public constructor()
      public constructor(arg0: int, arg1: int)
      public getHgap(): int
      public setHgap(arg0: int): void
      public getVgap(): int
      public setVgap(arg0: int): void
      public addLayoutComponent(arg0: java.awt.Component, arg1: java.lang.Object): void
      public addLayoutComponent(arg0: java.lang.String, arg1: java.awt.Component): void
      public removeLayoutComponent(arg0: java.awt.Component): void
      public getLayoutComponent(arg0: java.lang.Object): java.awt.Component
      public getLayoutComponent(arg0: java.awt.Container, arg1: java.lang.Object): java.awt.Component
      public getConstraints(arg0: java.awt.Component): java.lang.Object
      public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public maximumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public getLayoutAlignmentX(arg0: java.awt.Container): float
      public getLayoutAlignmentY(arg0: java.awt.Container): float
      public invalidateLayout(arg0: java.awt.Container): void
      public layoutContainer(arg0: java.awt.Container): void
      public toString(): java.lang.String
    }

  }
}
