declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        class BasicOptionPaneUI$ButtonAreaLayout implements java.awt.LayoutManager {
          protected syncAllWidths: boolean
          protected padding: int
          protected centersChildren: boolean
          public constructor(arg0: boolean, arg1: int)
          constructor(arg0: boolean, arg1: int, arg2: int, arg3: boolean)
          public setSyncAllWidths(arg0: boolean): void
          public getSyncAllWidths(): boolean
          public setPadding(arg0: int): void
          public getPadding(): int
          public setCentersChildren(arg0: boolean): void
          public getCentersChildren(): boolean
          public addLayoutComponent(arg0: java.lang.String, arg1: java.awt.Component): void
          public layoutContainer(arg0: java.awt.Container): void
          public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
          public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
          public removeLayoutComponent(arg0: java.awt.Component): void
        }

      }
    }
  }
}
