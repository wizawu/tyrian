declare namespace javax {
  namespace swing {
    namespace border {

      class MatteBorder extends javax.swing.border.EmptyBorder {

        protected color: java.awt.Color
        protected tileIcon: javax.swing.Icon
        public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.Color)
        public constructor(arg0: java.awt.Insets, arg1: java.awt.Color)
        public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: javax.swing.Icon)
        public constructor(arg0: java.awt.Insets, arg1: javax.swing.Icon)
        public constructor(arg0: javax.swing.Icon)
        public paintBorder(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
        public getBorderInsets(arg0: java.awt.Component, arg1: java.awt.Insets): java.awt.Insets
        public getBorderInsets(): java.awt.Insets
        public getMatteColor(): java.awt.Color
        public getTileIcon(): javax.swing.Icon
        public isBorderOpaque(): boolean
      }

    }
  }
}
