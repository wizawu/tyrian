declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        class BasicHTML {

          public static readonly propertyKey: java.lang.String
          public static readonly documentBaseKey: java.lang.String
          public constructor()
          public static createHTMLView(arg0: javax.swing.JComponent, arg1: java.lang.String): javax.swing.text.View
          public static getHTMLBaseline(arg0: javax.swing.text.View, arg1: int, arg2: int): int
          static getBaseline(arg0: javax.swing.JComponent, arg1: int, arg2: int, arg3: int, arg4: int): int
          static getBaseline(arg0: javax.swing.text.View, arg1: int, arg2: int): int
          public static isHTMLString(arg0: java.lang.String): boolean
          public static updateRenderer(arg0: javax.swing.JComponent, arg1: java.lang.String): void
          static getFactory(): javax.swing.plaf.basic.BasicHTML$BasicEditorKit
        }

      }
    }
  }
}
