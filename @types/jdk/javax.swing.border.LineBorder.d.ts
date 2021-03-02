declare namespace javax {
  namespace swing {
    namespace border {

      class LineBorder extends javax.swing.border.AbstractBorder {
        protected thickness: int
        protected lineColor: java.awt.Color
        protected roundedCorners: boolean
        public static createBlackLineBorder(): javax.swing.border.Border
        public static createGrayLineBorder(): javax.swing.border.Border
        public constructor(arg0: java.awt.Color)
        public constructor(arg0: java.awt.Color, arg1: number | java.lang.Integer)
        public constructor(arg0: java.awt.Color, arg1: number | java.lang.Integer, arg2: boolean | java.lang.Boolean)
        public paintBorder(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): void
        public getBorderInsets(arg0: java.awt.Component, arg1: java.awt.Insets): java.awt.Insets
        public getLineColor(): java.awt.Color
        public getThickness(): number
        public getRoundedCorners(): boolean
        public isBorderOpaque(): boolean
      }

    }
  }
}
