declare namespace javax {
  namespace swing {
    namespace plaf {
      class BorderUIResource implements javax.swing.border.Border, javax.swing.plaf.UIResource, java.io.Serializable {
        static etched: javax.swing.border.Border
        static loweredBevel: javax.swing.border.Border
        static raisedBevel: javax.swing.border.Border
        static blackLine: javax.swing.border.Border
        public static getEtchedBorderUIResource(): javax.swing.border.Border
        public static getLoweredBevelBorderUIResource(): javax.swing.border.Border
        public static getRaisedBevelBorderUIResource(): javax.swing.border.Border
        public static getBlackLineBorderUIResource(): javax.swing.border.Border
        public constructor(arg0: javax.swing.border.Border)
        public paintBorder(
          arg0: java.awt.Component,
          arg1: java.awt.Graphics,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer
        ): void
        public getBorderInsets(arg0: java.awt.Component): java.awt.Insets
        public isBorderOpaque(): boolean
      }
    }
  }
}
