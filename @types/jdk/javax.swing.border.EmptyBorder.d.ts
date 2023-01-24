declare namespace javax {
  namespace swing {
    namespace border {
      class EmptyBorder extends javax.swing.border.AbstractBorder implements java.io.Serializable {
        protected left: int
        protected right: int
        protected top: int
        protected bottom: int
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        )
        public constructor(arg0: java.awt.Insets)
        public paintBorder(
          arg0: java.awt.Component,
          arg1: java.awt.Graphics,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer
        ): void
        public getBorderInsets(arg0: java.awt.Component, arg1: java.awt.Insets): java.awt.Insets
        public getBorderInsets(): java.awt.Insets
        public isBorderOpaque(): boolean
      }
    }
  }
}
