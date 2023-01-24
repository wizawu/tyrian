declare namespace java {
  namespace awt {
    interface LayoutManager2 extends java.awt.LayoutManager {
      addLayoutComponent(arg0: java.awt.Component, arg1: java.lang.Object | any): void
      maximumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      getLayoutAlignmentX(arg0: java.awt.Container): number
      getLayoutAlignmentY(arg0: java.awt.Container): number
      invalidateLayout(arg0: java.awt.Container): void
    }
  }
}
