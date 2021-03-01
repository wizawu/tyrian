declare namespace javax {
  namespace swing {
    namespace border {

      class CompoundBorder extends javax.swing.border.AbstractBorder {

        protected outsideBorder: javax.swing.border.Border
        protected insideBorder: javax.swing.border.Border
        public constructor()
        public constructor(arg0: javax.swing.border.Border, arg1: javax.swing.border.Border)
        public isBorderOpaque(): boolean
        public paintBorder(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
        public getBorderInsets(arg0: java.awt.Component, arg1: java.awt.Insets): java.awt.Insets
        public getOutsideBorder(): javax.swing.border.Border
        public getInsideBorder(): javax.swing.border.Border
      }

    }
  }
}
