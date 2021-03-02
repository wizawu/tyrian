declare namespace javax {
  namespace swing {

    class OverlayLayout implements java.awt.LayoutManager2, java.io.Serializable {
      public constructor(arg0: java.awt.Container)
      public getTarget(): java.awt.Container
      public invalidateLayout(arg0: java.awt.Container): void
      public addLayoutComponent(arg0: java.lang.String | string, arg1: java.awt.Component): void
      public removeLayoutComponent(arg0: java.awt.Component): void
      public addLayoutComponent(arg0: java.awt.Component, arg1: java.lang.Object | any): void
      public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public maximumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public getLayoutAlignmentX(arg0: java.awt.Container): number
      public getLayoutAlignmentY(arg0: java.awt.Container): number
      public layoutContainer(arg0: java.awt.Container): void
      checkContainer(arg0: java.awt.Container): void
      checkRequests(): void
    }

  }
}
