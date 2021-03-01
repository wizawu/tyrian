declare namespace javax {
  namespace swing {
    namespace border {

      class TitledBorder extends javax.swing.border.AbstractBorder {

        protected title: java.lang.String
        protected border: javax.swing.border.Border
        protected titlePosition: int
        protected titleJustification: int
        protected titleFont: java.awt.Font
        protected titleColor: java.awt.Color
        public static readonly DEFAULT_POSITION: int
        public static readonly ABOVE_TOP: int
        public static readonly TOP: int
        public static readonly BELOW_TOP: int
        public static readonly ABOVE_BOTTOM: int
        public static readonly BOTTOM: int
        public static readonly BELOW_BOTTOM: int
        public static readonly DEFAULT_JUSTIFICATION: int
        public static readonly LEFT: int
        public static readonly CENTER: int
        public static readonly RIGHT: int
        public static readonly LEADING: int
        public static readonly TRAILING: int
        protected static readonly EDGE_SPACING: int
        protected static readonly TEXT_SPACING: int
        protected static readonly TEXT_INSET_H: int
        public constructor(arg0: java.lang.String)
        public constructor(arg0: javax.swing.border.Border)
        public constructor(arg0: javax.swing.border.Border, arg1: java.lang.String)
        public constructor(arg0: javax.swing.border.Border, arg1: java.lang.String, arg2: int, arg3: int)
        public constructor(arg0: javax.swing.border.Border, arg1: java.lang.String, arg2: int, arg3: int, arg4: java.awt.Font)
        public constructor(arg0: javax.swing.border.Border, arg1: java.lang.String, arg2: int, arg3: int, arg4: java.awt.Font, arg5: java.awt.Color)
        public paintBorder(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
        public getBorderInsets(arg0: java.awt.Component, arg1: java.awt.Insets): java.awt.Insets
        public isBorderOpaque(): boolean
        public getTitle(): java.lang.String
        public getBorder(): javax.swing.border.Border
        public getTitlePosition(): int
        public getTitleJustification(): int
        public getTitleFont(): java.awt.Font
        public getTitleColor(): java.awt.Color
        public setTitle(arg0: java.lang.String): void
        public setBorder(arg0: javax.swing.border.Border): void
        public setTitlePosition(arg0: int): void
        public setTitleJustification(arg0: int): void
        public setTitleFont(arg0: java.awt.Font): void
        public setTitleColor(arg0: java.awt.Color): void
        public getMinimumSize(arg0: java.awt.Component): java.awt.Dimension
        public getBaseline(arg0: java.awt.Component, arg1: int, arg2: int): int
        public getBaselineResizeBehavior(arg0: java.awt.Component): java.awt.Component$BaselineResizeBehavior
        protected getFont(arg0: java.awt.Component): java.awt.Font
      }

    }
  }
}
