declare namespace java {
  namespace awt {

    class CardLayout implements java.awt.LayoutManager2, java.io.Serializable {
      vector: java.util.Vector<java.awt.CardLayout$Card>
      currentCard: int
      hgap: int
      vgap: int
      public constructor()
      public constructor(arg0: int, arg1: int)
      public getHgap(): int
      public setHgap(arg0: int): void
      public getVgap(): int
      public setVgap(arg0: int): void
      public addLayoutComponent(arg0: java.awt.Component, arg1: java.lang.Object): void
      public addLayoutComponent(arg0: java.lang.String, arg1: java.awt.Component): void
      public removeLayoutComponent(arg0: java.awt.Component): void
      public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public maximumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public getLayoutAlignmentX(arg0: java.awt.Container): float
      public getLayoutAlignmentY(arg0: java.awt.Container): float
      public invalidateLayout(arg0: java.awt.Container): void
      public layoutContainer(arg0: java.awt.Container): void
      checkLayout(arg0: java.awt.Container): void
      public first(arg0: java.awt.Container): void
      public next(arg0: java.awt.Container): void
      public previous(arg0: java.awt.Container): void
      showDefaultComponent(arg0: java.awt.Container): void
      public last(arg0: java.awt.Container): void
      public show(arg0: java.awt.Container, arg1: java.lang.String): void
      public toString(): java.lang.String
    }

  }
}
