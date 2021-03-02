declare namespace javax {
  namespace swing {

    class ViewportLayout implements java.awt.LayoutManager, java.io.Serializable {
      static SHARED_INSTANCE: javax.swing.ViewportLayout
      public constructor()
      public addLayoutComponent(arg0: java.lang.String, arg1: java.awt.Component): void
      public removeLayoutComponent(arg0: java.awt.Component): void
      public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public layoutContainer(arg0: java.awt.Container): void
    }

  }
}
