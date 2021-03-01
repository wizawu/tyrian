declare namespace javax {
  namespace swing {
    namespace border {

      class StrokeBorder extends javax.swing.border.AbstractBorder {

        public constructor(arg0: java.awt.BasicStroke)
        public constructor(arg0: java.awt.BasicStroke, arg1: java.awt.Paint)
        public paintBorder(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
        public getBorderInsets(arg0: java.awt.Component, arg1: java.awt.Insets): java.awt.Insets
        public getStroke(): java.awt.BasicStroke
        public getPaint(): java.awt.Paint
      }

    }
  }
}
