declare namespace java {
  namespace awt {
    class CardLayout implements java.awt.LayoutManager2, java.io.Serializable {
      vector: java.util.Vector<java.awt.CardLayout$Card>
      currentCard: int
      hgap: int
      vgap: int
      public constructor()
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
      public getHgap(): number
      public setHgap(arg0: number | java.lang.Integer): void
      public getVgap(): number
      public setVgap(arg0: number | java.lang.Integer): void
      public addLayoutComponent(arg0: java.awt.Component, arg1: java.lang.Object | any): void
      public addLayoutComponent(arg0: java.lang.String | string, arg1: java.awt.Component): void
      public removeLayoutComponent(arg0: java.awt.Component): void
      public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public maximumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public getLayoutAlignmentX(arg0: java.awt.Container): number
      public getLayoutAlignmentY(arg0: java.awt.Container): number
      public invalidateLayout(arg0: java.awt.Container): void
      public layoutContainer(arg0: java.awt.Container): void
      checkLayout(arg0: java.awt.Container): void
      public first(arg0: java.awt.Container): void
      public next(arg0: java.awt.Container): void
      public previous(arg0: java.awt.Container): void
      showDefaultComponent(arg0: java.awt.Container): void
      public last(arg0: java.awt.Container): void
      public show(arg0: java.awt.Container, arg1: java.lang.String | string): void
      public toString(): java.lang.String
    }
  }
}
