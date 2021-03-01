declare namespace javax {
  namespace swing {

    class BoxLayout implements java.awt.LayoutManager2, java.io.Serializable {

      public static readonly X_AXIS: int
      public static readonly Y_AXIS: int
      public static readonly LINE_AXIS: int
      public static readonly PAGE_AXIS: int
      public constructor(arg0: java.awt.Container, arg1: int)
      constructor(arg0: java.awt.Container, arg1: int, arg2: java.io.PrintStream)
      public readonly getTarget(): java.awt.Container
      public readonly getAxis(): int
      public invalidateLayout(arg0: java.awt.Container): void
      public addLayoutComponent(arg0: java.lang.String, arg1: java.awt.Component): void
      public removeLayoutComponent(arg0: java.awt.Component): void
      public addLayoutComponent(arg0: java.awt.Component, arg1: java.lang.Object): void
      public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public maximumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public getLayoutAlignmentX(arg0: java.awt.Container): float
      public getLayoutAlignmentY(arg0: java.awt.Container): float
      public layoutContainer(arg0: java.awt.Container): void
      checkContainer(arg0: java.awt.Container): void
      checkRequests(): void
    }

  }
}
