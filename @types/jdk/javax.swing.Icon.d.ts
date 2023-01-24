declare namespace javax {
  namespace swing {
    interface Icon {
      paintIcon(
        arg0: java.awt.Component,
        arg1: java.awt.Graphics,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      ): void
      getIconWidth(): number
      getIconHeight(): number
    }
  }
}
