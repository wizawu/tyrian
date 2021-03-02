declare namespace javax {
  namespace swing {
    namespace border {

      interface Border {
        paintBorder(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): void
        getBorderInsets(arg0: java.awt.Component): java.awt.Insets
        isBorderOpaque(): boolean
      }

    }
  }
}
