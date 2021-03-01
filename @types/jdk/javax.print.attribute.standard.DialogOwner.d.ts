declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {

        class DialogOwner implements javax.print.attribute.PrintRequestAttribute {

          public constructor()
          public constructor(arg0: java.awt.Window)
          constructor(arg0: long)
          getID(): long
          public getOwner(): java.awt.Window
          public readonly getCategory(): java.lang.Class<javax.print.attribute.Attribute>
          public readonly getName(): java.lang.String
        }

      }
    }
  }
}
