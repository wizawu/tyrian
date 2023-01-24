declare namespace javax {
  namespace swing {
    namespace border {
      class SoftBevelBorder extends javax.swing.border.BevelBorder {
        public constructor(arg0: number | java.lang.Integer)
        public constructor(arg0: number | java.lang.Integer, arg1: java.awt.Color, arg2: java.awt.Color)
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: java.awt.Color,
          arg2: java.awt.Color,
          arg3: java.awt.Color,
          arg4: java.awt.Color
        )
        public paintBorder(
          arg0: java.awt.Component,
          arg1: java.awt.Graphics,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer
        ): void
        public getBorderInsets(arg0: java.awt.Component, arg1: java.awt.Insets): java.awt.Insets
        public isBorderOpaque(): boolean
      }
    }
  }
}
