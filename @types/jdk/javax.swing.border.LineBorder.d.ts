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
        public constructor(arg0: java.awt.Color, arg1: int)
        public constructor(arg0: java.awt.Color, arg1: int, arg2: boolean)
        public paintBorder(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
        public getBorderInsets(arg0: java.awt.Component, arg1: java.awt.Insets): java.awt.Insets
        public getLineColor(): java.awt.Color
        public getThickness(): int
        public getRoundedCorners(): boolean
        public isBorderOpaque(): boolean
      }

    }
  }
}
