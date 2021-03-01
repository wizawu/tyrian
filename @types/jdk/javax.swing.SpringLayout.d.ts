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
      public addLayoutComponent(arg0: java.lang.String, arg1: java.awt.Component): void
      public removeLayoutComponent(arg0: java.awt.Component): void
      public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public maximumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public addLayoutComponent(arg0: java.awt.Component, arg1: java.lang.Object): void
      public getLayoutAlignmentX(arg0: java.awt.Container): float
      public getLayoutAlignmentY(arg0: java.awt.Container): float
      public invalidateLayout(arg0: java.awt.Container): void
      public putConstraint(arg0: java.lang.String, arg1: java.awt.Component, arg2: int, arg3: java.lang.String, arg4: java.awt.Component): void
      public putConstraint(arg0: java.lang.String, arg1: java.awt.Component, arg2: javax.swing.Spring, arg3: java.lang.String, arg4: java.awt.Component): void
      public getConstraints(arg0: java.awt.Component): javax.swing.SpringLayout$Constraints
      public getConstraint(arg0: java.lang.String, arg1: java.awt.Component): javax.swing.Spring
      public layoutContainer(arg0: java.awt.Container): void
    }

  }
}
