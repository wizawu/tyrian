declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        class BasicOptionPaneUI$ButtonAreaLayout implements java.awt.LayoutManager {
          protected syncAllWidths: boolean
          protected padding: int
          protected centersChildren: boolean
          public constructor(arg0: boolean | java.lang.Boolean, arg1: number | java.lang.Integer)
          constructor(arg0: boolean | java.lang.Boolean, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: boolean | java.lang.Boolean)
          public setSyncAllWidths(arg0: boolean | java.lang.Boolean): void
          public getSyncAllWidths(): boolean
          public setPadding(arg0: number | java.lang.Integer): void
          public getPadding(): number
          public setCentersChildren(arg0: boolean | java.lang.Boolean): void
          public getCentersChildren(): boolean
          public addLayoutComponent(arg0: java.lang.String | string, arg1: java.awt.Component): void
          public layoutContainer(arg0: java.awt.Container): void
          public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
          public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
          public removeLayoutComponent(arg0: java.awt.Component): void
        }

      }
    }
  }
}
