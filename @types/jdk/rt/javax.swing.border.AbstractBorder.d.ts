declare namespace javax {
    namespace swing {
        namespace border {
            abstract class AbstractBorder implements javax.swing.border.Border , java.io.Serializable {
                public constructor()
                public paintBorder(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
                public getBorderInsets(arg0: java.awt.Component): java.awt.Insets
                public getBorderInsets(arg0: java.awt.Component, arg1: java.awt.Insets): java.awt.Insets
                public isBorderOpaque(): boolean
                public getInteriorRectangle(arg0: java.awt.Component, arg1: int, arg2: int, arg3: int, arg4: int): java.awt.Rectangle
                public static getInteriorRectangle(arg0: java.awt.Component, arg1: javax.swing.border.Border, arg2: int, arg3: int, arg4: int, arg5: int): java.awt.Rectangle
                public getBaseline(arg0: java.awt.Component, arg1: int, arg2: int): int
                public getBaselineResizeBehavior(arg0: java.awt.Component): java.awt.Component$BaselineResizeBehavior
                public static class: java.lang.Class<any>
            }
        }
    }
}