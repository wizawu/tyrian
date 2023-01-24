declare namespace javax {
  namespace swing {
    namespace border {
      class BevelBorder extends javax.swing.border.AbstractBorder {
        public static readonly RAISED: int
        public static readonly LOWERED: int
        protected bevelType: int
        protected highlightOuter: java.awt.Color
        protected highlightInner: java.awt.Color
        protected shadowInner: java.awt.Color
        protected shadowOuter: java.awt.Color
        public constructor(arg0: number | java.lang.Integer)
        public constructor(arg0: number | java.lang.Integer, arg1: java.awt.Color, arg2: java.awt.Color)
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: java.awt.Color,
          arg2: java.awt.Color,
          arg3: java.awt.Color,
          arg4: java.awt.Color
        )
        public paintBorder(
          arg0: java.awt.Component,
          arg1: java.awt.Graphics,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer
        ): void
        public getBorderInsets(arg0: java.awt.Component, arg1: java.awt.Insets): java.awt.Insets
        public getHighlightOuterColor(arg0: java.awt.Component): java.awt.Color
        public getHighlightInnerColor(arg0: java.awt.Component): java.awt.Color
        public getShadowInnerColor(arg0: java.awt.Component): java.awt.Color
        public getShadowOuterColor(arg0: java.awt.Component): java.awt.Color
        public getHighlightOuterColor(): java.awt.Color
        public getHighlightInnerColor(): java.awt.Color
        public getShadowInnerColor(): java.awt.Color
        public getShadowOuterColor(): java.awt.Color
        public getBevelType(): number
        public isBorderOpaque(): boolean
        protected paintRaisedBevel(
          arg0: java.awt.Component,
          arg1: java.awt.Graphics,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer
        ): void
        protected paintLoweredBevel(
          arg0: java.awt.Component,
          arg1: java.awt.Graphics,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer
        ): void
      }
    }
  }
}
