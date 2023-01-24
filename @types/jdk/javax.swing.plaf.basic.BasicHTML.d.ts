declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {
        class BasicHTML {
          public static readonly propertyKey: java.lang.String
          public static readonly documentBaseKey: java.lang.String
          public constructor()
          public static createHTMLView(
            arg0: javax.swing.JComponent,
            arg1: java.lang.String | string
          ): javax.swing.text.View
          public static getHTMLBaseline(
            arg0: javax.swing.text.View,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer
          ): number
          static getBaseline(
            arg0: javax.swing.JComponent,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer,
            arg4: number | java.lang.Integer
          ): number
          static getBaseline(
            arg0: javax.swing.text.View,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer
          ): number
          public static isHTMLString(arg0: java.lang.String | string): boolean
          public static updateRenderer(arg0: javax.swing.JComponent, arg1: java.lang.String | string): void
          static getFactory(): javax.swing.plaf.basic.BasicHTML$BasicEditorKit
        }
      }
    }
  }
}
