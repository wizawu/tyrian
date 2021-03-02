declare namespace javax {
  namespace swing {
    namespace border {

      class EtchedBorder extends javax.swing.border.AbstractBorder {
        public static readonly RAISED: int
        public static readonly LOWERED: int
        protected etchType: int
        protected highlight: java.awt.Color
        protected shadow: java.awt.Color
        public constructor()
        public constructor(arg0: number | java.lang.Integer)
        public constructor(arg0: java.awt.Color, arg1: java.awt.Color)
        public constructor(arg0: number | java.lang.Integer, arg1: java.awt.Color, arg2: java.awt.Color)
        public paintBorder(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): void
        public getBorderInsets(arg0: java.awt.Component, arg1: java.awt.Insets): java.awt.Insets
        public isBorderOpaque(): boolean
        public getEtchType(): number
        public getHighlightColor(arg0: java.awt.Component): java.awt.Color
        public getHighlightColor(): java.awt.Color
        public getShadowColor(arg0: java.awt.Component): java.awt.Color
        public getShadowColor(): java.awt.Color
      }

    }
  }
}
