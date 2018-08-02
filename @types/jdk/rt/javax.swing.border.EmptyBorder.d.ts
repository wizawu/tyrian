declare namespace javax {
    namespace swing {
        namespace border {
            class EmptyBorder extends javax.swing.border.AbstractBorder implements java.io.Serializable {
                protected left: int
                protected right: int
                protected top: int
                protected bottom: int
                public constructor(arg0: int, arg1: int, arg2: int, arg3: int)
                public constructor(arg0: java.awt.Insets)
                public paintBorder(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
                public getBorderInsets(arg0: java.awt.Component, arg1: java.awt.Insets): java.awt.Insets
                public getBorderInsets(): java.awt.Insets
                public isBorderOpaque(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}