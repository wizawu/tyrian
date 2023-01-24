declare namespace javax {
  namespace swing {
    namespace border {
      abstract class AbstractBorder implements javax.swing.border.Border, java.io.Serializable {
        public constructor()
        public paintBorder(
          arg0: java.awt.Component,
          arg1: java.awt.Graphics,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer
        ): void
        public getBorderInsets(arg0: java.awt.Component): java.awt.Insets
        public getBorderInsets(arg0: java.awt.Component, arg1: java.awt.Insets): java.awt.Insets
        public isBorderOpaque(): boolean
        public getInteriorRectangle(
          arg0: java.awt.Component,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer
        ): java.awt.Rectangle
        public static getInteriorRectangle(
          arg0: java.awt.Component,
          arg1: javax.swing.border.Border,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer
        ): java.awt.Rectangle
        public getBaseline(
          arg0: java.awt.Component,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): number
        public getBaselineResizeBehavior(arg0: java.awt.Component): java.awt.Component$BaselineResizeBehavior
        static isLeftToRight(arg0: java.awt.Component): boolean
      }
    }
  }
}
