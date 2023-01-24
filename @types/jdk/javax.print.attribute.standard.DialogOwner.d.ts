declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {
        class DialogOwner implements javax.print.attribute.PrintRequestAttribute {
          public constructor()
          public constructor(arg0: java.awt.Window)
          constructor(arg0: number | java.lang.Long)
          getID(): number
          public getOwner(): java.awt.Window
          public getCategory(): java.lang.Class<javax.print.attribute.Attribute>
          public getName(): java.lang.String
        }
      }
    }
  }
}
