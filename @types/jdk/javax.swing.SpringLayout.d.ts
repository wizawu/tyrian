declare namespace javax {
  namespace swing {

    class SpringLayout implements java.awt.LayoutManager2 {
      public static readonly NORTH: java.lang.String
      public static readonly SOUTH: java.lang.String
      public static readonly EAST: java.lang.String
      public static readonly WEST: java.lang.String
      public static readonly HORIZONTAL_CENTER: java.lang.String
      public static readonly VERTICAL_CENTER: java.lang.String
      public static readonly BASELINE: java.lang.String
      public static readonly WIDTH: java.lang.String
      public static readonly HEIGHT: java.lang.String
      public constructor()
      isCyclic(arg0: javax.swing.Spring): boolean
      public addLayoutComponent(arg0: java.lang.String | string, arg1: java.awt.Component): void
      public removeLayoutComponent(arg0: java.awt.Component): void
      public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public maximumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public addLayoutComponent(arg0: java.awt.Component, arg1: java.lang.Object | any): void
      public getLayoutAlignmentX(arg0: java.awt.Container): number
      public getLayoutAlignmentY(arg0: java.awt.Container): number
      public invalidateLayout(arg0: java.awt.Container): void
      public putConstraint(arg0: java.lang.String | string, arg1: java.awt.Component, arg2: number | java.lang.Integer, arg3: java.lang.String | string, arg4: java.awt.Component): void
      public putConstraint(arg0: java.lang.String | string, arg1: java.awt.Component, arg2: javax.swing.Spring, arg3: java.lang.String | string, arg4: java.awt.Component): void
      public getConstraints(arg0: java.awt.Component): javax.swing.SpringLayout$Constraints
      public getConstraint(arg0: java.lang.String | string, arg1: java.awt.Component): javax.swing.Spring
      public layoutContainer(arg0: java.awt.Container): void
    }

  }
}
