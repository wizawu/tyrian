declare namespace java {
  namespace awt {

    interface LayoutManager2 extends java.awt.LayoutManager {
      addLayoutComponent(arg0: java.awt.Component, arg1: java.lang.Object): void
      maximumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      getLayoutAlignmentX(arg0: java.awt.Container): float
      getLayoutAlignmentY(arg0: java.awt.Container): float
      invalidateLayout(arg0: java.awt.Container): void
    }

  }
}
