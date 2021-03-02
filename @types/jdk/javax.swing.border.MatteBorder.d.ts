declare namespace javax {
  namespace swing {
    namespace border {

      class MatteBorder extends javax.swing.border.EmptyBorder {
        protected color: java.awt.Color
        protected tileIcon: javax.swing.Icon
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: java.awt.Color)
        public constructor(arg0: java.awt.Insets, arg1: java.awt.Color)
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: javax.swing.Icon)
        public constructor(arg0: java.awt.Insets, arg1: javax.swing.Icon)
        public constructor(arg0: javax.swing.Icon)
        public paintBorder(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): void
        public getBorderInsets(arg0: java.awt.Component, arg1: java.awt.Insets): java.awt.Insets
        public getBorderInsets(): java.awt.Insets
        public getMatteColor(): java.awt.Color
        public getTileIcon(): javax.swing.Icon
        public isBorderOpaque(): boolean
      }

    }
  }
}
