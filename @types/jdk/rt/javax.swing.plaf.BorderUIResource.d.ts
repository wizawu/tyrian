declare namespace javax {
    namespace swing {
        namespace plaf {
            class BorderUIResource implements javax.swing.border.Border , javax.swing.plaf.UIResource , java.io.Serializable {
                public static getEtchedBorderUIResource(): javax.swing.border.Border
                public static getLoweredBevelBorderUIResource(): javax.swing.border.Border
                public static getRaisedBevelBorderUIResource(): javax.swing.border.Border
                public static getBlackLineBorderUIResource(): javax.swing.border.Border
                public constructor(arg0: javax.swing.border.Border)
                public paintBorder(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
                public getBorderInsets(arg0: java.awt.Component): java.awt.Insets
                public isBorderOpaque(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}